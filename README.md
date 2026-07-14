RICK & MORTY CHARACTER EXPLORER

Aplikasi React JS untuk menampilkan daftar karakter Rick and Morty menggunakan Rick and Morty API dengan fitur login sederhana, pencarian karakter, filter kategori, detail karakter, dan daftar favorit menggunakan Bootstrap 5.

API YANG DIGUNAKAN
Rick and Morty API
https://rickandmortyapi.com/

Endpoint
GET /character

Mengambil daftar karakter.
GET /character?page=2

Mengambil karakter berdasarkan halaman.
GET /character?name=rick

Mencari karakter berdasarkan nama.
GET /character/{id}

Struktur Response API
{
  "info": {
    "count": 826,
    "pages": 42
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "image": "https://..."
    }
  ]
}

FITUR UTAMA
LOGIN PAGE
Login sederhana menggunakan username dan password
Validasi input tidak boleh kosong
Menyimpan data login menggunakan Local Storage
Protected Route agar halaman utama hanya bisa diakses setelah login

HOME PAGE
Menampilkan daftar karakter Rick and Morty
Menampilkan gambar karakter
Menampilkan nama karakter
Menampilkan status karakter
Menampilkan spesies karakter
Fitur pencarian berdasarkan nama
Pagination halaman
Tombol Detail
Tombol Favorite

CATEGORY PAGE
Filter karakter berdasarkan kategori, misalnya:
Human
Alien
Robot
Animal
Mythological Creature

Data tetap berasal dari Rick and Morty API.

DETAIL PAGE
Menampilkan informasi lengkap karakter.
Informasi yang ditampilkan:
Nama
Foto
Status
Species
Gender
Origin
Location

Terdapat tombol kembali ke halaman Home.

FAVORITE PAGE
Menampilkan daftar karakter favorit
Menambahkan karakter ke daftar favorit
Menghapus karakter dari favorit
Data favorit disimpan menggunakan React Context dan Local Storage
FITUR PENCARIAN
Pencarian berdasarkan nama karakter
Menggunakan endpoint:
GET /character?name=nama
Hasil pencarian ditampilkan secara langsung.
PAGINATION
Tombol Previous
Tombol Next
Menampilkan nomor halaman aktif
Maksimal 10 halaman ditampilkan
RESPONSIVE

Menggunakan Bootstrap 5.
Mendukung tampilan:
DesktoP
Tablet
Mobile

Navbar berubah menjadi hamburger menu pada layar kecil.

STRUKTUR HALAMAN DAN ROUTING
Halaman	Path	Komponen	Deskripsi
Login	/	Login.jsx	Login pengguna
Home	/home	Home.jsx	Daftar karakter
Category	/category	Category.jsx	Filter kategori
Detail	/detail/:id	Penjelasan.jsx	Detail karakter
Favorite	/favorite	Favorite.jsx	Daftar favorit
STRUKTUR FOLDER PROYEK
src/

components/
│
├── CharacterCard.js
├── Loading.js
├── Navbar.js
├── Pagination.js
├── ProtectedRoute.js
└── SearchBar.js

context/
│
├── AuthContext.js
└── FavoriteContext.js

pages/
│
├── Login.js
├── Home.js
├── Category.js
├── Favorite.js
└── Penjelasan.js

services/
│
└── api.js

App.js
index.js
index.css
TEKNOLOGI YANG DIGUNAKAN
Teknologi	Kegunaan
React JS	Library antarmuka pengguna
React Router DOM	Routing halaman
Axios	Mengambil data API
Bootstrap 5	Framework CSS
Context API	State Management
Local Storage	Menyimpan login dan favorit
CARA MENJALANKAN PROYEK
Install dependency
npm install
Install library
npm install axios
npm install bootstrap
npm install react-router-dom
Jalankan project
npm start

Project akan berjalan di

http://localhost:3000
STATE MANAGEMENT
State	Lokasi	Fungsi
user	AuthContext	Menyimpan data login
favorites	FavoriteContext	Menyimpan karakter favorit
characters	Home.jsx	Data karakter dari API
loading	Home.jsx	Status loading
search	Home.jsx	Kata kunci pencarian
page	Home.jsx	Halaman aktif
totalPages	Home.jsx	Total halaman
VALIDASI

Login:
Username wajib diisi
Password wajib diisi

Pencarian:
Jika karakter tidak ditemukan akan menampilkan pesan.
CATATAN
Data karakter berasal dari Rick and Morty API.
Login hanya menggunakan validasi sederhana tanpa database.
Daftar favorit disimpan menggunakan Local Storage sehingga tetap tersedia saat browser dibuka kembali.
Aplikasi menggunakan React Context API untuk mengelola autentikasi dan daftar favorit.
IDENTITAS

Nama : Nadihe Zaina Balqis
NIM : (Isi NIM kamu)
Mata Kuliah : Kerangka Kerja Pengembangan Antarmuka Website (KKPAW)
Tugas : Ujian Akhir Semester (UAS)
Program Studi : Teknologi Rekayasa Perangkat Lunak (TRPL)
Universitas : Politeknik Wilmar Bisnis Indonesia

LISENSI

Proyek ini dibuat untuk memenuhi tugas Ujian Akhir Semester (UAS) mata kuliah Kerangka Kerja Pengembangan Antarmuka Website (KKPAW).

© 2026 - Nadihe Zaina Balqis

