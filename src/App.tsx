import React, { useState } from 'react';
import { initialNotulensi, meetingTranscript } from './data/meetingData';
import { NotulensiDocument, ActionItem } from './types';
import { Header } from './components/Header';
import { NotulensiView } from './components/NotulensiView';
import { TranscriptView } from './components/TranscriptView';
import { ActionItemsView } from './components/ActionItemsView';
import { WorkflowTechnicalView } from './components/WorkflowTechnicalView';
import { AiAssistantModal } from './components/AiAssistantModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'notulensi' | 'transcript' | 'actionItems' | 'workflow' | 'aiTools'
  >('notulensi');
  const [document, setDocument] = useState<NotulensiDocument>(initialNotulensi);
  const [segments] = useState(meetingTranscript);
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAll = () => {
    const textToCopy = `
${document.title}
${document.subtitle}
Nomor: ${document.nomorDokumen}
Hari / Tanggal: ${document.date}
Waktu: ${document.time}
Tempat: ${document.location}
Pimpinan Rapat: ${document.leader}

AGENDA RAPAT:
${document.agenda}

PESERTA RAPAT:
${document.attendees.map((a, i) => `${i + 1}. ${a.name} - ${a.role} (${a.organization})`).join('\n')}

I. LATAR BELAKANG:
${document.background}

II. POKOK PEMBAHASAN:
${document.keyDiscussionPoints
  .map(
    (dp) => `\n${dp.title}\n${dp.description}\n${dp.points.map((p) => `• ${p}`).join('\n')}`
  )
  .join('\n')}

III. KETETAPAN ANGGARAN & PERPAJAKAN:
• Pagu Disetujui: ${document.budgetAndTax.approvedBudget}
• Sifat: ${document.budgetAndTax.budgetType}
• Sumber Dana: ${document.budgetAndTax.sourceFund}
• Ketentuan Pajak: ${document.budgetAndTax.taxNotes}
• Mekanisme Pencairan: ${document.budgetAndTax.paymentMechanism}

IV. RUANG LINGKUP PEKERJAAN FISIK (INTERIOR):
${document.scopeOfWork
  .map((s) => `• ${s.category}:\n${s.details.map((d) => `  - ${d}`).join('\n')}`)
  .join('\n')}

V. KESEPAKATAN & KEPUTUSAN:
${document.decisions.map((d) => `• [${d.id}] ${d.title}: ${d.description}`).join('\n')}

VI. RENCANA TINDAK LANJUT (ACTION ITEMS):
${document.actionItems
  .map(
    (a, i) =>
      `${i + 1}. ${a.task} | PIC: ${a.pic} (${a.organization}) | Target: ${a.deadline} | Status: ${a.status}`
  )
  .join('\n')}

PENUTUP:
${document.closingNotes}
`.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const textToDownload = `
${document.title}
${document.subtitle}
Nomor: ${document.nomorDokumen}
Hari / Tanggal: ${document.date}
Waktu: ${document.time}
Tempat: ${document.location}
Pimpinan Rapat: ${document.leader}

AGENDA RAPAT:
${document.agenda}

PESERTA RAPAT:
${document.attendees.map((a, i) => `${i + 1}. ${a.name} - ${a.role} (${a.organization})`).join('\n')}

I. LATAR BELAKANG:
${document.background}

II. POKOK PEMBAHASAN:
${document.keyDiscussionPoints
  .map(
    (dp) => `\n${dp.title}\n${dp.description}\n${dp.points.map((p) => `• ${p}`).join('\n')}`
  )
  .join('\n')}

III. KETETAPAN ANGGARAN & PERPAJAKAN:
• Pagu Disetujui: ${document.budgetAndTax.approvedBudget}
• Sifat: ${document.budgetAndTax.budgetType}
• Sumber Dana: ${document.budgetAndTax.sourceFund}
• Ketentuan Pajak: ${document.budgetAndTax.taxNotes}
• Mekanisme Pencairan: ${document.budgetAndTax.paymentMechanism}

IV. RUANG LINGKUP PEKERJAAN FISIK (INTERIOR):
${document.scopeOfWork
  .map((s) => `• ${s.category}:\n${s.details.map((d) => `  - ${d}`).join('\n')}`)
  .join('\n')}

V. KESEPAKATAN & KEPUTUSAN:
${document.decisions.map((d) => `• [${d.id}] ${d.title}: ${d.description}`).join('\n')}

VI. RENCANA TINDAK LANJUT (ACTION ITEMS):
${document.actionItems
  .map(
    (a, i) =>
      `${i + 1}. ${a.task} | PIC: ${a.pic} (${a.organization}) | Target: ${a.deadline} | Status: ${a.status}`
  )
  .join('\n')}

--------------------------------------------------------------------------------
TRANSKRIP DIALOG AUDIO LENGKAP (24 MENIT 24 DETIK):
--------------------------------------------------------------------------------
${segments.map((s) => `[${s.timestamp}] ${s.speaker} (${s.organization}):\n${s.text}\n`).join('\n')}
`.trim();

    const blob = new Blob([textToDownload], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement('a');
    a.href = url;
    a.download = `Notulensi_Resmi_ATRBPN_BRI_2026.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUpdateDocument = (updatedDoc: NotulensiDocument) => {
    setDocument(updatedDoc);
  };

  const handleUpdateActionItems = (updatedItems: ActionItem[]) => {
    setDocument((prev) => ({
      ...prev,
      actionItems: updatedItems,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
        onCopyAll={handleCopyAll}
        copied={copied}
        onDownloadTxt={handleDownloadTxt}
      />

      <main className="flex-1 pb-16">
        {activeTab === 'notulensi' && (
          <NotulensiView
            document={document}
            onUpdateDocument={handleUpdateDocument}
          />
        )}

        {activeTab === 'transcript' && (
          <TranscriptView segments={segments} />
        )}

        {activeTab === 'actionItems' && (
          <ActionItemsView
            actionItems={document.actionItems}
            onUpdateItems={handleUpdateActionItems}
          />
        )}

        {activeTab === 'workflow' && <WorkflowTechnicalView />}

        {activeTab === 'aiTools' && (
          <AiAssistantModal document={document} segments={segments} />
        )}
      </main>

      {/* Official Footer */}
      <footer className="no-print bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Sistem Notulensi & Transkripsi Audio Digital • Kementerian ATR/BPN & Bank BRI
          </span>
          <span className="font-mono text-[11px] text-slate-400">
            Dokumen: {document.nomorDokumen}
          </span>
        </div>
      </footer>
    </div>
  );
}
