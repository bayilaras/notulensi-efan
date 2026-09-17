import { NotulensiDocument, TranscriptSegment } from '../types';

export const initialNotulensi: NotulensiDocument = {
  title: 'NOTULENSI RAPAT KOORDINASI',
  subtitle: 'Pengalihan Alokasi Bantuan Renovasi dari Lobi ke Perluasan Ruang Rapat',
  nomorDokumen: 'NOT/084/RO-UMUM/ATR-BPN/IX/2026',
  date: 'Rabu, 16 September 2026',
  time: '09:00 - 09:30 WIB',
  location: 'Virtual Meeting (Zoom / Google Meet)',
  agenda: 'Koordinasi teknis dan administratif pengalihan peruntukan anggaran bantuan perbaikan lobi menjadi perluasan ruang rapat kapasitas 100 orang, serta kejelasan tata kelola kontrak dan perpajakan (BRI, ATR/BPN, dan Vendor).',
  leader: 'Pak Marwan (Biro Umum / Pengadaan Kementerian ATR/BPN)',
  notulis: 'Sekretariat Rapat / Tim Notulensi Digital ATR/BPN',
  attendees: [
    {
      name: 'Pak Marwan',
      role: 'Perwakilan Pimpinan / Biro Umum & Pengadaan',
      organization: 'Kementerian ATR/BPN',
      avatarColor: 'bg-emerald-600'
    },
    {
      name: 'Ibu Ayu',
      role: 'Relationship Manager / Hubungan Antar Lembaga (Hubaga)',
      organization: 'PT Bank BRI (Persero) Tbk',
      avatarColor: 'bg-blue-600'
    },
    {
      name: 'Pak Fuad',
      role: 'Direktur / Penanggung Jawab Pelaksana Teknis',
      organization: 'PT Pradita (Rekanan/Vendor)',
      avatarColor: 'bg-amber-600'
    }
  ],
  background:
    'Menindaklanjuti arahan pimpinan (Bapak Dirjen dan Bapak Sesjen Kementerian ATR/BPN) terkait kebutuhan mendesak peningkatan kapasitas ruang rapat pimpinan dari kapasitas 60 orang menjadi 100 orang untuk mengakomodasi pertemuan dengan para pemangku kepentingan (BUMN seperti BRI, PLN, Hutama Karya, dsb.). Anggaran renovasi yang sebelumnya dialokasikan oleh Bank BRI untuk pembenahan Lobi direncanakan untuk dialihkan seluruhnya ke pekerjaan perluasan Ruang Rapat.',
  keyDiscussionPoints: [
    {
      title: '1. Pengalihan Alokasi Pekerjaan (Lobi ke Ruang Rapat)',
      description: 'Persetujuan prinsip dari Bank BRI terkait usulan perubahan objek pekerjaan.',
      points: [
        'Kementerian ATR/BPN mengusulkan pengalihan fokus bantuan dari perbaikan lobi ke perluasan ruang rapat kapasitas 100 orang.',
        'Pihak Bank BRI (Ibu Ayu) menyatakan tidak berkeberatan ("monggo saja") atas pengalihan lokasi dan objek renovasi tersebut.',
        'Keputusan ini diambil karena ruang rapat berkapasitas 60 orang saat ini sudah tidak memadai saat menerima kunjungan bersama seluruh stakeholder/BUMN.'
      ]
    },
    {
      title: '2. Batasan Plafon Anggaran & Skema Pembiayaan',
      description: 'Kepastian pagu anggaran fixed dan sifat bantuan non-CSR.',
      points: [
        'Total anggaran disetujui sebesar Rp 219.000.000 (Dua Ratus Sembilan Belas Juta Rupiah) bersifat FINAL/FIXED ("All-in bersih").',
        'Anggaran TIDAK BISA ditambah karena telah diputus oleh komite pemutus Bank BRI di tengah proses reorganisasi internal.',
        'Bantuan ini BUKAN berasal dari pos CSR (Corporate Social Responsibility), melainkan pos Sponsorship / Hubungan Antar Lembaga (Hubaga). Oleh karena itu, skema pengeluaran mengikuti alur sponsorship berbasis invoice penagihan resmi.'
      ]
    },
    {
      title: '3. Aspek Perpajakan (PPN 11% & PPh)',
      description: 'Status PKP vendor dan mekanisme pemotongan pajak.',
      points: [
        'Pak Fuad mengonfirmasi bahwa PT Pradita merupakan Pengusaha Kena Pajak (PKP) resmi dengan NIB, NPWP, dan faktur pajak lengkap.',
        'Total nilai kontrak Rp 219.000.000 sudah mengunci total biaya termasuk PPN 11% dan PPh. RAB / SPH baru akan disesuaikan unit harganya agar total netto + pajak = Rp 219.000.000.',
        'Ibu Ayu (BRI) akan mengonfirmasi ke divisi Finance BRI terkait mekanisme pemungutan/pemotongan e-billing pajak. Rekanan mengharapkan BRI langsung memotong PPN dan PPh agar sinkron dengan sistem Coretax DJP.'
      ]
    },
    {
      title: '4. Alur Administrasi Kontrak & Pembayaran 3 Pihak',
      description: 'Sinkronisasi dokumen perikatan antara ATR/BPN, BRI, dan PT Pradita.',
      points: [
        'Kementerian ATR/BPN akan menerbitkan Surat Resmi Penunjukan Vendor (PT Pradita) dan surat pengalihan alokasi bantuan yang ditujukan ke Bank BRI.',
        'PT Pradita membuat Surat Penawaran Harga (SPH) & Rencana Anggaran Biaya (RAB) yang ditujukan langsung ke Bank BRI, dengan tembusan (CC) ke Kementerian ATR/BPN.',
        'Setelah pekerjaan fisik selesai, dokumen pencairan yang wajib diserahkan meliputi: Invoice penagihan, Berita Acara Serah Terima (BAST), LPJ/rincian realisasi biaya, dokumentasi foto Before-After, faktur pajak, dan nomor rekening Bank BRI atas nama perusahaan rekanan.',
        'Bank BRI akan langsung mentransfer dana pembayaran ke rekening rekanan.'
      ]
    },
    {
      title: '5. Ruang Lingkup Fisik & Teknis Pekerjaan',
      description: 'Klasifikasi pekerjaan interior non-struktural.',
      points: [
        'Pekerjaan murni renovasi interior, tidak mengubah konstruksi struktur gedung (tanpa cor semen/beton/baja struktural).',
        'Pembongkaran sekat-sekat eksisting untuk memperpanjang ruang rapat.',
        'Pemasangan partisi kusen aluminium dan kaca meneruskan koridor agar ruang rapat menjadi tertutup kedap dan representatif.',
        'Perbaikan dan perapihan plafon/langit-langit gypsum.',
        'Penggantian/pemasangan karpet lantai dan wallpaper/finishing dinding.',
        'Penyesuaian tata suara (sound system), instalasi kabel kelistrikan dan audio-visual.',
        'Pengadaan/penataan meja dan kursi rapat untuk memenuhi kapasitas 100 peserta.'
      ]
    }
  ],
  budgetAndTax: {
    approvedBudget: 'Rp 219.000.000,- (Dua Ratus Sembilan Belas Juta Rupiah)',
    budgetType: 'Fixed All-in (Termasuk Material, Jasa, PPN 11%, dan PPh)',
    sourceFund: 'Pos Anggaran Sponsorship / Hubungan Antar Lembaga (Bukan CSR)',
    taxNotes: 'Vendor berstatus PKP. BRI akan memastikan apakah pemotongan PPN/PPh disetor oleh BRI via e-Billing atau oleh Vendor, dengan pelaporan sinkron di DJP Coretax.',
    paymentMechanism: 'Transfer langsung dari Bank BRI ke Rekening PT Pradita (Bank BRI) setelah BAST, Invoice, Dokumentasi Foto Before-After, dan LPJ diserahkan secara lengkap.'
  },
  scopeOfWork: [
    {
      category: 'Pembongkaran & Partisi Ruangan',
      details: [
        'Pembongkaran partisi sekat eksisting untuk memperluas area rapat.',
        'Pemasangan partisi aluminium dan kaca meneruskan dinding lorong hingga tertutup penuh.'
      ]
    },
    {
      category: 'Finishing Interior & Akustik',
      details: [
        'Perbaikan dan perapihan plafon (ceiling board).',
        'Pemasangan/penggantian karpet lantai baru.',
        'Finishing dinding ruangan (wallpaper / paneling dinding).'
      ]
    },
    {
      category: 'Mebelair & Perlengkapan',
      details: [
        'Penambahan meja rapat panjang/modular sesuai layout ruang baru.',
        'Penambahan kursi rapat ergonomis untuk mencukupi kapasitas total 100 kursi.'
      ]
    },
    {
      category: 'Sistem Audio & Elektrikal',
      details: [
        'Instalasi sound system ruang rapat, mikrofon konferensi, dan speaker.',
        'Penataan jalur kabel data, power outlet meja, dan kelistrikan rapat.'
      ]
    }
  ],
  decisions: [
    {
      id: 'DEC-01',
      title: 'Persetujuan Pengalihan Objek Renovasi',
      description: 'Bank BRI menyetujui pengalihan alokasi bantuan yang semula untuk pembuatan/renovasi Lobi menjadi perluasan Ruang Rapat ATR/BPN.',
      partiesInvolved: ['Kementerian ATR/BPN', 'PT Bank BRI (Persero) Tbk'],
      impact: 'Rencana kerja lobi dibatalkan; seluruh fokus dialihkan ke penataan ruang rapat 100 pax.'
    },
    {
      id: 'DEC-02',
      title: 'Penetapan Plafon Anggaran Tetap Rp 219 Juta',
      description: 'Pagu bantuan bersifat definitif Rp 219.000.000 (all-in termasuk pajak), tidak ada penambahan biaya.',
      partiesInvolved: ['PT Bank BRI (Persero) Tbk', 'PT Pradita'],
      impact: 'Vendor wajib menyesuaikan nilai item pekerjaan pada RAB/SPH baru agar pas dengan pagu Rp 219 juta.'
    },
    {
      id: 'DEC-03',
      title: 'Penetapan Skema Sponsorship & Pembayaran Berbasis Invoice',
      description: 'Bantuan diproses melalui mekanisme Sponsorship Hubaga (non-CSR) dengan pencairan langsung ke vendor pasca penyerahan BAST dan invoice.',
      partiesInvolved: ['PT Bank BRI (Persero) Tbk', 'Kementerian ATR/BPN', 'PT Pradita'],
      impact: 'Pencairan tidak melalui APBN kementerian, melainkan penagihan langsung pihak ketiga ke BRI.'
    },
    {
      id: 'DEC-04',
      title: 'Izin Memulai Tahap Desain & Pengukuran Awal',
      description: 'Vendor diizinkan segera melakukan survei pengukuran dan pembuatan gambar layout sembari surat administrasi resmi diproses.',
      partiesInvolved: ['Kementerian ATR/BPN', 'PT Pradita'],
      impact: 'Mempercepat timeline pengerjaan agar ruang rapat segera dapat difungsikan.'
    }
  ],
  actionItems: [
    {
      id: 'ACT-01',
      task: 'Menerbitkan Surat Resmi ATR/BPN kepada Bank BRI mengenai permohonan pengalihan renovasi lobi ke ruang rapat serta penunjukan resmi PT Pradita sebagai vendor pelaksana.',
      pic: 'Pak Marwan',
      organization: 'Kementerian ATR/BPN',
      deadline: '1-2 Hari Kerja',
      status: 'In Progress',
      priority: 'Tinggi',
      notes: 'Ditandatangani oleh Pejabat Berwenang / Sesjen / Dirjen'
    },
    {
      id: 'ACT-02',
      task: 'Melakukan survei lapangan, pengukuran ulang ruang rapat, pembuatan gambar denah/layout, dan penyesuaian RAB / SPH baru dengan pagu maksimal Rp 219.000.000 (inc. PPN 11%).',
      pic: 'Pak Fuad',
      organization: 'PT Pradita (Vendor)',
      deadline: '2-3 Hari Kerja',
      status: 'In Progress',
      priority: 'Tinggi',
      notes: 'SPH ditujukan ke Bank BRI, tembusan ke Biro Umum ATR/BPN'
    },
    {
      id: 'ACT-03',
      task: 'Konfirmasi teknis perpajakan dengan Divisi Finance Bank BRI terkait prosedur e-billing, pemotongan PPN 11% dan PPh bagi rekanan berbadan hukum PKP.',
      pic: 'Ibu Ayu',
      organization: 'PT Bank BRI (Persero) Tbk',
      deadline: 'Segera (Hari Ini/Besok)',
      status: 'In Progress',
      priority: 'Tinggi',
      notes: 'Akan diinformasikan kembali via WhatsApp / kontak langsung ke Pak Fuad'
    },
    {
      id: 'ACT-04',
      task: 'Menyiapkan berkas kelengkapan administrasi rekanan (NIB, NPWP, PKP, nomor rekening giro Bank BRI atas nama PT Pradita).',
      pic: 'Pak Fuad',
      organization: 'PT Pradita (Vendor)',
      deadline: 'Sebelum pekerjaan selesai',
      status: 'Done',
      priority: 'Sedang',
      notes: 'Sudah siap, pernah digunakan pada pekerjaan KC BRI Kejaksaan Agung'
    },
    {
      id: 'ACT-05',
      task: 'Penyusunan LPJ, dokumentasi foto Before-After renovasi, dan penandatanganan Berita Acara Serah Terima (BAST) untuk pengajuan invoice.',
      pic: 'Pak Marwan & Pak Fuad',
      organization: 'ATR/BPN & PT Pradita',
      deadline: 'Pasca Pekerjaan Selesai',
      status: 'Pending',
      priority: 'Sedang',
      notes: 'Sebagai syarat mutlak pencairan dana sponsorship oleh BRI'
    }
  ],
  closingNotes:
    'Rapat koordinasi ditutup pada pukul 09:30 WIB dengan kesepahaman bersama bahwa pekerjaan dapat segera dipersiapkan secara teknis oleh rekanan, sementara proses surat-menyurat resmi dan koordinasi finance BRI berjalan secara simultan.'
};

export const meetingTranscript: TranscriptSegment[] = [
  {
    id: 'tr-01',
    timestamp: '00:00 - 01:46',
    seconds: 0,
    speaker: 'Pak Marwan',
    organization: 'Kementerian ATR/BPN',
    category: 'Anggaran',
    text: 'Ini harus kami sampaikan bahwa pada kemarin arahan dari Pak Dirjen untuk anggaran pembuatan lobi itu kami alihkan, Bu, rencananya. Jadi memang kemarin sih kita udah siap, yang lobi itu udah siap. Cuman ternyata kita coba prioritaskan yang ruang rapat dahulu. Karena memang kapasitas ruang rapat kita hanya kurang lebih 60. Nah ini mau kita tambahkan menjadi 100, Bu, ruang kapasitas rapat. Karena memang kan yang diundang kami kan ya bisa jadi BRI kita undang gitu ya, PLN, terus semua BUMN tuh kadang-kadang kalau kita rapat itu banyak, kita kan banyak Bu stakeholdernya tuh: HK, semuanya tuh banyak sekali. Nah jadi kadang-kadang ruang rapat itu enggak mana apa namanya, enggak full, enggak bisa masuk semuanya gitu. Nah ini makanya kita coba prioritaskan dulu yang lebih prioritas untuk pembangunan di tempat kami. Nah kami alhamdulillah makasih sekali pihak BRI sudah membantu kami ya dalam rangka untuk pembangunan ini gitu. Jadi Pak Dirjen kemarin mengucapkan terima kasih sekali, cuman Bapak bilang tolong disampaikan dulu ke BRI apakah ini apa namanya, kami harus berbuat apa gitu untuk merubah dari rencana awal yang untuk perbaikan lobinya, gitu Bu. Jadi memang ini kita minta approval dulu dari BRI-nya gitu. Memang ini kemarin saya secara informal sih sudah sampaikan ya ke Bu Ayu ya mungkin ya lewat telepon. Tapi mungkin ini kita juga minta biar enak dari BRI-nya, pihak BRI-nya enak kalau ada audit atau apapun kita juga bisa sampaikan juga, Bu. Seperti itu sih Bu Ayu, jadi mungkin saya minta tanggapan dulu nih sebelum saya ke Pak Fuad, Bu Ayu. Izin Bu, silakan Bu.'
  },
  {
    id: 'tr-02',
    timestamp: '01:47 - 03:11',
    seconds: 107,
    speaker: 'Ibu Ayu',
    organization: 'PT Bank BRI (Persero) Tbk',
    category: 'Administrasi',
    text: 'Baik, terima kasih Pak Marwan, Pak Fuad. Makasih atas undangannya gitu ya. Pada dasarnya untuk case ini kan kami tidak menggunakan dana CSR ya, Pak. Gitu, jadi misalkan nanti ada perubahan, monggo saja ada perubahan, namun nanti untuk anggaran kami tidak bisa berubah gitu. Jadi anggarannya sesuai dengan permohonan yang kemarin 219 sekian itu ya Pak ya. Kami all-in segitu gitu Pak. Karena di kami pun saat ini juga sempat kami sampaikan ke Pak Sesjen juga Pak Marwan bahwa kami sedang ada reorganisasi. Jadi untuk apa, biaya-biaya dan sebagainya kami belum bisa bergerak gitu Pak. Jadi untuk biaya-biaya yang lama itu sudah diputus 219, jadi maksimum budget kami segitu gitu Pak. Tidak bisa lebih gitu sih Pak. Jadi kalau misalkan nanti ada perubahan layout atau perubahan lokasi, mungkin nanti disampaikan saja di lampirannya Pak yang kemarin kan juga sempat disampaikan ke kami ya Pak ya. Lampirannya mungkin itu saja gitu. Nanti untuk saat ini Pak, ketika nanti invoice ke kami, itu kan nanti sesuai gitu Pak. Yang penting ada layout-nya, kemudian ada biaya-biaya yang harus kami bayarkan gitu sesuai dengan invoice. Seperti itu sih Pak.'
  },
  {
    id: 'tr-03',
    timestamp: '03:12 - 04:24',
    seconds: 192,
    speaker: 'Pak Marwan',
    organization: 'Kementerian ATR/BPN',
    category: 'Anggaran',
    text: 'Siap Bu. Berarti nanti invoice apapun nanti juga diserahkan ya Bu ya pada hasil LPJ-nya ya? Tapi secara umum bahwa dari pihak BRI tidak bermasalah ya Bu kalau misalnya memang kami pindahkan yang dari lobi itu anggarannya menjadi ruang rapat gitu ya Bu ya? Oh iya siap. Bu, nanti mungkin RAB-nya saya minta tolong nih dari pihak ketiga, mungkin nanti Pak Fuad ya yang mungkin bisa menyampaikan ya RAB terkait dengan hal itu. Bagaimana sih misalnya kalau dari ruang lobinya terlalu ini, terlalu besar ya mungkin kita coba efisiensi Pak Fuad. Kalau misalnya seperti apa ya maksudnya dipas-pasin nih mungkin nih kemungkinan besar seperti itu Bu. Karena kan memang beda ya, kalau di sana nanti di ruang rapat tuh pasti ada sound-nya, ada apapun, mejanya. Kalau ini kan mungkin yang kemarin itu kan dia hanya merubah apa namanya, plafon, terus juga karpet gitu ya sama dinding-dinding. Nah nanti mungkin memang saya minta bantuannya nanti dari pihak ketiga mungkin Pak Fuad terkait dengan hal itu.'
  },
  {
    id: 'tr-04',
    timestamp: '04:25 - 06:03',
    seconds: 265,
    speaker: 'Pak Marwan',
    organization: 'Kementerian ATR/BPN',
    category: 'Administrasi',
    text: 'Namun sebelum itu, Ibu izin terkait sebelum kita melangkah lebih jauh ya, terkait dengan ini Bu, kami kemarin coba sampaikan untuk SPK-nya Bu. Kemarin kan terkait dengan surat Ibu ya yang sudah disampaikan ke kami, nah kemarin itu sebenarnya kami pengen buat SPK dan sebagainya tapi karena kita pihaknya tiga, akhirnya saya bingung nih. Biasanya kalau kami kan kami anggaran APBN kami gitu kan, nah kami minta pihak ketiga untuk meng-approve apa namanya eh untuk pihak ketiga kami untuk kami berikan SPK gitu ya Bu ya. Tapi pakai anggaran kami dengan pajak yang sudah ada dan sebagainya. Nah sekarang kan ini ada tiga pihak nih, ini saya juga bingung. Nanti saya juga minta mohon arahannya dari Bu Ayu dari BRI, ini seperti apa. Apakah memang saya hanya menyampaikan apa surat kepada BRI bahwa kami sudah menyampaikan kami sudah apa namanya sudah memilih pihak ketiga yang ada lalu nanti dari pihak BRI untuk membuat SPK-nya atau seperti apa Bu nantinya? Nah ini yang kan kaitannya nanti juga pembayaran nanti SPK tersebut Bu, pajak dari di pihak BRI, karena kan pajaknya bukan di kami ya, izin ya Bu ya, seperti itu ya. Mungkin ini pertanyaan kedua saya nih Bu Ayu terkait dengan hal tersebut nih. Nanti mungkin juga Pak Fuad mungkin bisa disampaikan juga, mungkin ada pengalaman juga di tempat lain, mungkin Pak Fuad juga ini kan bukan dana CSR ya Pak. Tapi tetap pajaknya juga ada ya Bu ya kalau pajaknya?'
  },
  {
    id: 'tr-05',
    timestamp: '06:04 - 08:25',
    seconds: 364,
    speaker: 'Ibu Ayu',
    organization: 'PT Bank BRI (Persero) Tbk',
    category: 'Pajak',
    text: 'Jadi begini Pak, kalau kami anggaran yang diputus oleh pemutus itu sudah bersih gitu Pak dari kami itu 219 sudah termasuk semuanya, pajak dan sebagainya tuh kami apa tuh namanya sudah masukkan di situ gitu Pak. Nah, jadi kalau misalkan ini sebetulnya pemberlakuannya seperti sponsorship sih Pak. Jadi kalau misalkan beda dengan CSR ya Pak, kalau misalkan dengan CSR kan pasti kami ada due diligence tersendiri gitu ya Pak, harus ada survei kemudian harus ada—walaupun kami tetap melakukan survei ya Pak kemarin—cuman kalau di CSR kan pasti akan lebih rinci lagi posnya pun sudah posnya CSR sendiri gitu. Tapi kalau yang ini karena permintaan dari ATR ini tidak bisa masuk di anggarannya CSR, makanya kami back up dengan pos biaya yang lainnya gitu Pak. Di mana pos biaya lainnya itu pemberlakuannya kami seperti kami memberikan sponsor ke pihak ATR gitu. Jadi nantinya itu yang akan kami terima untuk mengeluarkan uangnya gitu Pak. Kalau uang sekarang masih ada di pos kami Pak, tapi sudah kami pisahkan bahwa 219 itu untuk ATR gitu ya. Nah nanti kami bisa mengeluarkan uang di pos ini adalah dengan nanti ATR/BPN menyampaikan invoice-nya gitu Pak. Invoice-nya untuk total pembayaran berapa, kemudian berikut juga dokumentasinya gitu. Jadi dokumentasinya itu seperti mungkin before-after ruangannya ya Pak yang sebelum direnovasi dan setelah direnovasi seperti apa, dan juga ada rincian-rincian biaya serta nomor rekening yang bisa kami transferkan gitu Pak. Gitu, jadi di sini kami tidak ikut serta merta untuk pemilihan vendornya gitu, karena memang untuk pemilihan vendornya kami sepenuhnya percayakan kepada ATR/BPN gitu ya. Nanti juga termasuk dengan SPK-nya juga Pak gitu. Karena di kami pemberlakuannya bukan bangunan untuk biaya CSR tapi di pos yang lain gitu sih Pak.'
  },
  {
    id: 'tr-06',
    timestamp: '08:26 - 10:48',
    seconds: 506,
    speaker: 'Pak Fuad',
    organization: 'PT Pradita (Rekanan/Vendor)',
    category: 'Pajak',
    text: 'Siap, baik siap Ibu, izin Bu Ayu, salam kenal, Pak Marwan. Asalamualaikum Ibu, Pak. Jadi saya selama ini memang kalau dibantu dari Bank Mandiri, Bank BRI, dan Bank BNI sama BSI, tapi memang rata-rata semuanya itu sifatnya kayak CSR ya Bu ya, ya Pak ya. Nah kalau umpamanya sifatnya sponsor ini kan saya mungkin belum pernah ya kalau sifatnya sponsor ya. Yang saya mau tanya juga Bu, kalau sifatnya sponsor itu biasanya yang dikasih sponsor itu membayarkan pajaknya enggak Bu dari uang yang Ibu keluarkan dari Ibu gitu? (Ibu Ayu menanggapi bahwa nominal 219 sudah bulat termasuk pajak). Saya enggak apa-apa Bu soal angka 219 itu saya enggak masalah, karena nanti saya menyesuaikan dengan budget yang ada di lapangan. Nah yang kedua kalau memang itu pakai PPN, maka nanti mungkin dari 219 itu harganya tuh saya, semua harga satuan yang nanti di SPH yang baru itu saya susun nanti totalnya berikut PPN 11% itu jadi 219. Mungkin seperti itu. Karena nanti pada saat uang masuk otomatis kan nanti Ibu yang mentransfer ke rekening saya apa bagaimana Bu ya, ke rekening kantor maksudnya? (Ibu Ayu mengonfirmasi BRI mentransfer langsung). Nah berarti kan pada saat uang itu masuk ke rekening kantor saya itu kan terdeteksi sama pajak di Coretax. Makanya saya harus melakukan pembayaran. Nah nanti saya coba tanya sama konsultan saya yang membuat e-billing ini siapa, bisakah dari kami atau nanti dari pihak BRI yang membuat e-billing-nya tapi kami yang membayarkan gitu. Itu keputusan dari konsultan pajak setelah dia ngecek peraturan sekarang kan berubah-berubah nih Bu ya. Kalau kita bisa bikin e-billing-nya ya aman, kita tinggal bikin, kita tinggal setor.'
  },
  {
    id: 'tr-07',
    timestamp: '10:49 - 11:54',
    seconds: 649,
    speaker: 'Pak Fuad',
    organization: 'PT Pradita (Rekanan/Vendor)',
    category: 'Administrasi',
    text: 'Nah terus biasanya Bu kalau yang CSR itu, Pak Marwan, Bu Ayu, biasanya saya itu dari pihak ATR/BPN-nya itu memberikan surat penunjukan kepada BRI. Nah biasanya saya gitu ya, jadi dalam hal ini ATR/BPN menunjuk PT Pradita, PT saya, PT Pradita untuk melaksanakan renovasi ini ini ini, udah. Tapi hanya sebatas penunjukan aja. Nah nanti saya membuat RAB saya tujukan kepada pihak BRI. Nah nanti pihak BRI begitu setelah saya selesai kerjakan dan sudah BAST, saya dibayar, baru pihak BRI membuat surat untuk penyerahan hibah atau barang tersebut, itu kalau CSR ya. Nah kalau yang di sini saya mohon arahan sama Ibu karena kalau sponsor ini apakah RAB ini saya tujukan kepada pihak BRI atau saya tujukan kepada pihak ATR/BPN?'
  },
  {
    id: 'tr-08',
    timestamp: '11:55 - 13:49',
    seconds: 715,
    speaker: 'Ibu Ayu & Pak Fuad',
    organization: 'PT Bank BRI (Persero) Tbk',
    category: 'Administrasi',
    text: 'Ibu Ayu: "Kalau di kami nanti pasti untuk ke kami tuh ada invoice-nya sih Pak. Jadi kan kalau ada invoice kan berarti ada nominal-nominalnya ya Pak ya, ada kuitansinya."\nPak Fuad: "Oh berarti saya bikinnya ke Ibu aja ya?"\nPak Marwan: "Tercatat ke BRI ya, berarti kan nanti untuk konsekuensi invoice kan RAB-nya ya Bu ya berarti ya kalau kayak gitu ya?"\nIbu Ayu: "Betul, heem betul Pak."\nPak Fuad: "Iya, jadi aku bikin aja nanti kalau ke BRI itu ditujukan ke siapa kuitansinya Bu. Nanti saya bikin RAB-nya, UP-nya siapa-siapa, nanti saya bikinkan. Nanti Ibu ada yang enggak cocok tinggal formatnya tinggal Ibu kurangi atau mungkin Ibu ada format tersendiri nanti saya tinggal ikutin dari Ibu gitu."'
  },
  {
    id: 'tr-09',
    timestamp: '13:50 - 15:43',
    seconds: 830,
    speaker: 'Ibu Ayu & Pak Fuad',
    organization: 'PT Bank BRI (Persero) Tbk',
    category: 'Pajak',
    text: 'Ibu Ayu: "Oke. Kalau yang ini nanti Pak, perusahaan Bapak ini PKP atau non-PKP ya Pak?"\nPak Fuad: "PKP."\nIbu Ayu: "Oh PKP ya, oh berarti nanti harus melampirkan faktur pajak dan sebagainya ya?"\nPak Fuad: "Iya, iya lengkap saya Bu. Saya NIB, faktur pajak semua, NPWP semua lengkap semua. Karena saya juga sama BRI waktu itu saya bikin ini Bu, mungkin Bu Ayu tahu ada kantor cabang BRI di Kejaksaan Agung? Itu saya yang bikin."\nIbu Ayu: "Oke..."\nPak Fuad: "Heeh, jadi saya udah pernah sama Hubaga ya bilangnya, hubungan antar lembaga ya? Saya berapa kali kayak waktu itu bikin automatic gate juga di Kejaksaan juga disponsorin di-CSR-kan sama BRI gitu. Jadi mungkin yang penting kan angkanya tetap 219, nanti saya menyesuaikan sama Pak Marwan mengenai kebutuhan di sana karena 219 itu sudah termasuk PPN-PPh. Kalau PPh kan enggak kita munculkan Bu, itu dipotong dari perusahaan langsung. Saya enggak tahu 1,5 atau 2% kurang lebih. Tapi nanti PPN-nya kan 11% kalau bukan barang-barang tertentu ya. Jadi mungkin itu aja Bu ya, jadi saya bikinnya ke BRI tapi saya CC juga ke Pak Marwan biar beliau terinfo juga."'
  },
  {
    id: 'tr-10',
    timestamp: '15:44 - 18:24',
    seconds: 944,
    speaker: 'Pak Fuad & Pak Marwan',
    organization: 'PT Pradita & ATR/BPN',
    category: 'Teknis/Fisik',
    text: 'Pak Fuad: "Nanti gambar mungkin sama... karena kan ini baru kemarin ya Pak Marwan ya? Jadi kami coba bekerja dulu yang penting udah dapat approval dari Ibu aja. Karena kami bekerja dulu, harusnya kan nunggu semacam kayak SPK atau sponsorship ya buat pegangan kami gitu ya. Tapi kan ini karena saling kepercayaan, saya kerja dulu enggak apa-apa. Yang penting arahannya dari Pak Marwan tuh dan Ibu, 219 sudah sama PPN clear gitu. Ini juga kan cuman interior ya Bu, enggak ada struktur, cuman pasang wallpaper, terus pasang apa plafon, perbaikan pasang pintu aluminium ya Pak Marwan ya, jadi enggak berhubungan dengan struktur lah gitu, beton atau apa gitu enggak gitu. Kita cuman interior desain lah jatuhnya."\nPak Marwan: "Enggak merubah bangunan cuman memperpanjang gitu. Jadi memang ada sekat-sekatnya aja yang dibuka ya Bu, jadi akhirnya ruang rapatnya jadi lebih panjang gitu Bu jadi akhirnya. Dan nanti desainnya sebenarnya hampir sama, mirip-mirip, kayak atap plafonnya juga mau diperbaiki dan sebagainya. Itu aja sih Bu sebenarnya, enggak ada perubahan secara struktur."\nPak Fuad: "Partisi juga kita kan cuman bongkar terus yang satu lagi pasang aluminium supaya ruangannya ketutup Bu. Karena sekarang dari lorong itu terbuka, kan kalau ruang rapat harus tertutup. Nah kita tinggal nerusin aluminium yang sudah ada kita terusin panjang sampai ketutup ke sana gitu. Mungkin sama meja-meja penambahan karena ruangannya besar kan mejanya juga harus nambah, butuh meja dan kursi."'
  },
  {
    id: 'tr-11',
    timestamp: '18:25 - 20:11',
    seconds: 1105,
    speaker: 'Pak Marwan, Ibu Ayu & Pak Fuad',
    organization: 'Kementerian ATR/BPN',
    category: 'Kesepakatan',
    text: 'Pak Fuad: "Nah itu yang saya belum dapat detail resmi dari Pak Marwan, saya mau coba menerima dulu kemauan dari pimpinan di sana apa. Nanti saya coba breakdown, nanti angkanya mana, nah dari angka tersebut kan bisa kita plus minus nih: kalau lebih lewat budget atau kurang budget masih bisa. Nanti saya info ke Pak Marwan yang penting patokannya 219 sudah clear sama semuanya ya Bu ya."\nIbu Ayu: "Iya, betul begitu Pak."\nPak Fuad: "Siap Ibu."\nPak Marwan: "Siap-siap heeh. Makasih Bu Ayu, Pak Fuad. Berarti nanti saya tetap buat surat ya ke BRI ya Bu ya untuk penunjukan pihak ketiganya, nanti dari pihak ketiga langsung komunikasi dengan Bu Ayu ya atau stafnya Bu Ayu kali kalau Bu Ayu sibuk. Yang penting teknisnya kita udah ketemu nih Bu, udah deal. Soalnya saya juga bingung nih yang surat Ibu keluarkan kemarin kan kita tiga pihak nih, sekarang udah jelas clear gitu jadinya nanti tinggal saya buatkan suratnya saja. Baik, itu aja Pak Fuad, Bu Ayu. Terima kasih banyak atas sponsorship-nya ini. Mungkin juga nanti perlu ketemu Pak Dirjen lagi Bu Ayu ya untuk progress-nya. Juga Pak Fuad monggo mungkin ini Pak, desainnya mungkin segera Pak ditunggu Bapak."\nPak Fuad: "Siap Pak, nanti secara teknis Pak kita ngobrol biar cepat, nanti saya coba kirim tim untuk gambar dan ukur lagi."\nPak Marwan: "Siap Pak. Makasih banyak Pak Fuad, Bu Ayu. Sekian, terima kasih. Asalamualaikum warahmatullahi wabarakatuh. Selamat pagi Bapak Ibu semua."\nIbu Ayu & Pak Fuad: "Waalaikumsalam warahmatullahi wabarakatuh, selamat pagi."'
  }
];
