# Notulensi Efan

Aplikasi React/Vite untuk membaca notulensi rapat, menelusuri transkrip,
mengelola tindak lanjut, serta mencetak dan mengunduh notulensi.

## Situs GitHub Pages

https://bayilaras.github.io/notulensi-efan/

Deployment otomatis berjalan melalui `.github/workflows/deploy-pages.yml`
setiap ada push ke `main`. Di **Settings > Pages**, gunakan sumber
**GitHub Actions**. Workflow memasang dependency dari `package-lock.json`,
menjalankan pemeriksaan TypeScript, lalu menerbitkan hasil build statis `dist`.

Untuk menguji versi Pages secara lokal (Node.js 22):

```sh
npm ci
npm run lint
npm run build:pages
npm run preview -- --mode github-pages
```

Buka http://localhost:4173/notulensi-efan/.
Mode `github-pages` memakai base path `/notulensi-efan/`.

GitHub Pages hanya menyediakan hosting statis. Fitur AI Generator dan
transkripsi audio baru membutuhkan server Express dengan `GEMINI_API_KEY`,
sehingga pada versi Pages tab tersebut menampilkan keterangan keterbatasan.
Notulensi, transkrip yang sudah tersedia, tindak lanjut, salin teks, unduh TXT,
dan cetak/PDF tetap dapat digunakan. Perubahan dokumen/tindak lanjut hanya
tersimpan selama sesi halaman, sesuai perilaku aplikasi saat ini.

Jangan masukkan API key ke kode frontend atau variabel berawalan `VITE_`.

## Pengembangan dengan server AI

```sh
npm ci
cp .env.example .env
# Isi GEMINI_API_KEY di .env untuk menggunakan fitur AI.
npm run dev
```

Buka http://localhost:3000. Mode pengembangan tetap menggunakan server Express.

## Membatalkan perubahan deployment

Untuk membatalkan perubahan konten berikutnya, revert commit perubahan melalui
Git sambil mempertahankan workflow Pages, lalu push ke `main` untuk menjalankan
deployment ulang. Workflow juga dapat dijalankan melalui **Actions > Deploy to
GitHub Pages > Run workflow**. Untuk menghapus publikasi situs pertama kali,
gunakan **Settings > Pages > Unpublish site**; menghapus workflow saja tidak
menghapus situs yang sudah diterbitkan.
