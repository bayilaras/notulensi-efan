import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));

  // Initialize Gemini SDK with User-Agent header as required
  const apiKey = process.env.GEMINI_API_KEY || '';
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', hasGeminiKey: Boolean(apiKey) });
  });

  // AI Assistance & Question Answering / Custom Report Generation
  app.post('/api/gemini/generate', async (req, res) => {
    try {
      if (!ai) {
        return res.status(400).json({
          error: 'GEMINI_API_KEY belum dikonfigurasi di environment secrets.',
        });
      }

      const { prompt, systemInstruction } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt diperlukan.' });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction:
            systemInstruction ||
            'Anda adalah Asisten Notulensi & Administrasi Profesional untuk Kementerian ATR/BPN dan institusi BUMN di Indonesia. Berikan jawaban yang tepat, formal, sopan, dan terstruktur dalam Bahasa Indonesia.',
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error('Error generating content with Gemini:', error);
      res.status(500).json({
        error: error?.message || 'Gagal memproses permintaan dengan AI.',
      });
    }
  });

  // Speech to Text & Audio Processing Endpoint
  app.post('/api/gemini/transcribe', async (req, res) => {
    try {
      if (!ai) {
        return res.status(400).json({
          error: 'GEMINI_API_KEY belum dikonfigurasi di environment secrets.',
        });
      }

      const { audioBase64, mimeType = 'audio/webm', customPrompt } = req.body;
      if (!audioBase64) {
        return res.status(400).json({ error: 'Data audio base64 diperlukan.' });
      }

      const audioPart = {
        inlineData: {
          mimeType,
          data: audioBase64,
        },
      };

      const promptText =
        customPrompt ||
        'Transkripsikan rekaman audio ini ke dalam teks Bahasa Indonesia yang akurat. Identifikasi pembicara (speaker diarization jika ada), buatkan ringkasan pokok pembicaraan, dan susun poin-poin notulensi rapat secara rapi.';

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: {
          parts: [audioPart, { text: promptText }],
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error('Error transcribing audio:', error);
      res.status(500).json({
        error: error?.message || 'Gagal melakukan transkripsi audio.',
      });
    }
  });

  // Vite middleware in dev or static serving in prod
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
