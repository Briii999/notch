/**
 * README.ts
 * Jalankan file TypeScript menggunakan ts-node
 */

const divider = "=".repeat(50);

console.log(divider);
console.log("📘 PROJECT README");
console.log(divider);

console.log(`
📌 Deskripsi
Project ini berisi file TypeScript yang dapat dijalankan langsung
menggunakan ts-node tanpa perlu proses build.

🧰 Prasyarat
- Node.js (versi LTS disarankan)
- npm atau yarn
- ts-node
- typescript

📦 Install ts-node & typescript (jika belum ada)
npm install -g ts-node typescript

atau local project:
npm install --save-dev ts-node typescript

🚀 Cara Menjalankan File
Pastikan berada di root project, lalu jalankan:

▶ Menjalankan file 1.ts
ts-node 1.ts

▶ Menjalankan file 2.ts
ts-node 2.ts

📂 Contoh Struktur Folder
project-root/
├─ 1.ts
├─ 2.ts
├─ readme.ts
├─ package.json
└─ tsconfig.json (opsional)

📝 Catatan
- Tidak perlu compile dengan tsc
- ts-node menjalankan file .ts secara langsung
- Pastikan path file benar saat menjalankan perintah

✅ Selesai
Selamat mencoba 🚀
`);

console.log(divider);
