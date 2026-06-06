"use client";

import Link from "next/link";
import { useState } from "react";

export default function DetailLabuanBajo() {
  // 1. State untuk Fitur Rating Bintang
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // 2. State untuk Fitur Komentar
  const [daftarKomentar, setDaftarKomentar] = useState([
    { id: 1, nama: "Budi Santoso", teks: "Pemandangannya luar biasa indah! Sangat direkomendasikan untuk liburan keluarga.", bintang: 5, waktu: "2 hari yang lalu" }
  ]);
  const [inputKomentar, setInputKomentar] = useState("");

  // Fungsi untuk mengirim komentar baru
  const kirimKomentar = (e) => {
    e.preventDefault();
    if (!inputKomentar.trim()) return; // Jangan kirim jika kosong
    if (rating === 0) {
      alert("Mohon berikan rating bintang terlebih dahulu!");
      return;
    }

    const komentarBaru = {
      id: Date.now(),
      nama: "Pengunjung (Anda)", // Simulasi nama user
      teks: inputKomentar,
      bintang: rating,
      waktu: "Baru saja"
    };

    // Tambahkan komentar baru ke daftar
    setDaftarKomentar([komentarBaru, ...daftarKomentar]);
    setInputKomentar(""); // Kosongkan form input
    // Rating tidak di-reset agar user tahu bintang yang mereka berikan
  };

  return (
    <main className="w-full min-h-screen bg-white font-sans text-gray-800">
      
      {/* === NAVBAR SINGKAT === */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-[#0f2e3c] text-white">
        <Link href="/" className="font-serif text-xl tracking-wider font-bold">wonderful indonesia</Link>
        <Link href="/destinasi" className="text-sm font-medium hover:text-teal-300 transition flex items-center gap-2">
          <span>←</span> Kembali ke Destinasi
        </Link>
      </header>

      {/* === FOTO UTAMA (HERO) === */}
      <section className="w-full h-[60vh] relative">
        <img 
          src="/gunung.webp" 
          alt="Labuan Bajo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-10 left-6 md:left-20 text-white">
          <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">Alam & Petualangan</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">Labuan Bajo</h1>
          <p className="text-lg md:text-xl mt-2 flex items-center gap-2 drop-shadow-md">
            📍 Nusa Tenggara Timur, Indonesia
          </p>
        </div>
      </section>

      {/* === KONTEN UTAMA: DESKRIPSI & ULASAN === */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* KOLOM KIRI: DESKRIPSI (Lebar 2/3) */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Tentang Destinasi Ini</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed text-justify space-y-6">
            <p>
              Terletak di ujung barat Pulau Flores, <strong>Labuan Bajo</strong> dulunya adalah sebuah desa nelayan kecil yang kini telah menjelma menjadi salah satu destinasi wisata super prioritas di Indonesia. Gerbang menuju Taman Nasional Komodo ini menawarkan pesona alam yang tak tertandingi.
            </p>
            <p>
              Dari sini, Anda bisa memulai pelayaran memukau mengelilingi gugusan pulau-pulau eksotis seperti Pulau Padar dengan pemandangan bukitnya yang melengkung indah, hingga Pulau Komodo tempat berdiamnya kadal raksasa prasejarah yang legendaris. 
            </p>
            <p>
              Jangan lewatkan pula keajaiban <em>Pink Beach</em> (Pantai Merah Muda) dengan pasirnya yang merona, serta surga bawah laut di Manta Point tempat Anda bisa berenang langsung bersama ikan Pari Manta yang anggun. Labuan Bajo adalah kanvas alam tempat petualangan dan kedamaian menyatu secara sempurna.
            </p>
          </div>

          <hr className="my-12 border-gray-200" />

          {/* BAGIAN KOMENTAR */}
          <h3 className="text-2xl font-bold font-serif mb-8">Komentar & Ulasan ({daftarKomentar.length})</h3>
          
          <div className="space-y-6">
            {daftarKomentar.map((komentar) => (
              <div key={komentar.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-gray-900">{komentar.nama}</h4>
                    <p className="text-xs text-gray-400 mt-1">{komentar.waktu}</p>
                  </div>
                  {/* Bintang dari komentar */}
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < komentar.bintang ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{komentar.teks}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KOLOM KANAN: FITUR BERI RATING (Lebar 1/3) */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-10">
            <h3 className="text-xl font-bold font-serif mb-2 text-gray-900">Bagikan Pengalaman Anda</h3>
            <p className="text-sm text-gray-500 mb-6">Pernah berkunjung ke sini? Beritahu wisatawan lain apa pendapat Anda.</p>
            
            <form onSubmit={kirimKomentar} className="flex flex-col gap-5">
              
              {/* FITUR RATING INTERAKTIF */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Penilaian Anda</label>
                <div className="flex gap-1 text-3xl cursor-pointer">
                  {[1, 3-6].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`transition duration-200 ${
                        star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {rating === 0 ? "Pilih bintang" : `Anda memberikan ${rating} bintang`}
                </p>
              </div>

              {/* KOLOM TULIS KOMENTAR */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tulis Komentar</label>
                <textarea 
                  value={inputKomentar}
                  onChange={(e) => setInputKomentar(e.target.value)}
                  placeholder="Ceritakan keseruan perjalanan Anda..." 
                  rows="4"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none text-sm"
                ></textarea>
              </div>

              {/* TOMBOL KIRIM */}
              <button 
                type="submit" 
                className="w-full bg-[#0f2e3c] text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition shadow-md"
              >
                Kirim Ulasan
              </button>

            </form>
          </div>
        </div>

      </section>
    </main>
  );
}