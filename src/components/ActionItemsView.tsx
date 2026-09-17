import React, { useState } from 'react';
import { ActionItem } from '../types';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus, 
  Calendar, 
  User, 
  Building, 
  FileSpreadsheet, 
  Check, 
  ArrowRight,
  Filter
} from 'lucide-react';

interface ActionItemsViewProps {
  actionItems: ActionItem[];
  onUpdateItems: (items: ActionItem[]) => void;
}

export const ActionItemsView: React.FC<ActionItemsViewProps> = ({
  actionItems,
  onUpdateItems,
}) => {
  const [items, setItems] = useState<ActionItem[]>(actionItems);
  const [filterOrg, setFilterOrg] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [newPic, setNewPic] = useState('');
  const [newOrg, setNewOrg] = useState('Kementerian ATR/BPN');
  const [newDeadline, setNewDeadline] = useState('3 Hari Kerja');
  const [newPriority, setNewPriority] = useState<'Tinggi' | 'Sedang' | 'Rendah'>('Tinggi');

  const toggleStatus = (id: string) => {
    const updated = items.map((item) => {
      if (item.id === id) {
        let nextStatus: 'Pending' | 'In Progress' | 'Done' = 'In Progress';
        if (item.status === 'Pending') nextStatus = 'In Progress';
        else if (item.status === 'In Progress') nextStatus = 'Done';
        else nextStatus = 'Pending';
        return { ...item, status: nextStatus };
      }
      return item;
    });
    setItems(updated);
    onUpdateItems(updated);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim() || !newPic.trim()) return;

    const newItem: ActionItem = {
      id: `ACT-${String(items.length + 1).padStart(2, '0')}`,
      task: newTask,
      pic: newPic,
      organization: newOrg,
      deadline: newDeadline,
      status: 'Pending',
      priority: newPriority,
    };

    const updated = [...items, newItem];
    setItems(updated);
    onUpdateItems(updated);
    setNewTask('');
    setNewPic('');
    setShowAddModal(false);
  };

  const filteredItems = items.filter((it) => {
    const matchOrg = filterOrg === 'all' || it.organization.toLowerCase().includes(filterOrg.toLowerCase());
    const matchStatus = filterStatus === 'all' || it.status === filterStatus;
    return matchOrg && matchStatus;
  });

  const doneCount = items.filter((i) => i.status === 'Done').length;
  const inProgressCount = items.filter((i) => i.status === 'In Progress').length;
  const pendingCount = items.filter((i) => i.status === 'Pending').length;

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      {/* Metric Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-xs text-slate-500 font-medium block">Total Action Items</span>
          <span className="text-2xl font-extrabold text-slate-900 mt-1 block">{items.length}</span>
          <span className="text-[11px] text-slate-400 mt-0.5 block">Tugas Terdaftar</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-xs text-emerald-700 font-medium block">Selesai (Done)</span>
          <span className="text-2xl font-extrabold text-emerald-700 mt-1 block">{doneCount}</span>
          <span className="text-[11px] text-emerald-600 mt-0.5 block">Administrasi Siap</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-xs text-blue-700 font-medium block">Dalam Proses</span>
          <span className="text-2xl font-extrabold text-blue-700 mt-1 block">{inProgressCount}</span>
          <span className="text-[11px] text-blue-600 mt-0.5 block">Surat & Gambar Desain</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-xs text-amber-700 font-medium block">Menunggu (Pending)</span>
          <span className="text-2xl font-extrabold text-amber-700 mt-1 block">{pendingCount}</span>
          <span className="text-[11px] text-amber-600 mt-0.5 block">BAST & LPJ Akhir</span>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-700">Filter Instansi:</span>
          <select
            value={filterOrg}
            onChange={(e) => setFilterOrg(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg py-1 px-2.5 text-slate-700 focus:outline-none"
          >
            <option value="all">Semua Instansi</option>
            <option value="ATR">Kementerian ATR/BPN</option>
            <option value="BRI">PT Bank BRI</option>
            <option value="Pradita">PT Pradita (Vendor)</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg py-1 px-2.5 text-slate-700 focus:outline-none ml-2"
          >
            <option value="all">Semua Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Tambah Action Item</span>
        </button>
      </div>

      {/* Action Items List */}
      <div className="space-y-3.5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl p-4 sm:p-5 border transition-all ${
              item.status === 'Done'
                ? 'border-emerald-200 bg-emerald-50/20'
                : item.status === 'In Progress'
                ? 'border-blue-200 bg-blue-50/10'
                : 'border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleStatus(item.id)}
                  className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center border transition-colors shrink-0 ${
                    item.status === 'Done'
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : item.status === 'In Progress'
                      ? 'bg-blue-100 border-blue-400 text-blue-800'
                      : 'border-slate-300 hover:border-slate-400 bg-white'
                  }`}
                  title="Klik untuk mengubah status"
                >
                  {item.status === 'Done' ? (
                    <Check className="w-4 h-4" />
                  ) : item.status === 'In Progress' ? (
                    <Clock className="w-3.5 h-3.5" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  )}
                </button>

                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.id}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        item.priority === 'Tinggi'
                          ? 'bg-red-100 text-red-800 border border-red-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      Prioritas {item.priority}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      Target: {item.deadline}
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm font-semibold text-slate-900 ${item.status === 'Done' ? 'line-through text-slate-500' : ''}`}>
                    {item.task}
                  </p>

                  {item.notes && (
                    <p className="text-xs text-slate-500 mt-1 italic">
                      Catatan: {item.notes}
                    </p>
                  )}

                  <div className="flex items-center gap-4 mt-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <strong className="text-slate-800">{item.pic}</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.organization}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => toggleStatus(item.id)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border transition-colors whitespace-nowrap ${
                    item.status === 'Done'
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : item.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800 border-blue-300'
                      : 'bg-amber-100 text-amber-800 border-amber-300'
                  }`}
                >
                  {item.status}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Add Item */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-4">
              Tambah Butir Tindak Lanjut Baru
            </h3>

            <form onSubmit={handleAddItem} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Uraian Tugas / Tindak Lanjut:
                </label>
                <textarea
                  required
                  rows={3}
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Contoh: Mengirimkan dokumen faktur pajak dan nomor rekening giro BRI..."
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-slate-800"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Penanggung Jawab (PIC):
                  </label>
                  <input
                    type="text"
                    required
                    value={newPic}
                    onChange={(e) => setNewPic(e.target.value)}
                    placeholder="Nama PIC"
                    className="w-full p-2 border border-slate-200 rounded-lg text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Batas Waktu:
                  </label>
                  <input
                    type="text"
                    value={newDeadline}
                    onChange={(e) => setNewDeadline(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Instansi:
                  </label>
                  <select
                    value={newOrg}
                    onChange={(e) => setNewOrg(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg text-slate-800"
                  >
                    <option value="Kementerian ATR/BPN">Kementerian ATR/BPN</option>
                    <option value="PT Bank BRI (Persero) Tbk">PT Bank BRI (Persero) Tbk</option>
                    <option value="PT Pradita (Vendor)">PT Pradita (Vendor)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Prioritas:
                  </label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as any)}
                    className="w-full p-2 border border-slate-200 rounded-lg text-slate-800"
                  >
                    <option value="Tinggi">Tinggi</option>
                    <option value="Sedang">Sedang</option>
                    <option value="Rendah">Rendah</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 mt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold"
                >
                  Simpan Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
