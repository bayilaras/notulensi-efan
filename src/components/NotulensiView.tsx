import React, { useState } from 'react';
import { NotulensiDocument } from '../types';
import { 
  Building2, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  DollarSign, 
  CheckCircle2, 
  FileCheck, 
  Share2, 
  Edit3, 
  Check, 
  AlertCircle,
  Briefcase
} from 'lucide-react';

interface NotulensiViewProps {
  document: NotulensiDocument;
  onUpdateDocument: (doc: NotulensiDocument) => void;
}

export const NotulensiView: React.FC<NotulensiViewProps> = ({
  document,
  onUpdateDocument,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDoc, setEditedDoc] = useState<NotulensiDocument>(document);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleSave = () => {
    onUpdateDocument(editedDoc);
    setIsEditing(false);
  };

  const copyText = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      {/* Control Bar (Hidden on print) */}
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-semibold text-slate-700">Format Resmi Notulensi Rapat Kedinasan</span>
          <span className="text-slate-400">•</span>
          <span className="text-xs text-slate-500 font-mono">No: {document.nomorDokumen}</span>
        </div>

        <div className="flex items-center gap-2">
          {isEditing ? (
            <>
              <button
                onClick={() => {
                  setEditedDoc(document);
                  setIsEditing(false);
                }}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors"
              >
                <Check className="w-3.5 h-3.5" />
                Simpan Perubahan
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-500" />
              <span>Edit Notulensi</span>
            </button>
          )}
        </div>
      </div>

      {/* Document Sheet (Paper Style) */}
      <article className="document-sheet bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-md text-slate-800 leading-relaxed print:p-0 print:border-none print:shadow-none">
        {/* Official Header / Kop Rapat */}
        <div className="border-b-2 border-slate-900 pb-5 mb-6 text-center">
          <div className="flex justify-center items-center gap-6 mb-2">
            <div className="text-center">
              <p className="text-xs font-bold tracking-widest text-slate-600 uppercase">
                KEMENTERIAN AGRARIA DAN TATA RUANG / BADAN PERTANAHAN NASIONAL
              </p>
              <p className="text-xs font-semibold text-slate-500 uppercase">
                BIRO UMUM DAN PENGADAAN BARANG/JASA
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Bekerja sama dengan PT BANK RAKYAT INDONESIA (PERSERO) TBK
              </p>
            </div>
          </div>
          <div className="h-0.5 w-full bg-slate-900 mt-2 mb-0.5"></div>
          <div className="h-px w-full bg-slate-400"></div>

          <div className="mt-5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight uppercase">
              {document.title}
            </h2>
            <p className="text-sm font-semibold text-emerald-800 mt-1">
              {document.subtitle}
            </p>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Nomor: {document.nomorDokumen}
            </p>
          </div>
        </div>

        {/* Meeting Metadata Grid */}
        <section className="bg-slate-50/80 rounded-xl p-4 sm:p-5 border border-slate-200/80 mb-7 text-xs sm:text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block text-xs">Hari / Tanggal:</span>
                <span className="font-semibold text-slate-900">{document.date}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block text-xs">Waktu Pelaksanaan:</span>
                <span className="font-semibold text-slate-900">{document.time}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block text-xs">Media / Tempat:</span>
                <span className="font-semibold text-slate-900">{document.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Users className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block text-xs">Pimpinan Rapat:</span>
                <span className="font-semibold text-slate-900">{document.leader}</span>
              </div>
            </div>
          </div>

          <div className="mt-3.5 pt-3 border-t border-slate-200">
            <span className="text-slate-500 block text-xs mb-1">Agenda Pembahasan:</span>
            <p className="font-medium text-slate-800 text-xs sm:text-sm">
              {document.agenda}
            </p>
          </div>
        </section>

        {/* Section 1: Daftar Peserta Rapat */}
        <section className="mb-7">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">1</span>
              Daftar Hadir & Unsur Instansi
            </h3>
            <span className="text-xs text-slate-500">3 Instansi Terlibat</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-12 text-center">No</th>
                  <th className="py-2.5 px-3">Nama Lengkap</th>
                  <th className="py-2.5 px-3">Jabatan / Peran</th>
                  <th className="py-2.5 px-3">Instansi / Lembaga</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {document.attendees.map((att, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="py-2.5 px-3 text-center font-mono text-slate-500">{idx + 1}</td>
                    <td className="py-2.5 px-3 font-bold text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${att.avatarColor || 'bg-slate-400'}`}></span>
                      {att.name}
                    </td>
                    <td className="py-2.5 px-3">{att.role}</td>
                    <td className="py-2.5 px-3">
                      <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                        {att.organization}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Latar Belakang & Urgensi */}
        <section className="mb-7">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">2</span>
              Latar Belakang & Urgensi
            </h3>
            <button
              onClick={() => copyText(document.background, 'bg')}
              className="no-print text-xs text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              {copiedSection === 'bg' ? <Check className="w-3 h-3" /> : <Share2 className="w-3 h-3" />}
              <span>Salin</span>
            </button>
          </div>

          <div className="bg-emerald-50/50 border-l-4 border-emerald-600 p-4 rounded-r-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>{document.background}</p>
          </div>
        </section>

        {/* Section 3: Poin-Poin Pembahasan Rapat */}
        <section className="mb-7">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">3</span>
              Pokok-Pokok Pembahasan Rinci
            </h3>
          </div>

          <div className="space-y-4">
            {document.keyDiscussionPoints.map((item, index) => (
              <div key={index} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
                <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <span className="text-emerald-700 font-mono text-xs">{item.title}</span>
                </h4>
                <p className="text-xs text-slate-500 mb-2 italic">
                  {item.description}
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Ketetapan Pagu Anggaran & Aspek Perpajakan */}
        <section className="mb-7">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">4</span>
              Pagu Anggaran, Pajak & Mekanisme Pembayaran
            </h3>
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
              Maksimum Ceiling: Rp 219.000.000,-
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[11px] uppercase font-semibold mb-1">Total Pagu Disetujui BRI</span>
              <p className="text-base font-extrabold text-emerald-800 font-mono">{document.budgetAndTax.approvedBudget}</p>
              <p className="text-[11px] text-slate-600 mt-1">{document.budgetAndTax.budgetType}</p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block text-[11px] uppercase font-semibold mb-1">Klasifikasi Pos Sumber Dana</span>
              <p className="text-sm font-bold text-slate-800">{document.budgetAndTax.sourceFund}</p>
              <p className="text-[11px] text-slate-600 mt-1">
                Diberikan sebagai Sponsorship (bukan pos CSR) karena ATR/BPN tidak masuk kriteria CSR BRI.
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-slate-700 bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/80">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900">Ketentuan Pajak (PPN 11% & PPh): </span>
                <span>{document.budgetAndTax.taxNotes}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 pt-2 border-t border-amber-200/60">
              <FileCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900">Alur Pencairan Dana: </span>
                <span>{document.budgetAndTax.paymentMechanism}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Ruang Lingkup Fisik & Teknis */}
        <section className="mb-7">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">5</span>
              Ruang Lingkup Fisik / Interior Ruang Rapat
            </h3>
            <span className="text-xs text-slate-500">Murni Interior (Non-Struktur)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {document.scopeOfWork.map((scope, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-2 text-emerald-800 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
                  {scope.category}
                </h4>
                <ul className="space-y-1 text-xs text-slate-700">
                  {scope.details.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Kesepakatan / Keputusan Rapat */}
        <section className="mb-7">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">6</span>
              Kesepakatan & Ketetapan Bersama (Decisions)
            </h3>
          </div>

          <div className="space-y-2.5">
            {document.decisions.map((dec) => (
              <div key={dec.id} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900">{dec.title}</span>
                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 bg-slate-100 rounded text-slate-600">
                      {dec.id}
                    </span>
                  </div>
                  <p className="text-slate-700 mt-1 text-xs">{dec.description}</p>
                  <p className="text-slate-500 text-[11px] mt-1 italic">
                    Dampak: {dec.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Matriks Rencana Tindak Lanjut */}
        <section className="mb-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">7</span>
              Rencana Tindak Lanjut (Action Items)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-10 text-center">No</th>
                  <th className="py-2.5 px-3">Uraian Tindak Lanjut</th>
                  <th className="py-2.5 px-3 w-32">Penanggung Jawab (PIC)</th>
                  <th className="py-2.5 px-3 w-28">Batas Waktu</th>
                  <th className="py-2.5 px-3 w-24 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {document.actionItems.map((act, idx) => (
                  <tr key={act.id} className="hover:bg-slate-50/70">
                    <td className="py-2.5 px-3 text-center font-mono text-slate-500">{idx + 1}</td>
                    <td className="py-2.5 px-3">
                      <span className="font-semibold text-slate-900 block">{act.task}</span>
                      {act.notes && <span className="text-[11px] text-slate-500 mt-0.5 block italic">{act.notes}</span>}
                    </td>
                    <td className="py-2.5 px-3 font-medium">
                      <span className="block text-slate-900 font-bold">{act.pic}</span>
                      <span className="text-[11px] text-slate-500">{act.organization}</span>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-700">{act.deadline}</td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          act.status === 'Done'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : act.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800 border border-blue-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {act.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8: Lembar Pengesahan / Tanda Tangan */}
        <section className="pt-6 border-t-2 border-slate-300">
          <p className="text-xs text-slate-500 mb-6 text-center italic">
            Demikian notulensi rapat ini disusun secara transparan dan akurat berdasarkan rekaman audio rapat koordinasi untuk dipergunakan sebagaimana mestinya.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs">
            <div>
              <p className="text-slate-500 mb-1">Mewakili Kementerian ATR/BPN</p>
              <p className="font-bold text-slate-800">Biro Umum & Pengadaan</p>
              <div className="h-16 flex items-end justify-center">
                <span className="text-slate-300 font-mono text-[10px]">[Tanda Tangan Elektronik]</span>
              </div>
              <p className="font-bold text-slate-900 underline mt-1">Pak Marwan</p>
              <p className="text-[11px] text-slate-500">Pimpinan Rapat Koordinasi</p>
            </div>

            <div>
              <p className="text-slate-500 mb-1">Mewakili PT Bank BRI (Persero) Tbk</p>
              <p className="font-bold text-slate-800">Hubungan Antar Lembaga</p>
              <div className="h-16 flex items-end justify-center">
                <span className="text-slate-300 font-mono text-[10px]">[Tanda Tangan Elektronik]</span>
              </div>
              <p className="font-bold text-slate-900 underline mt-1">Ibu Ayu</p>
              <p className="text-[11px] text-slate-500">Pihak Pemberi Sponsorship</p>
            </div>

            <div>
              <p className="text-slate-500 mb-1">Mewakili Rekanan Pelaksana</p>
              <p className="font-bold text-slate-800">PT Pradita</p>
              <div className="h-16 flex items-end justify-center">
                <span className="text-slate-300 font-mono text-[10px]">[Tanda Tangan Elektronik]</span>
              </div>
              <p className="font-bold text-slate-900 underline mt-1">Pak Fuad</p>
              <p className="text-[11px] text-slate-500">Direktur / Pelaksana Teknis</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
