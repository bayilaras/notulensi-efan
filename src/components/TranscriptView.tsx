import React, { useState, useMemo } from 'react';
import { TranscriptSegment } from '../types';
import { 
  Search, 
  Filter, 
  Copy, 
  Check, 
  Play, 
  Pause, 
  Download, 
  Volume2, 
  User, 
  MessageSquare,
  Sparkles,
  Clock
} from 'lucide-react';

interface TranscriptViewProps {
  segments: TranscriptSegment[];
}

export const TranscriptView: React.FC<TranscriptViewProps> = ({ segments }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [simulatedTime, setSimulatedTime] = useState(0);

  // Filtered segments
  const filteredSegments = useMemo(() => {
    return segments.filter((seg) => {
      const matchSearch =
        seg.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seg.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seg.timestamp.toLowerCase().includes(searchQuery.toLowerCase());

      const matchSpeaker =
        selectedSpeaker === 'all' || seg.speaker.toLowerCase().includes(selectedSpeaker.toLowerCase());

      const matchCategory =
        selectedCategory === 'all' || seg.category === selectedCategory;

      return matchSearch && matchSpeaker && matchCategory;
    });
  }, [segments, searchQuery, selectedSpeaker, selectedCategory]);

  const copySegment = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyFullTranscript = () => {
    const fullText = segments
      .map((s) => `[${s.timestamp}] ${s.speaker} (${s.organization}):\n${s.text}\n`)
      .join('\n');
    navigator.clipboard.writeText(fullText);
    setCopiedId('full');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadTranscriptTxt = () => {
    const fullText = segments
      .map((s) => `[${s.timestamp}] ${s.speaker} (${s.organization})\n${s.text}\n`)
      .join('\n');
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Transkrip_Audio_Rapat_ATRBPN_BRI_2026.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getSpeakerStyle = (speaker: string) => {
    if (speaker.includes('Marwan')) {
      return {
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        dot: 'bg-emerald-600',
        card: 'border-l-4 border-l-emerald-600',
      };
    }
    if (speaker.includes('Ayu')) {
      return {
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
        dot: 'bg-blue-600',
        card: 'border-l-4 border-l-blue-600',
      };
    }
    if (speaker.includes('Fuad')) {
      return {
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
        dot: 'bg-amber-600',
        card: 'border-l-4 border-l-amber-600',
      };
    }
    return {
      badge: 'bg-slate-100 text-slate-800 border-slate-200',
      dot: 'bg-slate-600',
      card: 'border-l-4 border-l-slate-600',
    };
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      {/* Overview stats bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base font-bold text-slate-900">
                Transkripsi Dialog Audio (Speech-to-Text)
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono">
                Total: 24 Menit 24 Detik
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Hasil transkripsi audio percakapan rapat koordinasi penyesuaian anggaran bantuan antara ATR/BPN, BRI, dan PT Pradita.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={copyFullTranscript}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
            >
              {copiedId === 'full' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === 'full' ? 'Semua Tersalin' : 'Salin Semua Transkrip'}</span>
            </button>

            <button
              onClick={downloadTranscriptTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-700" />
              <span>Unduh TXT</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative sm:col-span-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Cari kata kunci (cth: CSR, 219, PPN, lobi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-slate-800"
            />
          </div>

          <div>
            <select
              value={selectedSpeaker}
              onChange={(e) => setSelectedSpeaker(e.target.value)}
              className="w-full py-1.5 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"
            >
              <option value="all">Semua Pembicara</option>
              <option value="Marwan">Pak Marwan (ATR/BPN)</option>
              <option value="Ayu">Ibu Ayu (Bank BRI)</option>
              <option value="Fuad">Pak Fuad (PT Pradita)</option>
            </select>
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-1.5 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"
            >
              <option value="all">Semua Kategori Topik</option>
              <option value="Anggaran">Topik: Anggaran</option>
              <option value="Administrasi">Topik: Administrasi / SPK</option>
              <option value="Pajak">Topik: Pajak & PPN</option>
              <option value="Teknis/Fisik">Topik: Teknis / Fisik Ruangan</option>
              <option value="Kesepakatan">Topik: Kesepakatan / Closing</option>
            </select>
          </div>
        </div>

        {/* Quick keyword chips */}
        <div className="mt-3 flex items-center gap-1.5 flex-wrap text-xs text-slate-500">
          <span className="text-[11px] font-medium text-slate-400">Kata Kunci Populer:</span>
          {['219', 'CSR', 'Sponsorship', 'Ruang Rapat', 'PPN', 'Coretax', 'Partisi'].map((kw) => (
            <button
              key={kw}
              onClick={() => setSearchQuery(kw)}
              className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                searchQuery === kw
                  ? 'bg-emerald-700 text-white font-semibold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {kw}
            </button>
          ))}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[11px] text-red-600 hover:underline ml-1"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Transcript Segments List */}
      <div className="space-y-4">
        {filteredSegments.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200 text-slate-500">
            <MessageSquare className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="font-semibold text-sm">Tidak ditemukan kutipan transkrip yang cocok.</p>
            <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
          </div>
        ) : (
          filteredSegments.map((segment) => {
            const style = getSpeakerStyle(segment.speaker);
            return (
              <div
                key={segment.id}
                className={`bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs ${style.card} hover:shadow-xs transition-all`}
              >
                {/* Speaker Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${style.dot}`}></span>
                    <span className="font-bold text-slate-900 text-sm">{segment.speaker}</span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs text-slate-500 font-medium">{segment.organization}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {segment.category && (
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {segment.category}
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {segment.timestamp}
                    </span>

                    <button
                      onClick={() => copySegment(segment.text, segment.id)}
                      className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition-colors"
                      title="Salin bagian transkrip ini"
                    >
                      {copiedId === segment.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Speech Text */}
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {segment.text}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
