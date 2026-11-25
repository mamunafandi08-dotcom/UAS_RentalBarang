// SIPENDAKI - Sistem Informasi Penyewaan Alat Pendakian
// Progress 1: program pengantar (Hello console + struktur data + tampilan menu)

// Entitas data utama
interface Alat {
  id: string;
  nama: string;
  kategori: string;
  hargaPerHari: number;
  stok: number;
  tersedia: boolean;
}

// Data awal
const daftarAlat: Alat[] = [
  { id: "TND-01", nama: "Tenda Dome 6 Orang", kategori: "Tenda", hargaPerHari: 50000, stok: 5, tersedia: true },
  { id: "TAS-01", nama: "Carrier 60L", kategori: "Tas", hargaPerHari: 30000, stok: 8, tersedia: true },
  { id: "SLP-01", nama: "Sleeping Bag", kategori: "Tidur", hargaPerHari: 15000, stok: 10, tersedia: true },
  { id: "KMP-01", nama: "Kompor Portable", kategori: "Masak", hargaPerHari: 10000, stok: 0, tersedia: false },
]; 
// Menampilkan judul aplikasi
function tampilkanJudul(): void {
  console.log("========================================");
  console.log("  SIPENDAKI");
  console.log("  Sistem Informasi Penyewaan Alat Pendakian");
  console.log("========================================");
  console.log("Hello console! Aplikasi siap dijalankan.\n");
  console.log("Lora PR")
} 

// Menampilkan daftar alat satu baris per alat (pakai perulangan for)
function tampilkanDaftarAlat(): void {
  console.log("Daftar alat saat ini:");
  for (let i = 0; i < daftarAlat.length; i++) {
    const a = daftarAlat[i];
    if (a === undefined) continue; // pengaman untuk mode TypeScript ketat
    const status = a.tersedia ? "Tersedia" : "Habis";
    console.log(
      (i + 1) + ". " + a.id + " | " + a.nama + " | " + a.kategori +
      " | Harga/hari: " + a.hargaPerHari + " | Stok: " + a.stok + " | " + status
    );
  }

  console.log("3. Ubah harga / stok");
  console.log("4. Hapus alat");
  console.log("5. Cari / filter alat");
  console.log("6. Simulasi sewa");
  console.log("0. Keluar");
  console.log("Agus pr");
}

tampilkanJudul();
tampilkanDaftarAlat(); 

console.log('AFFAND PR')
