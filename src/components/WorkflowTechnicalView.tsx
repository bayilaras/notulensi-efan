import React from 'react';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  CreditCard, 
  Hammer, 
  Camera, 
  Percent, 
  Layout, 
  Users, 
  ShieldCheck,
  Layers
} from 'lucide-react';

export const WorkflowTechnicalView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-8">
      {/* Visual Flow Diagram: 3-Party Coordination */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-700" />
              Tata Kelola Administrasi & Pembayaran Tiga Pihak
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Skema perikatan sponsorship antara Kementerian ATR/BPN, PT Bank BRI (Persero) Tbk, dan PT Pradita
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
            Non-CSR (Sponsorship Hubaga)
          </span>
        </div>

        {/* 3 Parties Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2 font-bold text-xs">
              BPN
            </div>
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Kementerian ATR/BPN</h3>
            <p className="text-[11px] text-slate-600 mt-1">
              Pemilik Fasilitas & Pengarah Kebutuhan. Menerbitkan surat resmi penunjukan rekanan dan permohonan pengalihan lokasi bantuan.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 text-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 font-bold text-xs">
              BRI
            </div>
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm">PT Bank BRI (Persero) Tbk</h3>
            <p className="text-[11px] text-slate-600 mt-1">
              Pemberi Bantuan (Sponsorship). Mengunci pagu definitif Rp 219.000.000 (all-in) dan mentransfer dana pasca BAST & invoice.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 text-center">
            <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center mx-auto mb-2 font-bold text-xs">
              PRD
            </div>
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm">PT Pradita (Vendor)</h3>
            <p className="text-[11px] text-slate-600 mt-1">
              Rekanan Pelaksana Berstatus PKP. Menyusun SPH & RAB pas Rp 219 juta, melaksanakan renovasi interior, dan menerbitkan faktur pajak.
            </p>
          </div>
        </div>

        {/* Chronological Steps */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
            <div>
              <p className="font-bold text-slate-900">Penerbitan Surat Resmi ATR/BPN ke Bank BRI</p>
              <p className="text-slate-600 mt-0.5">
                Surat dinas dari ATR/BPN (Biro Umum / Pimpinan) menyampaikan permohonan resmi pengalihan bantuan dari lobi ke ruang rapat, serta penunjukan PT Pradita sebagai rekanan pelaksana.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
            <div>
              <p className="font-bold text-slate-900">Penyusunan SPH, Desain Denah & RAB Rp 219 Juta</p>
              <p className="text-slate-600 mt-0.5">
                PT Pradita mengukur ulang ruangan, menyusun denah, dan membuat Surat Penawaran Harga (SPH) + RAB yang ditujukan kepada Bank BRI (dengan tembusan/CC ke ATR/BPN) dengan total pas Rp 219.000.000,- all-in.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
            <div>
              <p className="font-bold text-slate-900">Verifikasi Divisi Finance BRI & Konfirmasi Pajak</p>
              <p className="text-slate-600 mt-0.5">
                Ibu Ayu mengonfirmasi ke Divisi Finance BRI mengenai tata cara pemotongan PPN 11% dan PPh (e-billing), serta kepastian rekening giro PT Pradita (Bank BRI).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">4</span>
            <div>
              <p className="font-bold text-slate-900">Pelaksanaan Pekerjaan Fisik Interior</p>
              <p className="text-slate-600 mt-0.5">
                Pekerjaan interior non-struktural: pembongkaran sekat partisi, perpanjangan partisi kusen aluminium lorong, perapihan plafon, karpet, wallpaper, sound system, dan penataan meja/kursi rapat 100 orang.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">5</span>
            <div>
              <p className="font-bold text-slate-900">Penyusunan BAST, Foto Dokumentasi & LPJ</p>
              <p className="text-slate-600 mt-0.5">
                Setelah fisik 100% selesai, ditandatangani Berita Acara Serah Terima (BAST), dokumentasi foto Before-After ruangan, dan rincian pertanggungjawaban (LPJ).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">6</span>
            <div>
              <p className="font-bold text-slate-900">Pencairan Dana Langsung ke Rekening Vendor</p>
              <p className="text-slate-600 mt-0.5">
                Invoice dan dokumen pendukung diserahkan ke Bank BRI. Bank BRI memproses transfer langsung ke rekening giro Bank BRI milik PT Pradita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Old Plan vs New Plan */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Layout className="w-5 h-5 text-emerald-700" />
          Komparasi: Rencana Awal vs Rencana Baru
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-700 uppercase tracking-wide">Rencana Awal (Dibatalkan)</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold text-[10px]">Lobi Utama</span>
            </div>
            <p className="text-slate-600 mb-3">
              Renovasi area lobi kedatangan Kementerian ATR/BPN untuk mempercantik resepsionis.
            </p>
            <ul className="space-y-1.5 text-slate-600">
              <li>• Perbaikan plafon lobi</li>
              <li>• Penggantian karpet dan panel dinding lobi</li>
              <li>• Pintu dan dekorasi resepsionis</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-200 text-slate-500 italic">
              Status: Dialihkan atas arahan pimpinan karena prioritas mendesak rapat stakeholder.
            </div>
          </div>

          <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/50">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-emerald-900 uppercase tracking-wide">Rencana Baru (Disetujui)</span>
              <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-semibold text-[10px]">Ruang Rapat 100 Pax</span>
            </div>
            <p className="text-emerald-800 mb-3 font-medium">
              Perluasan ruang rapat dari kapasitas 60 orang menjadi 100 orang untuk pertemuan seluruh BUMN & stakeholder.
            </p>
            <ul className="space-y-1.5 text-emerald-950 font-medium">
              <li>• Bongkar partisi sekat untuk memperpanjang ruang</li>
              <li>• Pasang partisi kaca aluminium menyambung dinding lorong</li>
              <li>• Perbaikan plafon & penggantian karpet baru</li>
              <li>• Penambahan meja rapat modular & kursi untuk 100 orang</li>
              <li>• Penataan instalasi tata suara (sound system) & kabel</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-emerald-200 text-emerald-800 font-semibold">
              Pagu Anggaran: Tetap Rp 219.000.000,- (All-in termasuk pajak).
            </div>
          </div>
        </div>
      </section>

      {/* Tax & DJP Coretax Compliance Box */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-700" />
          Kepatuhan Pajak & Sistem Coretax DJP
        </h2>

        <div className="p-4 bg-blue-50/50 border border-blue-200 rounded-xl text-xs space-y-2.5 text-slate-700">
          <p>
            <strong>Status PKP Vendor:</strong> PT Pradita terdaftar sebagai Pengusaha Kena Pajak (PKP) aktif dan wajib menerbitkan Faktur Pajak Elektronik (e-Faktur).
          </p>
          <p>
            <strong>Sinkronisasi Rekening & Coretax:</strong> Dana yang ditransfer oleh Bank BRI ke rekening perusahaan PT Pradita akan langsung terdeteksi pada sistem perpajakan nasional (Coretax DJP).
          </p>
          <p>
            <strong>Komponen Pajak:</strong> Anggaran Rp 219.000.000,- sudah mengikat total pembayaran termasuk PPN 11% dan PPh. Vendor dan BRI memastikan e-billing dan bukti potong disiapkan agar tidak terjadi selisih maupun temuan audit.
          </p>
        </div>
      </section>
    </div>
  );
};
