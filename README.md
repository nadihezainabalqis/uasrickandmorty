#  Rick & Morty Character Explorer

Aplikasi **React JS** untuk menampilkan daftar karakter **Rick and Morty** menggunakan **Rick and Morty API**. Aplikasi dilengkapi dengan fitur login sederhana, pencarian karakter, kategori, detail karakter, daftar favorit, serta tampilan responsif menggunakan **Bootstrap 5**.

---

#  API yang Digunakan

**Rick and Morty API**

https://rickandmortyapi.com/

### Endpoint

```http
GET /character
```
Mengambil daftar karakter.

```http
GET /character?page=2
```
Mengambil karakter berdasarkan halaman.

```http
GET /character?name=rick
```
Mencari karakter berdasarkan nama.

```http
GET /character/{id}
```
Mengambil detail karakter berdasarkan ID.

### Contoh Response

```json
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
```

---

#  Fitur Utama

##  Login

- Login menggunakan username dan password
- Validasi input tidak boleh kosong
- Menyimpan data login menggunakan Local Storage
- Protected Route

---

##  Home

- Menampilkan daftar karakter
- Menampilkan gambar karakter
- Menampilkan nama
- Menampilkan status
- Menampilkan spesies
- Pencarian karakter
- Pagination
- Tombol Detail
- Tombol Favorite

---

##  Category

Menampilkan karakter berdasarkan kategori seperti:

- Human
- Alien
- Robot
- Animal
- Mythological Creature

---

##  Detail

Menampilkan informasi lengkap karakter:

- Nama
- Foto
- Status
- Species
- Gender
- Origin
- Location

---

##  Favorite

- Menambahkan karakter ke favorit
- Menampilkan daftar favorit
- Menghapus karakter favorit
- Data disimpan menggunakan Context API dan Local Storage

---

#  Pencarian

Menggunakan endpoint:

```http
GET /character?name=nama
```

Hasil pencarian ditampilkan secara langsung.

---

#  Pagination

- Previous
- Next
- Maksimal 10 halaman

---

#  Responsive

Menggunakan **Bootstrap 5** sehingga dapat berjalan dengan baik pada:

- Desktop
- Tablet
- Mobile

---

#  Routing

| Halaman | Path |
|---------|------|
| Login | `/` |
| Home | `/home` |
| Category | `/category` |
| Detail | `/detail/:id` |
| Favorite | `/favorite` |

---

#  Struktur Folder

```text
src
│
├── components
│   ├── CharacterCard.js
│   ├── Loading.js
│   ├── Navbar.js
│   ├── Pagination.js
│   ├── ProtectedRoute.js
│   └── SearchBar.js
│
├── context
│   ├── AuthContext.js
│   └── FavoriteContext.js
│
├── pages
│   ├── Login.js
│   ├── Home.js
│   ├── Category.js
│   ├── Favorite.js
│   └── Penjelasan.js
│
├── services
│   └── api.js
│
├── App.js
├── index.js
└── index.css
```

---

#  Teknologi

| Teknologi | Kegunaan |
|------------|----------|
| React JS | Frontend Framework |
| React Router DOM | Routing |
| Axios | HTTP Client |
| Bootstrap 5 | Styling |
| Context API | State Management |
| Local Storage | Menyimpan login & favorit |

---

#  Cara Menjalankan

### Install dependency

```bash
npm install
```

### Install library

```bash
npm install axios
npm install bootstrap
npm install react-router-dom
```

### Jalankan aplikasi

```bash
npm start
```

Aplikasi berjalan di:

```text
http://localhost:3000
```

---

#  State Management

| State | Lokasi | Fungsi |
|--------|--------|--------|
| user | AuthContext | Menyimpan data login |
| favorites | FavoriteContext | Menyimpan karakter favorit |
| characters | Home.jsx | Data karakter |
| loading | Home.jsx | Status loading |
| search | Home.jsx | Kata kunci pencarian |
| page | Home.jsx | Halaman aktif |
| totalPages | Home.jsx | Total halaman |

---

#  Validasi

### Login

- Username wajib diisi
- Password wajib diisi

### Pencarian

- Menampilkan pesan jika karakter tidak ditemukan.

---

# Catatan

- Data berasal dari Rick and Morty API.
- Login menggunakan Context API dan Local Storage.
- Favorite disimpan di Local Storage.
- Tidak menggunakan database.

---

#  Identitas

**Nama :** Nadihe Zaina Balqis

**NIM :** *(Isi NIM)*

**Mata Kuliah :** Kerangka Kerja Pengembangan Antarmuka Website (KKPAW)

**Program Studi :** Teknologi Rekayasa Perangkat Lunak (TRPL)

**Universitas :** Politeknik Wilmar Bisnis Indonesia

---

#  Lisensi

Proyek ini dibuat untuk memenuhi tugas **Ujian Akhir Semester (UAS)** mata kuliah **Kerangka Kerja Pengembangan Antarmuka Website (KKPAW)**.

© 2026 Nadihe Zaina Balqis