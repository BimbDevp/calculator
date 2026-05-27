# Calculator Web App

Kalkulator web modern, bersih, dan responsif dengan desain **Neumorphism (Soft UI)** yang premium. Proyek ini dibangun dari nol sebagai bagian dari kurikulum Foundations di The Odin Project untuk menunjukkan pemahaman mendalam tentang struktur HTML5, teknik tata letak murni menggunakan CSS Flexbox, serta manipulasi DOM dan logika menggunakan Vanilla JavaScript.

---

## 🎨 Fitur UI/UX & Logika Inti

- **Desain Neumorphic Premium:** Mengimplementasikan UI yang lembut menggunakan teknik double `box-shadow` tingkat lanjut untuk menciptakan efek tombol timbul (extruded) dan wadah layar yang cekung (inset) secara realistis.
- **Layout Murni CSS Flexbox:** Dibuat 100% menggunakan Flexbox dengan penentuan ukuran berbasis persentase yang cerdas dan pembungkusan otomatis (`flex-wrap`). Dibangun sepenuhnya tanpa bergantung pada CSS Grid.
- **Arsitektur State-Driven UI:** Logika JavaScript dirancang tersentralisasi menggunakan satu fungsi pembaru tampilan (`displayUpdate`). Tombol tidak memanipulasi DOM secara langsung, melainkan mengubah memori internal (_state_) terlebih dahulu untuk menjaga kode tetap bersih (_clean code_).
- **Type-Safety & Edge Case Guard:** Dilengkapi dengan sistem deteksi tipe data (String vs Number) untuk mencegah kerusakan pada input desimal, fitur pembatasan angka di belakang koma secara dinamis menggunakan `.toFixed()`, serta pengaman pembagian dengan angka nol (_Zero Division Error_) yang akan memunculkan pesan `"Error"`.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Struktur semantik yang bersih menggunakan class khusus (`.number`, `.operator`, `.clear`, `.equal`) yang dioptimalkan untuk proses manipulasi DOM.
- **CSS3:** Pengaturan warna kustom, pelapisan bayangan (shadow layering) tingkat lanjut, dan penyelarasan Flexbox yang kokoh.
- **Vanilla JavaScript (ES6+):** Manajemen _state_ global, _Event Listeners_ terfilter, operasi logika matematika murni, dan penanganan _error_ tingkat lanjut.

---

## 🚀 Progres Proyek

- [x] Mendesain mockup tata letak & wireframe visual
- [x] Menyelesaikan struktur HTML5 semantik
- [x] Menyelesaikan gaya Neumorphic CSS dan tipografi
- [x] Mengimplementasikan logika inti kalkulator menggunakan JavaScript (State, Desimal, & Modifiers)
- [x] Menyebarkan (deploy) demo langsung via GitHub Pages (Langkah Selanjutnya)

---

## ⚙️ Cara Menjalankan Secara Lokal

1. Klon repositori ini ke komputer Anda:
   ```bash
   git clone git@github.com:BimbDevp/calculator.git
   ```
