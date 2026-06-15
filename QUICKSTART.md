# 🚀 Quick Start Guide - Whads

## Cara Tercepat Menggunakan Whads

### 1️⃣ Jalankan Aplikasi

Pilih salah satu cara berikut:

**Opsi A: Python (Paling Mudah)**
```bash
cd whads
python -m http.server 8000
```

**Opsi B: Node.js**
```bash
cd whads
npx http-server -p 8000
```

**Opsi C: PHP**
```bash
cd whads
php -S localhost:8000
```

### 2️⃣ Buka Browser

Buka browser dan akses:
```
http://localhost:8000
```

### 3️⃣ Gunakan Aplikasi

1. **Masukkan Nomor WhatsApp**
   - Contoh: `08123456789`
   - Atau: `+628123456789`
   - Atau: `0812-3456-789`
   - Atau: `0812 3456 789`

2. **Tulis Pesan (Opsional)**
   - Kosongkan jika hanya ingin membuka chat

3. **Klik "Kirim ke WhatsApp"**
   - WhatsApp akan terbuka otomatis
   - Nomor sudah terformat dengan benar

### 4️⃣ Install sebagai PWA (Opsional)

**Di Chrome/Edge:**
- Klik ikon install di address bar
- Atau: Menu (⋮) → "Install Whads"

**Di Mobile:**
- Chrome: Tap "Add to Home screen"
- Safari: Share → "Add to Home Screen"

## 🎯 Contoh Penggunaan

### Kirim Pesan Langsung
```
Nomor: 08123456789
Pesan: Halo, saya tertarik dengan produk Anda
→ Klik "Kirim ke WhatsApp"
```

### Buka Chat Tanpa Pesan
```
Nomor: +628123456789
Pesan: (kosong)
→ Klik "Kirim ke WhatsApp"
```

### Format Nomor Otomatis
```
Input: 0812-3456-789
Output: +628123456789 ✓

Input: 0812 3456 789
Output: +628123456789 ✓

Input: 628123456789
Output: +628123456789 ✓
```

## 🧪 Test Formatting

Untuk menguji fungsi formatting nomor:
```
http://localhost:8000/test-formatting.html
```

## 📱 Generate Icons (Jika Diperlukan)

**Opsi 1: Browser (Termudah)**
```
http://localhost:8000/generate-icons.html
```
Download icon-192.png dan icon-512.png, simpan ke folder `icons/`

**Opsi 2: Python**
```bash
pip install pillow
python generate_icons.py
```

**Opsi 3: Node.js (SVG)**
```bash
node create-icons.js
```
SVG icons sudah otomatis dibuat dan berfungsi dengan baik!

## ❓ Troubleshooting

### Aplikasi tidak bisa dibuka
- Pastikan web server berjalan
- Cek port 8000 tidak digunakan aplikasi lain
- Coba port lain: `python -m http.server 8080`

### PWA tidak bisa diinstall
- Gunakan HTTPS (atau localhost untuk testing)
- Pastikan manifest.json dan service-worker.js ada
- Cek Console browser untuk error

### WhatsApp tidak terbuka
- Pastikan WhatsApp terinstall
- Cek nomor sudah benar (minimal 11 digit)
- Pastikan format nomor valid

## 🎉 Selesai!

Aplikasi Whads siap digunakan. Selamat mengirim pesan WhatsApp tanpa perlu simpan nomor! 🚀

---

Butuh bantuan lebih lanjut? Baca [README.md](README.md) untuk dokumentasi lengkap.