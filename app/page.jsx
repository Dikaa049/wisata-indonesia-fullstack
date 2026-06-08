"use client";

import { useState } from "react";
import Link from "next/link";

export default function BerandaWisata() {
  const destinasiHero = [
    {
      nama: "Labuan Bajo",
      gambar: "/labuan bajo.webp",
      infoKiri: "Keajaiban Pulau Padar",
      infoKanan: "Komodo National Park",
    },
    {
      nama: "Raja Ampat",
      gambar: "/raja ampat.webp",
      infoKiri: "Keajaiban Laut",
      infoKanan: "Pulau Misool",
    },
    {
      nama: "Borobudur",
      gambar: "/candi borobudur.webp",
      infoKiri: "Candi Prambanan",
      infoKanan: "Magelang",
    },
  ];

  const [index, setIndex] = useState(0);
  const geserKanan = () =>
    setIndex((prev) => (prev + 1) % destinasiHero.length);
  const geserKiri = () =>
    setIndex(
      (prev) => (prev - 1 + destinasiHero.length) % destinasiHero.length,
    );

  return (
    <main className="w-full font-sans bg-[#f9fafb]">
      <section className="relative h-screen w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            {/* Menggunakan file video utama yang ada di folder public kamu */}
            <source src="/labuan bajo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* ================= HEADER NAVBAR UTAMA ================= */}
        <header className="absolute top-0 w-full px-6 py-8 flex flex-col md:flex-row justify-between items-center z-20 text-white">
          <div className="flex items-center gap-3 cursor-pointer">
            {/* Tag Image Komponen Logo Wisata */}
            <img
              src="/logo.png"
              alt="Logo Wisata Indonesia"
              className="w-12 h-12 object-contain drop-shadow-lg"
              onError={(e) => {
                // Jalur alternatif otomatis jika logomu menggunakan ekstensi .jpeg / .jpg
                e.target.src = "/logo.jpeg";
              }}
            />
            {/* Emoji burung cadangan */}
            <span className="text-4xl drop-shadow-lg hidden">🕊️</span>

            <div className="leading-tight drop-shadow-md">
              <h1 className="text-xl font-serif font-bold tracking-wide">
                Wisata Indonesia
              </h1>
            </div>
          </div>

          <nav className="hidden lg:flex gap-10 text-[15px] font-medium drop-shadow-md tracking-wide mt-4 md:mt-0">
            <Link
              href="/"
              className="text-amber-400 font-semibold tracking-wide"
            >
              Destinasi
            </Link>
            <Link href="/pengalaman" className="hover:text-gray-300 transition">
              Pengalaman
            </Link>
            <Link href="/login" className="hover:text-gray-300 transition">
              Login Admin
            </Link>
          </nav>
        </header>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none mt-20">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-4 tracking-wider">
            {destinasiHero[index].nama}
          </h2>
          <p className="text-xl text-white/90 font-medium tracking-wide drop-shadow-lg">
            {destinasiHero[index].infoKiri} • {destinasiHero[index].infoKanan}
          </p>
        </div>

        <div className="absolute bottom-10 w-full z-20 px-10 flex justify-between items-center">
          <button
            onClick={geserKiri}
            className="w-12 h-12 rounded-full bg-black/30 border border-white/50 text-white flex items-center justify-center hover:bg-white/30 backdrop-blur-md transition"
          >
            ❮
          </button>
          <button
            onClick={geserKanan}
            className="w-12 h-12 rounded-full bg-black/30 border border-white/50 text-white flex items-center justify-center hover:bg-white/30 backdrop-blur-md transition"
          >
            ❯
          </button>
        </div>
      </section>

      {/* ============================================== */}
      {/* SECTION 2: CURATED FOR YOU (FOTO DIUPDATE) */}
      {/* ============================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-[#f9fafb]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b pb-4">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
              Curated For You
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
              Pilihan Kami Untukmu
            </h2>
          </div>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-black mt-4 md:mt-0 flex items-center gap-1"
          >
            View all <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="w-full h-56 md:h-64 overflow-hidden rounded-xl mb-5 shadow-sm">
              <img
                src="/ubud.webp" // 👈 BERHASIL DIISI: Mengganti /pantai.webp ke file ubud.webp milikmu
                alt="Pantai"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
            <span className="text-[10px] font-bold text-gray-400 bg-gray-200 px-2 py-1 rounded-sm uppercase tracking-wider">
              Luxury
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-3 font-serif">
              Celestial Ubud Retreat
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Experience the zenith of spiritual luxury in the heart of Bali's
              emerald highlands.
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="w-full h-56 md:h-64 overflow-hidden rounded-xl mb-5 shadow-sm">
              <img
                src="/pulau komodo.webp" // 👈 BERHASIL DIISI: Mengganti /gunung.webp ke file pulau komodo.webp milikmu
                alt="Gunung"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
            <span className="text-[10px] font-bold text-pink-500 bg-pink-100 px-2 py-1 rounded-sm uppercase tracking-wider">
              Adventure
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-3 font-serif">
              Pink Beach Odyssey
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              A private catamaran voyage through the primordial beauty of Komodo
              National Park.
            </p>
          </div>

          <div className="group cursor-pointer">
            <div className="w-full h-56 md:h-64 overflow-hidden rounded-xl mb-5 shadow-sm">
              <img
                src="/candi borobudur.webp" // 👈 BERHASIL DIISI: Mengganti /candi.webp ke file candi borobudur.webp milikmu
                alt="Candi"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
            <span className="text-[10px] font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded-sm uppercase tracking-wider">
              Cultural
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-3 font-serif">
              Heritage of Borobudur
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Walk the paths of ancient kings and find peace among the thousand
              stupas.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* SECTION 3: VISUAL HORIZON (FOTO DIUPDATE) */}
      {/* ============================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Nusantara Horizon
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              A visual journey through the most breathtaking landscapes of the
              archipelago.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[600px]">
            {/* Sisi Kiri (Gambar Besar) */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-full group cursor-pointer shadow-md">
              <img
                src="/gunung bomo.webp" // 👈 BERHASIL DIISI: Menggunakan file gunung bomo.webp dari folder public kamu
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                alt="Mount Bromo"
                onError={(e) => {
                  e.target.src = "/danau toba.webp";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs uppercase tracking-[0.2em] mb-1 opacity-80">
                  East Java
                </p>
                <h3 className="text-3xl font-serif font-bold">Mount Bromo</h3>
              </div>
            </div>

            {/* Sisi Kanan (4 Gambar Kecil) */}
            <div className="grid grid-cols-2 gap-4 h-[400px] md:h-full">
              {[
                { nama: "Ubud, Bali", img: "/ubud.webp" },
                { nama: "Raja Ampat", img: "/raja ampat.webp" },
                { nama: "Komodo", img: "/pulau komodo.webp" },
                { nama: "Danau Toba", img: "/danau toba.webp" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    alt={item.nama}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold font-serif">
                      {item.nama}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* SECTION 4: TOP DESTINATIONS (FOTO DIUPDATE) */}
      {/* ============================================== */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
            Top Destinations
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            Explore our highly-rated spots across the islands.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              {
                nama: "Labuan Bajo",
                loc: "Nusa Tenggara Timur",
                img: "/labuan bajjo.webp", // 👈 BERHASIL DIISI: Disesuaikan dengan file public kamu
                rate: "4.7",
              },
              {
                nama: "Seminyak",
                loc: "Bali",
                img: "/ubud.webp", // 👈 BERHASIL DIISI: Diarahkan ke file ubud.webp agar tidak 404
                rate: "4.8",
              },
              {
                nama: "Candi Borobudur",
                loc: "Magelang, Jawa Tengah",
                img: "/candi borobudur.webp", // 👈 BERHASIL DIISI: Diarahkan ke file candi borobudur.webp
                rate: "4.7",
              },
              {
                nama: "Danau Toba",
                loc: "Sumatera Utara",
                img: "/danau toba.webp", // 👈 BERHASIL DIISI: Diarahkan ke file danau toba.webp
                rate: "4.7",
              },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-full h-40 md:h-56 overflow-hidden rounded-xl mb-3 shadow-sm">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    alt={item.nama}
                    onError={(e) => {
                      // Fallback otomatis jika ada variasi nama file spasi tunggal seperti '/labuan bajo.webp'
                      e.target.src = "/labuan bajo.webp";
                    }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-900 font-serif text-[15px]">
                    {item.nama}
                  </h3>
                  <span className="text-xs font-bold text-gray-600 flex items-center gap-1">
                    ⭐ {item.rate}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  📍 {item.loc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <footer className="bg-[#0f2e3c] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-bold mb-4">
              Pesona
              <br />
              Indonesia
            </h2>
            <p className="text-sm text-gray-400">
              © 2024 Pesona Indonesia. Discover the Magic of the Archipelago.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  All Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sustainable Travel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
