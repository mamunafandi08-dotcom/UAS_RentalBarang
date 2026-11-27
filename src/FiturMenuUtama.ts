// SIPENDAKI - Sistem Informasi Penyewaan Alat Pendakian

import * as readlineSync from "readline-sync";

const SIPENDAKI: string = "SIPENDAKI"; 
let aplikasiAktif: boolean = true;

// tipe data untuk satu alat pendakian
interface Alat {
  id: string;
  nama: string;
  kategori: string;
  harga: number; // harga sewa per hari
  stok: number;
  tersedia: boolean;
}

// fungsi bantu untuk meminta input dari pengguna
function tanya(pesan: string): string {
  return readlineSync.question(pesan).trim();
}

// inisialisasi array daftarAlat berisi data awal alat pendakian
const daftarAlat: Alat[] = [
  { id: "A01", nama: "Tenda Dome 4 Orang", kategori: "Tenda", harga: 50000, stok: 5, tersedia: true },
  { id: "A02", nama: "Carrier 60L", kategori: "Tas", harga: 30000, stok: 8, tersedia: true },
  { id: "A03", nama: "Sleeping Bag", kategori: "Perlengkapan Tidur", harga: 15000, stok: 10, tersedia: true },
  { id: "A04", nama: "Kompor Portable", kategori: "Alat Masak", harga: 10000, stok: 0, tersedia: false },
  { id: "A05", nama: "Headlamp", kategori: "Penerangan", harga: 8000, stok: 12, tersedia: true },
  { id: "A06", nama: "Trekking Pole", kategori: "Aksesoris", harga: 12000, stok: 6, tersedia: true },
];

// tampilkan menu
function tampilkanMenu(): void {
  console.log("\n=========================================");
  console.log(`               ${SIPENDAKI}`);
  console.log("Sistem Informasi Penyewaan Alat Pendakian");
  console.log("=========================================");
  console.log("1. Tambah Alat");
  console.log("2. Lihat Daftar Alat");
  console.log("3. Ubah Harga / Stok");
  console.log("4. Hapus Alat");
  console.log("5. Cari / Filter Alat");
  console.log("6. Simulasi Sewa");
  console.log("0. Keluar");
  console.log("=========================================");
}

// fungsi-fungsi fitur (masih kerangka / placeholder)
function tambahAlat(): void {
  console.log("[INFO] Fitur Tambah Alat belum dibuat.");
}

function lihatDaftarAlat(): void {
  console.log("[INFO] Fitur Lihat Daftar Alat belum dibuat.");
}

function ubahAlat(): void {
  console.log("[INFO] Fitur Ubah Harga / Stok belum dibuat.");
}

function hapusAlat(): void {
  console.log("[INFO] Fitur Hapus Alat belum dibuat.");
}

function cariAlat(): void {
  console.log("[INFO] Fitur Cari / Filter Alat belum dibuat.");
}

function simulasiSewa(): void {
  console.log("[INFO] Fitur Simulasi Sewa belum dibuat.");
}

// fungsi utama: menjalankan menu berulang sampai pengguna memilih keluar (0)
function main(): void {
  while (aplikasiAktif) {
    tampilkanMenu();

    // meminta input pilihan menu dari pengguna
    const pilihan: string = tanya("Masukkan nomor menu (0-6): ");

    // memilih fitur berdasarkan input pengguna
    switch (pilihan) {
      case "1":
        tambahAlat();
        break;

      case "2":
        lihatDaftarAlat();
        break;

      case "3":
        ubahAlat();
        break;

      case "4":
        hapusAlat();
        break;

      case "5":
        cariAlat();
        break;

      case "6":
        simulasiSewa();
        break;

      case "0":
        // perulangan menu berhenti
        aplikasiAktif = false;
        break;
      default:

        console.log("[PERINGATAN] Pilihan menu tidak valid! Masukkan angka 0 sampai 6.");
        break;
    }
  }

  console.log(`\nTerima kasih telah menggunakan ${SIPENDAKI}. Sampai jumpa!`);
}

main();