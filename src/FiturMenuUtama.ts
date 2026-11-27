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
