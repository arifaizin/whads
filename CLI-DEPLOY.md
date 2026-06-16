# 🚀 Deploy Whads dengan CLI (Command Line)

Panduan deploy menggunakan command line saja, tanpa perlu buka browser untuk setup.

---

## 🎯 Opsi 1: Vercel CLI (Paling Mudah & Cepat)

### Install Vercel CLI
```bash
npm install -g vercel
```

### Deploy dalam 1 Perintah
```bash
cd c:/Users/Dicoding/Desktop/whads
vercel
```

**Ikuti prompt:**
- Set up and deploy? → **Y**
- Which scope? → Pilih account Anda
- Link to existing project? → **N**
- What's your project's name? → **whads**
- In which directory is your code located? → **.** (tekan Enter)
- Want to override settings? → **N**

**Selesai!** 🎉 URL akan muncul di terminal.

### Deploy ke Production
```bash
vercel --prod
```

### Custom Domain (Opsional)
```bash
vercel domains add yourdomain.com
```

---

## 🎯 Opsi 2: Netlify CLI

### Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Login
```bash
netlify login
```
Browser akan terbuka sekali untuk login, setelah itu semua via CLI.

### Deploy
```bash
cd c:/Users/Dicoding/Desktop/whads
netlify deploy
```

**Ikuti prompt:**
- Create & configure a new site? → **Y**
- Team? → Pilih team Anda
- Site name? → **whads** (atau kosongkan untuk random)
- Publish directory? → **.** (tekan Enter)

### Deploy ke Production
```bash
netlify deploy --prod
```

### Custom Domain
```bash
netlify domains:add yourdomain.com
```

---

## 🎯 Opsi 3: GitHub CLI + GitHub Pages

### Install GitHub CLI
**Windows (PowerShell):**
```powershell
winget install --id GitHub.cli
```

**Atau download dari:** https://cli.github.com/

### Login ke GitHub
```bash
gh auth login
```
Pilih:
- GitHub.com
- HTTPS
- Login with a web browser (sekali saja)

### Buat Repository & Push
```bash
cd c:/Users/Dicoding/Desktop/whads

# Buat repository di GitHub
gh repo create whads --public --source=. --remote=origin

# Push code
git push -u origin main
```

### Aktifkan GitHub Pages
```bash
gh api repos/:owner/whads/pages -X POST -f source[branch]=main -f source[path]=/
```

### Cek Status
```bash
gh repo view --web
```

**URL Website:** `https://USERNAME-ANDA.github.io/whads/`

---

## 🎯 Opsi 4: Surge.sh (Super Cepat)

### Install Surge
```bash
npm install -g surge
```

### Deploy (Pertama Kali)
```bash
cd c:/Users/Dicoding/Desktop/whads
surge
```

**Ikuti prompt:**
- Email? → Masukkan email Anda
- Password? → Buat password
- Project path? → Tekan Enter
- Domain? → Tekan Enter (random) atau ketik custom: `whads.surge.sh`

**Selesai!** URL langsung muncul.

### Update Deployment
```bash
surge
```

---

## 📊 Perbandingan Platform

| Platform | Kecepatan | Custom Domain | SSL | CDN | Gratis |
|----------|-----------|---------------|-----|-----|--------|
| **Vercel** | ⚡⚡⚡ | ✅ | ✅ | ✅ | ✅ |
| **Netlify** | ⚡⚡⚡ | ✅ | ✅ | ✅ | ✅ |
| **GitHub Pages** | ⚡⚡ | ✅ | ✅ | ✅ | ✅ |
| **Surge** | ⚡⚡⚡ | ✅ | ✅ | ❌ | ✅ |

---

## 🔄 Update Website (Semua Platform)

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod
```

### GitHub Pages
```bash
git add .
git commit -m "Update"
git push
```

### Surge
```bash
surge
```

---

## 🛠️ Troubleshooting

### Error: "command not found"
**Solusi:** Restart terminal setelah install CLI

### Error: "npm not found"
**Solusi:** Install Node.js dari https://nodejs.org/

### Error: "Permission denied"
**Windows:** Jalankan PowerShell sebagai Administrator
**Mac/Linux:** Gunakan `sudo` sebelum perintah install

### Error: "Authentication failed"
**Solusi:** 
```bash
# Vercel
vercel logout
vercel login

# Netlify
netlify logout
netlify login

# GitHub
gh auth logout
gh auth login
```

---

## 🎨 Generate PNG Icons (CLI)

Jika ingin generate icons via CLI (butuh Node.js):

```bash
# Install dependencies
npm install -g sharp-cli

# Generate icons
sharp -i icons/icon-192.svg -o icons/icon-192.png resize 192 192
sharp -i icons/icon-512.svg -o icons/icon-512.png resize 512 512
```

**Atau** buka `convert-svg-to-png.html` di browser sekali saja.

---

## ✅ Rekomendasi: Vercel CLI

**Kenapa Vercel?**
- ✅ Paling cepat (1 perintah)
- ✅ Auto HTTPS & CDN
- ✅ Preview URLs untuk setiap deploy
- ✅ Analytics gratis
- ✅ Custom domain mudah
- ✅ Zero config

**Quick Start:**
```bash
npm install -g vercel
cd c:/Users/Dicoding/Desktop/whads
vercel
```

**Done!** 🎉

---

## 📝 Cheat Sheet

### Vercel
```bash
vercel                    # Deploy preview
vercel --prod            # Deploy production
vercel ls                # List deployments
vercel domains ls        # List domains
vercel logs              # View logs
```

### Netlify
```bash
netlify deploy           # Deploy preview
netlify deploy --prod    # Deploy production
netlify status           # Check status
netlify open             # Open dashboard
netlify logs             # View logs
```

### GitHub CLI
```bash
gh repo view --web       # Open repo
gh repo list             # List repos
gh browse                # Open in browser
```

### Surge
```bash
surge                    # Deploy/update
surge list               # List sites
surge teardown           # Delete site
```

---

## 🎉 Selesai!

Pilih salah satu platform di atas dan deploy dalam hitungan menit!

**Rekomendasi untuk pemula:** Vercel CLI
**Rekomendasi untuk gratis selamanya:** GitHub Pages
**Rekomendasi untuk tercepat:** Surge

---

**Made with ❤️ in Indonesia 🇮🇩**