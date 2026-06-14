"use client";

import { useState } from "react";
import Link from "next/link";

export default function BerandaWisata() {
  const destinasiHero = [
    {
      nama: "Labuan Bajo",
      video: "/labuan bajo.mp4",
      infoKiri: "Keajaiban Pulau Padar",
      infoKanan: "Komodo National Park",
    },
    {
      nama: "Raja Ampat",
      video: "/raja ampat.mp4",
      infoKiri: "Keajaiban Laut",
      infoKanan: "Pulau Misool",
    },
    {
      nama: "Borobudur",
      video: "/borobudur.mp4",
      infoKiri: "Candi Prambanan",
      infoKanan: "Magelang",
    },
  ];

  const [index, setIndex] = useState(0);

  const geserKanan = () =>
    setIndex((prev) => (prev + 1) % destinasiHero.length);
  const geserKiri = () =>
    setIndex((prev) => (prev - 1 + destinasiHero.length) % destinasiHero.length);

  return (
    <main className="w-full font-sans bg-[#f9fafb]">
      <section className="relative h-screen w-full overflow-hidden bg-gray-900">

        {/* Video berganti sesuai index */}
        {destinasiHero.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src={item.video}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* NAVBAR */}
        <header className="absolute top-0 w-full px-6 py-8 flex flex-col md:flex-row justify-between items-center z-20 text-white">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="/logo.png"
              alt="Logo Wisata Indonesia"
              className="w-12 h-12 object-contain drop-shadow-lg"
              onError={(e) => { e.target.src = "/logo.jpeg"; }}
            />
            <div className="leading-tight drop-shadow-md">
              <h1 className="text-xl font-serif font-bold tracking-wide">
                Wisata Indonesia
              </h1>
            </div>
          </div>

          <nav className="hidden lg:flex gap-10 text-[15px] font-medium drop-shadow-md tracking-wide mt-4 md:mt-0">
            <Link href="/" className="text-amber-400 font-semibold tracking-wide">
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

        {/* Teks Hero */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none mt-20">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-4 tracking-wider transition-all duration-700">
            {destinasiHero[index].nama}
          </h2>
          <p className="text-xl text-white/90 font-medium tracking-wide drop-shadow-lg">
            {destinasiHero[index].infoKiri} • {destinasiHero[index].infoKanan}
          </p>
        </div>

        {/* Tombol navigasi */}
        <div className="absolute bottom-10 w-full z-20 px-10 flex justify-between items-center">
          <button
            onClick={geserKiri}
            className="w-12 h-12 rounded-full bg-black/30 border border-white/50 text-white flex items-center justify-center hover:bg-white/30 backdrop-blur-md transition"
          >
            ❮
          </button>

          {/* Dot indicator */}
          <div className="flex gap-2">
            {destinasiHero.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={geserKanan}
            className="w-12 h-12 rounded-full bg-black/30 border border-white/50 text-white flex items-center justify-center hover:bg-white/30 backdrop-blur-md transition"
          >
            ❯
          </button>
        </div>
      </section>

      {/* SECTION 2 - CURATED FOR YOU */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-[#f9fafb]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b pb-4">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Curated For You</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Pilihan Kami Untukmu</h2>
          </div>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black mt-4 md:mt-0 flex items-center gap-1">
            View all <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "/ubud.webp", tag: "Luxury", tagColor: "text-gray-400 bg-gray-200", judul: "Ubud Luxury Retreat", desc: "Nikmati ketenangan Ubud dengan vila eksklusif, spa tradisional Bali, dan pemandangan sawah terasering yang menenangkan jiwa." },
            { img: "/pulau komodo.webp", tag: "Adventure", tagColor: "text-pink-500 bg-pink-100", judul: "Komodo Island Adventure", desc: "Jelajahi Pulau Komodo, trekking ke puncak Padar, dan nikmati keindahan laut Flores dalam petualangan yang tak terlupakan." },
            { img: "/candi borobudur.webp", tag: "Cultural", tagColor: "text-amber-600 bg-amber-100", judul: "Heritage of Borobudur", desc: "Temukan kisah peradaban kuno melalui kemegahan Candi Borobudur, mahakarya budaya Indonesia yang mendunia." },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="w-full h-56 md:h-64 overflow-hidden rounded-xl mb-5 shadow-sm">
                <img src={item.img} alt={item.judul} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider ${item.tagColor}`}>{item.tag}</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-3 font-serif">{item.judul}</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

   {/* SECTION 3 - NUSANTARA HORIZON */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Nusantara Horizon</h2>
      <p className="text-gray-500 text-sm mt-3">Sebuah perjalanan visual melalui pemandangan-pemandangan paling menakjubkan di kepulauan ini.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px]"> {/* ✅ tinggi fixed */}
      
      {/* Kiri - Gambar Besar */}
      <Link href="/destinasi/bromo" className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md h-full block">
        <img src="/gunung bomo.webp" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Mount Bromo"
          onError={(e) => { e.target.src = "/danau toba.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-xs uppercase tracking-[0.2em] mb-1 opacity-80">Jawa Timur</p>
          <h3 className="text-3xl font-serif font-bold">Gunung Bromo</h3>
        </div>
      </Link>

      {/* Kanan - 4 Gambar Kecil */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
        {[
          { nama: "Ubud, Bali", img: "/ubud.webp", href: "/destinasi/ubud" },
          { nama: "Raja Ampat", img: "/raja ampat.webp", href: "/destinasi/raja-ampat" },
          { nama: "Komodo", img: "/pulau komodo.webp", href: "/destinasi/komodo" },
          { nama: "Danau Toba", img: "/danau toba.webp", href: "/destinasi/danau-toba" },
        ].map((item, i) => (
          <Link key={i} href={item.href} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md block">
            <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={item.nama} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold font-serif">{item.nama}</h3>
            </div>
          </Link>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* SECTION 4 - TOP DESTINATIONS */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Top Destinations</h2>
          <p className="text-gray-500 text-sm mb-12">Explore our highly-rated spots across the islands.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              { nama: "Labuan Bajo", loc: "Nusa Tenggara Timur", img: "/labuan bajo.webp", rate: "4.7" },
              { nama: "Seminyak", loc: "Bali", img: "/ubud.webp", rate: "4.8" },
              { nama: "Candi Borobudur", loc: "Magelang, Jawa Tengah", img: "/candi borobudur.webp", rate: "4.7" },
              { nama: "Danau Toba", loc: "Sumatera Utara", img: "/danau toba.webp", rate: "4.7" },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-full h-40 md:h-56 overflow-hidden rounded-xl mb-3 shadow-sm">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={item.nama} onError={(e) => { e.target.src = "/labuan bajo.webp"; }} />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-900 font-serif text-[15px]">{item.nama}</h3>
                  <span className="text-xs font-bold text-gray-600 flex items-center gap-1">⭐ {item.rate}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">📍 {item.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2e3c] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-bold mb-4">Pesona<br />Indonesia</h2>
            <p className="text-sm text-gray-400">© 2024 Pesona Indonesia. Discover the Magic of the Archipelago.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">All Destinations</a></li>
              <li><a href="#" className="hover:text-white transition">Travel Guides</a></li>
              <li><a href="#" className="hover:text-white transition">Sustainable Travel</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}