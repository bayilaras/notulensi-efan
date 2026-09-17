import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Mic, 
  Square, 
  Upload, 
  FileText, 
  Check, 
  Copy, 
  AlertCircle,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { NotulensiDocument, TranscriptSegment } from '../types';

interface AiAssistantProps {
  document: NotulensiDocument;
  segments: TranscriptSegment[];
}

export const AiAssistantModal: React.FC<AiAssistantProps> = ({
  document,
  segments,
}) => {
  const [messages, setMessages] = useState<
    Array<{ role: 'user' | 'assistant'; text: string; timestamp: string }>
  >([
    {
      role: 'assistant',
      text: 'Halo! Saya asisten AI untuk Rapat Koordinasi Kementerian ATR/BPN, Bank BRI, dan PT Pradita. Anda dapat meminta saya menyusun Memo Dinas, Surat Penunjukan, penjelasan aspek pajak PPN 11%, atau menanyakan detail apapun dari hasil transkripsi 24 menit tadi.',
      timestamp: 'Baru saja',
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Audio recording / speech-to-text test state
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [transcribing, setTranscribing] = useState(false);
  const [newTranscriptionResult, setNewTranscriptionResult] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  if (import.meta.env.MODE === 'github-pages') {
    return (
      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
        <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <h2 className="text-lg font-bold text-slate-900">
              Asisten AI belum tersedia di GitHub Pages
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Pembuatan dokumen dengan AI serta transkripsi rekaman atau unggahan audio baru
            memerlukan server backend. GitHub Pages hanya menyajikan halaman statis,
            sehingga fitur tersebut belum dapat digunakan pada situs ini.
          </p>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Tab Notulensi, Transkrip, Action Items, dan Alur Teknis tetap tersedia.
            Anda dapat membaca, menyalin, mencetak, dan mengunduh dokumen yang sudah ada.
          </p>
        </section>
      </div>
    );
  }

  const quickTemplates = [
    {
      label: '📝 Draft Nota Dinas ke Pak Dirjen',
      prompt:
        'Buatkan draft resmi Nota Dinas dari Pak Marwan (Biro Umum) kepada Bapak Dirjen Kementerian ATR/BPN mengenai laporan hasil rapat koordinasi dengan Bank BRI dan PT Pradita terkait persetujuan pengalihan alokasi bantuan ke ruang rapat 100 orang.',
    },
    {
      label: '✉️ Draft Surat Pengalihan & Penunjukan ke BRI',
      prompt:
        'Buatkan draft surat dinas resmi dari Kementerian ATR/BPN kepada Pimpinan PT Bank BRI (Persero) Tbk (up: Hubungan Antar Lembaga) mengenai permohonan pengalihan renovasi lobi ke ruang rapat dan penunjukan PT Pradita sebagai vendor pelaksana.',
    },
    {
      label: '📑 Rangkuman Eksekutif 1 Halaman',
      prompt:
        'Buatkan ringkasan eksekutif 1 halaman (Executive Summary) yang padat, jelas, dan siap dipresentasikan kepada pimpinan mengenai poin penting rapat, anggaran 219 juta, perpajakan, dan timeline pengerjaan.',
    },
    {
      label: '💰 Analisis Pajak & DJP Coretax',
      prompt:
        'Jelaskan secara komprehensif aspek perpajakan (PPN 11%, PPh, e-Billing, status PKP PT Pradita, dan sistem Coretax) berdasarkan kesepakatan dalam rapat ini.',
    },
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputPrompt;
    if (!query.trim() || loading) return;

    const userMessage = {
      role: 'user' as const,
      text: query,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputPrompt('');
    setLoading(true);

    try {
      // Build context from the meeting document and transcript
      const contextPrompt = `
Berikut adalah data notulensi dan transkrip resmi rapat koordinasi:
Agenda: ${document.agenda}
Pagu Anggaran: ${document.budgetAndTax.approvedBudget} (${document.budgetAndTax.sourceFund})
Status Pajak: ${document.budgetAndTax.taxNotes}
Peserta:
- Pak Marwan (Kementerian ATR/BPN)
- Ibu Ayu (PT Bank BRI Tbk)
- Pak Fuad (PT Pradita - Rekanan PKP)

Pertanyaan / Permintaan Pengguna:
${query}

Mohon jawab dengan format profesional, bahasa Indonesia baku kedinasan yang rapi dan elegan.
`;

      const res = await fetch('/api/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: contextPrompt,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: data.text || 'Maaf, tidak ada respons yang dihasilkan.',
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `Terjadi kendala saat memproses: ${err.message || 'Gagal menghubungi server Gemini'}. Harap pastikan GEMINI_API_KEY tersedia di Settings > Secrets.`,
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Microphone recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await processAudioBlob(audioBlob, 'audio/webm');
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      alert('Tidak dapat mengakses mikrofon. Pastikan izin mikrofon telah diberikan di browser.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
      processAudioBlob(file, file.type || 'audio/mp3');
    }
  };

  const processAudioBlob = async (blob: Blob, mimeType: string) => {
    setTranscribing(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Data = (reader.result as string).split(',')[1];
        const res = await fetch('/api/gemini/transcribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            audioBase64: base64Data,
            mimeType: mimeType || 'audio/webm',
            customPrompt:
              'Transkripsikan rekaman audio ini ke dalam teks Bahasa Indonesia yang rapi. Susun hasil transkripsi dan butir notulensi pokok pembicaraan.',
          }),
        });

        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setNewTranscriptionResult(data.text);
      };
      reader.readAsDataURL(blob);
    } catch (err: any) {
      alert('Gagal mentranskripsi audio: ' + (err.message || 'Unknown error'));
    } finally {
      setTranscribing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-2xl p-6 text-white shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-200">
            AI Assistant & Speech-to-Text Workspace
          </span>
        </div>
        <h2 className="text-xl font-bold tracking-tight">
          Asisten Pintar Notulensi & Dokumen Kedinasan
        </h2>
        <p className="text-xs text-emerald-100/90 mt-1 max-w-2xl">
          Gunakan Gemini AI untuk membuat surat dinas, nota kesepahaman, resume eksekutif, atau menguji speech-to-text rekaman audio baru secara langsung.
        </p>
      </div>

      {/* Quick Prompt Cards */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Templat Tindak Lanjut Cepat:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickTemplates.map((tmpl, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(tmpl.prompt)}
              className="p-3.5 text-left rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xs transition-all group"
            >
              <span className="font-bold text-xs text-slate-900 group-hover:text-emerald-800 block mb-1">
                {tmpl.label}
              </span>
              <span className="text-[11px] text-slate-500 line-clamp-2">
                {tmpl.prompt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat & Generation Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col h-[480px]">
        {/* Messages container */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 text-xs sm:text-sm ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-4 rounded-2xl max-w-[85%] leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-emerald-700 text-white rounded-tr-xs'
                    : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-xs'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                <div className="mt-2 pt-2 flex items-center justify-between gap-4 border-t border-slate-200/40 text-[10px] text-slate-400">
                  <span>{msg.timestamp}</span>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => copyToClipboard(msg.text, idx)}
                      className="hover:text-emerald-700 flex items-center gap-1 text-slate-500"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Salin Teks</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 text-xs text-slate-500 items-center">
              <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 bg-slate-100 rounded-xl flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-700" />
                <span>Gemini sedang menyusun jawaban berdasarkan notulensi...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="p-3.5 border-t border-slate-200 bg-slate-50/70 rounded-b-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Tanyakan hal spesifik atau minta susun surat dinas..."
              className="flex-1 py-2 px-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
            />
            <button
              type="submit"
              disabled={loading || !inputPrompt.trim()}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim</span>
            </button>
          </form>
        </div>
      </div>

      {/* Live Audio / Speech to Text Tester */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Mic className="w-5 h-5 text-emerald-700" />
          <h3 className="text-base font-bold text-slate-900">
            Uji Coba Rekam Suara Baru / Unggah Audio (Speech-to-Text)
          </h3>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          Anda juga dapat merekam langsung melalui mikrofon atau mengunggah rekaman audio rapat lain untuk ditranskripsikan secara otomatis.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {isRecording ? (
            <button
              onClick={stopRecording}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold animate-pulse shadow-md transition-colors"
            >
              <Square className="w-4 h-4" />
              <span>Hentikan Rekaman (Sedang Merekam...)</span>
            </button>
          ) : (
            <button
              onClick={startRecording}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Mic className="w-4 h-4" />
              <span>Rekam Suara Rapat (Mikrofon)</span>
            </button>
          )}

          <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 cursor-pointer transition-colors">
            <Upload className="w-4 h-4 text-slate-500" />
            <span>Unggah Berkas Audio (MP3/WAV/M4A)</span>
            <input
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        {transcribing && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs text-emerald-800">
            <Loader2 className="w-5 h-5 animate-spin text-emerald-700 shrink-0" />
            <span>Sedang memproses dan mentranskripsikan berkas audio dengan Gemini Speech-to-Text...</span>
          </div>
        )}

        {newTranscriptionResult && (
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900">Hasil Transkripsi & Notulensi Audio Baru:</span>
              <button
                onClick={() => navigator.clipboard.writeText(newTranscriptionResult)}
                className="text-xs text-emerald-700 hover:underline flex items-center gap-1"
              >
                <Copy className="w-3 h-3" /> Salin
              </button>
            </div>
            <div className="whitespace-pre-line leading-relaxed">
              {newTranscriptionResult}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
