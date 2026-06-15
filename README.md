# 📱 Whads - WhatsApp Direct Send

**Whads** adalah Progressive Web App (PWA) yang memungkinkan Anda mengirim pesan WhatsApp tanpa perlu menyimpan nomor kontak terlebih dahulu.

![Whads Logo](icons/icon-192.svg)

## ✨ Fitur

- 🚀 **Kirim Langsung**: Kirim pesan WhatsApp tanpa simpan nomor
- 🔄 **Format Otomatis**: Mendukung berbagai format nomor (08xxx, +628xxx, 628xxx)
- 🧹 **Auto-Clean**: Otomatis menghapus spasi, tanda hubung, dan karakter lain
- 📱 **PWA**: Dapat diinstall sebagai aplikasi di perangkat Anda
- 🎨 **UI Modern**: Desain clean dengan tema WhatsApp
- ⚡ **Offline Ready**: Bekerja bahkan tanpa koneksi internet
- 📝 **Pesan Opsional**: Tambahkan pesan atau kirim tanpa pesan

## 🎯 Cara Menggunakan

### Online (Langsung di Browser)

1. Buka aplikasi di browser
2. Masukkan nomor WhatsApp tujuan
3. (Opsional) Tulis pesan yang ingin dikirim
4. Klik tombol "Kirim ke WhatsApp"
5. WhatsApp akan terbuka dengan nomor yang sudah diformat

### Install sebagai PWA

#### Di Android/Chrome:
1. Buka aplikasi di Chrome
2. Klik ikon "Install" yang muncul di address bar
3. Atau klik menu (⋮) → "Install app" atau "Add to Home screen"
4. Aplikasi akan muncul di home screen Anda

#### Di iOS/Safari:
1. Buka aplikasi di Safari
2. Tap tombol Share (kotak dengan panah ke atas)
3. Scroll dan pilih "Add to Home Screen"
4. Tap "Add"

#### Di Desktop:
1. Buka aplikasi di Chrome/Edge
2. Klik ikon install di address bar
3. Atau klik menu → "Install Whads"

## 📞 Format Nomor yang Didukung

Aplikasi ini mendukung berbagai format nomor Indonesia:

| Format Input | Hasil | Contoh |
|--------------|-------|--------|
| `08123456789` | `+628123456789` | 08123456789 → +628123456789 |
| `+628123456789` | `+628123456789` | +628123456789 → +628123456789 |
| `628123456789` | `+628123456789` | 628123456789 → +628123456789 |
| `0812-3456-789` | `+628123456789` | 0812-3456-789 → +628123456789 |
| `0812 3456 789` | `+628123456789` | 0812 3456 789 → +628123456789 |

**Catatan**: Spasi, tanda hubung (-), dan karakter non-digit lainnya akan otomatis dihapus.

## 🛠️ Instalasi untuk Development

### Prasyarat
- Web server (Apache, Nginx, atau Python SimpleHTTPServer)
- Browser modern (Chrome, Firefox, Safari, Edge)

### Langkah-langkah

1. **Clone atau download repository**
   ```bash
   git clone <repository-url>
   cd whads
   ```

2. **Generate Icon PNG (Opsional)**
   
   Aplikasi sudah menggunakan SVG icons yang berfungsi dengan baik. Jika Anda ingin PNG:
   
   **Opsi 1: Menggunakan Browser**
   ```bash
   # Buka generate-icons.html di browser
   # Download icon-192.png dan icon-512.png
   # Simpan ke folder icons/
   ```
   
   **Opsi 2: Menggunakan Python**
   ```bash
   pip install pillow
   python generate_icons.py
   ```
   
   **Opsi 3: Menggunakan Node.js**
   ```bash
   node create-icons.js
   # Kemudian convert SVG ke PNG menggunakan tool online
   ```

3. **Jalankan Web Server**
   
   **Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Node.js (dengan http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   **PHP:**
   ```bash
   php -S localhost:8000
   ```

4. **Akses Aplikasi**
   ```
   http://localhost:8000
   ```

## 📁 Struktur Proyek

```
whads/
├── index.html              # File HTML utama dengan UI dan logic
├── manifest.json           # PWA manifest file
├── service-worker.js       # Service worker untuk offline support
├── README.md              # Dokumentasi (file ini)
├── generate-icons.html    # Generator icon berbasis browser
├── generate_icons.py      # Generator icon Python (requires Pillow)
├── create-icons.js        # Generator icon Node.js (creates SVG)
└── icons/
    ├── icon-192.svg       # Icon 192x192 (SVG)
    ├── icon-512.svg       # Icon 512x512 (SVG)
    ├── icon-192.png       # Icon 192x192 (PNG, optional)
    └── icon-512.png       # Icon 512x512 (PNG, optional)
```

## 🔧 Teknologi yang Digunakan

- **HTML5**: Struktur aplikasi
- **CSS3**: Styling dengan gradient dan animasi
- **JavaScript (Vanilla)**: Logic aplikasi tanpa framework
- **PWA APIs**: 
  - Service Worker untuk offline capability
  - Web App Manifest untuk installability
  - beforeinstallprompt untuk install prompt
- **WhatsApp API**: `wa.me` URL scheme

## 🌐 Deploy ke Production

### GitHub Pages

1. Push ke GitHub repository
2. Aktifkan GitHub Pages di Settings
3. Pilih branch dan folder
4. Akses via `https://username.github.io/whads`

### Netlify

1. Drag & drop folder `whads` ke Netlify
2. Atau connect dengan Git repository
3. Deploy otomatis

### Vercel

```bash
npm i -g vercel
cd whads
vercel
```

### Hosting Tradisional

1. Upload semua file ke web hosting
2. Pastikan HTTPS aktif (required untuk PWA)
3. Akses via domain Anda

## 🔒 Keamanan & Privacy

- ✅ Tidak ada data yang disimpan di server
- ✅ Tidak ada tracking atau analytics
- ✅ Semua proses dilakukan di browser
- ✅ Tidak ada pengiriman data ke pihak ketiga
- ✅ Open source dan dapat diaudit

## 🐛 Troubleshooting

### PWA tidak bisa diinstall
- Pastikan menggunakan HTTPS (kecuali localhost)
- Pastikan manifest.json dan service-worker.js dapat diakses
- Cek Console browser untuk error

### Service Worker tidak terdaftar
- Pastikan menggunakan HTTPS
- Cek apakah browser mendukung Service Worker
- Cek Console untuk error

### Icon tidak muncul
- Pastikan file icon ada di folder `icons/`
- Cek path di manifest.json
- SVG icons sudah tersedia dan berfungsi

### Nomor tidak valid
- Pastikan nomor dimulai dengan 08, +628, atau 628
- Panjang nomor minimal 11 digit
- Hapus karakter khusus selain angka

## 📝 Lisensi

MIT License - Bebas digunakan untuk keperluan pribadi maupun komersial.

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:
1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📧 Kontak & Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository.

## 🎉 Credits

Dibuat dengan ❤️ untuk memudahkan komunikasi via WhatsApp

---

**Whads** - WhatsApp Direct Send | Made with ❤️ in Indonesia 🇮🇩