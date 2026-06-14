"use client";

import React, { useState, useRef } from "react";
import Link from "next/link"; 

export default function PengalamanPage() {
  const videoPlaylist = [
    "/gunung bromo.mp4",
    "/Taman Nasional Gunung Leuser - Banda Aceh.mp4",
    "/Ngarai Sianok – Sumatera Barat.mp4",
    "/danau toba.mp4",
  ];

  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);


  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => {
      if (prevIndex === videoPlaylist.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  
  const destinations = [
    {
      id: 1,
      name: "Raja Ampat",
      rating: "4.9",
      location: "Papua barat daya",
      img: "/raja ampat.webp",
    },
    {
      id: 2,
      name: "Pulau Komodo & Pulau Padar",
      rating: "4.8",
      location: "Nusa Tenggara Timur",
      img: "/pulau komodo.webp",
    },
    {
      id: 3,
      name: "Candi Borobudur",
      rating: "4.7",
      location: "Magelang, Jawa Tengah",
      img: "/candi borobudur.webp",
    },
    {
      id: 4,
      name: "Ubud & Kuta",
      rating: "4.8",
      location: "Bali",
      img: "/ubud.webp",
    },
    {
      id: 5,
      name: "Danau Toba",
      rating: "4.7",
      location: "Sumatera Utara",
      img: "/danau toba.webp",
    },
    {
      id: 6,
      name: "Gunung Bromo",
      rating: "4.8",
      location: "jawa timur",
      img: "/gunung bomo.webp",
    },
    {
      id: 7,
      name: "Kepulauan Derawan",
      rating: "4.8",
      location: "Kalimantan Timur",
      img: "/kepulauan derawan.webp",
    },
    {
      id: 8,
      name: "Labuan Bajo ",
      rating: "4.7",
      location: "Nusa Tenggara Timur",
      img: "/labuan bajjo.webp",
    },
    {
      id: 9,
      name: "Nusa Penida",
      rating: "4.8",
      location: "Bali",
      img: "/nusa panida.webp",
    },
    {
      id: 10,
      name: "Dataran Tinggi Dieng",
      rating: "4.7",
      location: "Jawa Tengah",
      img: "/dataran tinggi dieng.webp",
    },
    {
      id: 11,
      name: "Taman Nasional Bunaken",
      rating: "4.7",
      location: "Sulawesi Utara",
      img: "/taman nasional bunaken.webp",
    },
    {
      id: 12,
      name: "Kawah Ijen",
      rating: "4.8",
      location: " Banyuwangi, Jawa Timur",
      img: "/kawah ijen.webp",
    },
    {
      id: 13,
      name: "Desa Wisata Penglipuran",
      rating: "4.8",
      location: "Bali",
      img: "/desa palipuran.webp",
    },
  ];

 
  const reviews = [
    {
      id: 1,
      name: "Isabella Chen",
      country: "Singapore",
      rating: 5,
      text: '"The services and information provided made navigating my visit to the traditional villages seamless and filled with beautiful custom insights..."',
    },
    {
      id: 2,
      name: "Marcus Thorne",
      country: "United Kingdom",
      rating: 5,
      text: '"An absolute masterpiece of travel coordination. High-quality services and an extremely professional team behind this platform..."',
    },
    {
      id: 3,
      name: "David Kim",
      country: "South Korea",
      rating: 5,
      text: '"The culture and connectivity insights helped me explore the local destinations with absolute confidence and joy..."',
    },
  ];

  return (
    <div className="bg-[#fcfbf7] min-h-screen text-[#0f2a3a] font-sans relative">
      {/* ==================== BANNER NAVBAR UTAMA (PERUBAHAN DI SINI) ==================== */}
      <header className="absolute top-0 w-full px-6 py-8 flex flex-col md:flex-row justify-between items-center z-20 text-white bg-transparent">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          {}
          <img
            src="/logo.png" // <-- Sesuaikan jika nama file di folder public kamu berbeda (misal: /logo.png)
            alt="Logo Wisata Indonesia"
            className="w-12 h-12 object-contain drop-shadow-lg"
            onError={(e) => {
              // Jika file logo tidak ditemukan, otomatis memunculkan emoji burung cadangan agar tidak pecah kosong
              e.target.style.display = "none";
              if (e.target.nextSibling)
                e.target.nextSibling.style.display = "block";
            }}
          />
          {/* Emoji burung cadangan */}
          <span className="text-4xl drop-shadow-lg hidden">🕊️</span>

          <div className="leading-tight drop-shadow-md">
            {/* Mengganti teks menjadi Wisata Indonesia */}
            <h1 className="text-xl font-serif font-bold tracking-wide">
              wisata
            </h1>
            <h1 className="text-xl font-serif font-bold tracking-wide">
              indonesia
            </h1>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-10 text-[15px] font-medium drop-shadow-md tracking-wide mt-4 md:mt-0">
          <Link href="/" className="hover:text-gray-300 transition">
            Destinasi
          </Link>
          <Link
            href="/pengalaman"
            className="text-amber-400 font-semibold tracking-wide"
          >
            Pengalaman
          </Link>
          <Link href="#" className="hover:text-gray-300 transition">
            Login Admin
          </Link>
        </nav>
      </header>

      {/* ==================== 1. HERO BANNER ==================== */}
      <section className="relative h-[650px] w-full overflow-hidden bg-gray-900 flex flex-col justify-center items-center text-white px-4">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover opacity-75"
          >
            <source src={videoPlaylist[currentVideoIndex]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-2xl mt-20">
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-4 drop-shadow-lg">
            Layanan Pilihan
          </h1>
          <p className="text-center text-sm md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Segala yang Anda butuhkan untuk perjalanan mempesona melalui
            kepulauan ini, mulai dari kearifan lokal hingga mobilitas mewah.
          </p>
        </div>
      </section>

      {/* ==================== 2. ESSENTIAL INSIGHTS ==================== */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-1">
          INFORMASI PERJALANAN
        </p>
        <h2 className="text-3xl font-serif mb-8">Wawasan Penting</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-64 bg-amber-100 relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/borobudur.webp')" }}
              ></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif mb-2">
                The Art of Adat (Local Customs)
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Navigating Indonesia requires more than a map; it requires an
                understanding of 'Adat'. From the sacred silence of Nyepi to the
                communal 'Gotong Royong' spirit, learn how to respect local
                traditions...
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                  Etiquette
                </span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                  Culture
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1">
              <span className="text-2xl mb-2 block">🌡️</span>
              <h4 className="font-serif text-lg mb-2">Panduan Iklim</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Merencanakan perjalanan di tengah musim hujan? Musim kemarau
                kami (Mei - September) sangat cocok...
              </p>
            </div>
            <div className="bg-[#0b3546] text-white p-6 rounded-xl shadow-sm flex-1">
              <span className="text-2xl mb-2 block">💵</span>
              <h4 className="font-serif text-lg mb-2">
                Mata Uang & Konektivitas
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                Informasi penukaran rupiah, ketersediaan jaringan 5G di kota
                besar seperti Jakarta dan Bali, serta kemudahan sistem QRIS...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. TOP DESTINATIONS SECTION ==================== */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0f2a3a] mb-2">
            Top Destinations
          </h2>
          <p className="text-sm text-gray-400">
            Explore our highly-rated spots across the islands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500";
                  }}
                />
              </div>

              <div className="pt-4 pb-2 px-1 flex flex-col flex-grow">
                <div className="flex justify-between items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-medium text-gray-900 leading-snug">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-0.5 text-gray-500 text-[11px] shrink-0">
                    <span className="text-amber-400 text-xs">⭐</span>
                    <span className="font-medium">{item.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-1">
                  <span>📍</span>
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 4. SHARED EXPERIENCES ==================== */}
      <section className="bg-[#f5f3e9] py-16 px-6 mt-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest text-center text-gray-400 uppercase font-semibold mb-1">
            Traveler Voices
          </p>
          <h2 className="text-3xl font-serif text-center mb-12">
            Shared Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
                  <div>
                    <h4 className="text-sm font-bold">{rev.name}</h4>
                    <p className="text-[11px] text-gray-400">{rev.country}</p>
                  </div>
                </div>
                <div className="flex text-amber-400 text-xs mb-3">
                  {"★".repeat(rev.rating)}
                </div>
                <p className="text-gray-600 text-xs italic leading-relaxed">
                  {rev.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
