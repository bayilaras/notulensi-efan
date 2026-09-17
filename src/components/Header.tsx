import React from 'react';
import { FileText, Mic, CheckSquare, Layers, Sparkles, Printer, Copy, Check, Download } from 'lucide-react';

interface HeaderProps {
  activeTab: 'notulensi' | 'transcript' | 'actionItems' | 'workflow' | 'aiTools';
  setActiveTab: (tab: 'notulensi' | 'transcript' | 'actionItems' | 'workflow' | 'aiTools') => void;
  onPrint: () => void;
  onCopyAll: () => void;
  copied: boolean;
  onDownloadTxt: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onPrint,
  onCopyAll,
  copied,
  onDownloadTxt,
}) => {
  return (
    <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Top institution bar */}
      <div className="bg-slate-900 text-slate-200 px-4 py-2 text-xs font-medium flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            KEMENTERIAN ATR / BPN
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-blue-400 font-semibold tracking-wide">PT BANK RAKYAT INDONESIA (PERSERO) TBK</span>
          <span className="text-slate-500">•</span>
          <span className="text-amber-400 font-medium">PT PRADITA</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span>Audio: 24m 24s</span>
          <span>•</span>
          <span className="bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/60 font-mono text-[11px]">
            Speech-to-Text Verified
          </span>
        </div>
      </div>

      {/* Main app bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-900 text-white flex items-center justify-center shadow-md shadow-emerald-900/10">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-tight">
                Notulensi & Transkrip Rapat Koordinasi
              </h1>
              <span className="bg-amber-100 text-amber-800 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                Plafon Rp 219 Juta
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Pengalihan Alokasi Bantuan: Lobi → Perluasan Ruang Rapat (Kapasitas 100 Orang)
            </p>
          </div>
        </div>

        {/* Global Action Toolbar */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
            title="Cetak atau Simpan sebagai PDF"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span>Cetak / PDF</span>
          </button>

          <button
            onClick={onDownloadTxt}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
            title="Unduh Teks Notulensi Lengkap"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>Unduh TXT</span>
          </button>

          <button
            onClick={onCopyAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-95 rounded-lg shadow-sm transition-all"
            title="Salin seluruh Notulensi ke Clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-200" />
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-emerald-100" />
                <span>Salin Notulensi</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex space-x-1 border-t border-slate-100 overflow-x-auto py-1.5 scrollbar-none" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('notulensi')}
            className={`flex items-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'notulensi'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileText className={`w-4 h-4 ${activeTab === 'notulensi' ? 'text-emerald-700' : 'text-slate-400'}`} />
            <span>Notulensi Resmi (Format Dinas)</span>
          </button>

          <button
            onClick={() => setActiveTab('transcript')}
            className={`flex items-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'transcript'
                ? 'bg-blue-50 text-blue-800 border border-blue-200/80 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Mic className={`w-4 h-4 ${activeTab === 'transcript' ? 'text-blue-700' : 'text-slate-400'}`} />
            <span>Transkrip Audio Speech-to-Text</span>
          </button>

          <button
            onClick={() => setActiveTab('actionItems')}
            className={`flex items-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'actionItems'
                ? 'bg-amber-50 text-amber-800 border border-amber-200/80 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <CheckSquare className={`w-4 h-4 ${activeTab === 'actionItems' ? 'text-amber-700' : 'text-slate-400'}`} />
            <span>Matriks Tindak Lanjut & Action Items</span>
          </button>

          <button
            onClick={() => setActiveTab('workflow')}
            className={`flex items-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'workflow'
                ? 'bg-purple-50 text-purple-800 border border-purple-200/80 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className={`w-4 h-4 ${activeTab === 'workflow' ? 'text-purple-700' : 'text-slate-400'}`} />
            <span>Alur 3 Pihak & Teknis Renovasi</span>
          </button>

          <button
            onClick={() => setActiveTab('aiTools')}
            className={`flex items-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'aiTools'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>AI Generator & Transkrip Baru</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
