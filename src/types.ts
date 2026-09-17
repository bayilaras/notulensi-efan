export interface Attendee {
  name: string;
  role: string;
  organization: string;
  avatarColor?: string;
}

export interface TranscriptSegment {
  id: string;
  timestamp: string;
  seconds: number;
  speaker: 'Pak Marwan' | 'Ibu Ayu' | 'Pak Fuad' | string;
  organization: 'Kementerian ATR/BPN' | 'PT Bank BRI (Persero) Tbk' | 'PT Pradita (Rekanan/Vendor)' | string;
  text: string;
  category?: 'Anggaran' | 'Administrasi' | 'Pajak' | 'Teknis/Fisik' | 'Kesepakatan';
}

export interface ActionItem {
  id: string;
  task: string;
  pic: string;
  organization: string;
  deadline: string;
  status: 'Pending' | 'In Progress' | 'Done';
  priority: 'Tinggi' | 'Sedang' | 'Rendah';
  notes?: string;
}

export interface DecisionItem {
  id: string;
  title: string;
  description: string;
  partiesInvolved: string[];
  impact: string;
}

export interface NotulensiDocument {
  title: string;
  subtitle: string;
  nomorDokumen: string;
  date: string;
  time: string;
  location: string;
  agenda: string;
  leader: string;
  notulis: string;
  attendees: Attendee[];
  background: string;
  keyDiscussionPoints: {
    title: string;
    description: string;
    points: string[];
  }[];
  budgetAndTax: {
    approvedBudget: string;
    budgetType: string;
    sourceFund: string;
    taxNotes: string;
    paymentMechanism: string;
  };
  scopeOfWork: {
    category: string;
    details: string[];
  }[];
  decisions: DecisionItem[];
  actionItems: ActionItem[];
  closingNotes: string;
}
