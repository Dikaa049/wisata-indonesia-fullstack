"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function PengalamanPage() {
  const videoPlaylist = [
    "/gunung bromo.mp4",
    "/Taman Nasional Gunung Leuser - Banda Aceh.mp4",
    "/Ngarai Sianok-Sumatera Barat.mp4",
    "/danau toba.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const videoRef = useRef(null);

  const [namaForm, setNamaForm] = useState("");
  const [asalForm, setAsalForm] = useState("");
  const [destinasiForm, setDestinasiForm] = useState("");
  const [ratingForm, setRatingForm] = useState(0);
  const [hoverRatingForm, setHoverRatingForm] = useState(0);
  const [komentarForm, setKomentarForm] = useState("");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Autoplay dicegah oleh browser:", err);
      });
    }
  }, [currentVideoIndex]);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoPlaylist.length - 1 ? 0 : prevIndex + 1
    );
  };

  const destinations = [
    { id: 1, name: "Raja Ampat", rating: "4.9", location: "Papua Barat Daya", img: "/raja ampat.webp", href: "/destinasi/raja-ampat" },
    { id: 2, name: "Pulau Komodo & Pulau Padar", rating: "4.8", location: "Nusa Tenggara Timur", img: "/pulau komodo.webp", href: "/destinasi/komodo" },
    { id: 3, name: "Candi Borobudur", rating: "4.7", location: "Magelang, Jawa Tengah", img: "/candi borobudur.webp", href: "/destinasi/borobudur" },
    { id: 4, name: "Ubud & Kuta", rating: "4.8", location: "Bali", img: "/ubud.webp", href: "/destinasi/ubud" },
    { id: 5, name: "Danau Toba", rating: "4.7", location: "Sumatera Utara", img: "/danau toba.webp", href: "/destinasi/danau-toba" },
    { id: 6, name: "Gunung Bromo", rating: "4.8", location: "Jawa Timur", img: "/gunung bromo.webp", href: "/destinasi/bromo" },
    { id: 7, name: "Kepulauan Derawan", rating: "4.8", location: "Kalimantan Timur", img: "/kepulauan derawan.webp", href: "/destinasi/derawan" },
    { id: 8, name: "Labuan Bajo", rating: "4.7", location: "Nusa Tenggara Timur", img: "/labuan bajo.webp", href: "/destinasi/labuan-bajo" },
    { id: 9, name: "Nusa Penida", rating: "4.8", location: "Bali", img: "/nusa penida.webp", href: "/destinasi/nusa-penida" },
    { id: 10, name: "Dataran Tinggi Dieng", rating: "4.7", location: "Jawa Tengah", img: "/dataran tinggi dieng.webp", href: "/destinasi/dieng" },
    { id: 11, name: "Taman Nasional Bunaken", rating: "4.7", location: "Sulawesi Utara", img: "/taman nasional bunaken.webp", href: "/destinasi/bunaken" },
    { id: 12, name: "Kawah Ijen", rating: "4.8", location: "Banyuwangi, Jawa Timur", img: "/kawah ijen.webp", href: "/destinasi/kawah-ijen" },
    { id: 13, name: "Desa Wisata Penglipuran", rating: "4.8", location: "Bali", img: "/desa penglipuran.webp", href: "/destinasi/penglipuran" },
  ];

  const informations = [
    { id: 1, name: "Berita Terbaru Indonesia", img: "/raja ampat.webp", link: "https://www.indonesia.travel/id/id/travel-ideas/" },
    { id: 2, name: "Informasi Umum", img: "/foto orang liat map.jpg", link: "https://www.indonesia.travel/id/id/general-information/" },
    { id: 3, name: "Buku & Brosur Elektronik", img: "/buku dan brouser.jpg", link: "https://www.indonesia.travel/id/id/inspiration/" },
    { id: 4, name: "Peraturan Bali", img: "/budaya bali.jpg", link: "https://www.indonesia.travel/id/id/travel-ideas/adventure/bali-vacation-in-mind-get-informed-of-the-latest-regulations/" },
    { id: 5, name: "Panduan Brand", img: "/panduan brand.jpg", link: "https://www.indonesia.travel/id/id/brand-guidelines/" },
    { id: 6, name: "Kesempatan Kemitraan", img: "/gunung bromo.webp", link: "https://www.indonesia.travel/id/id/partnership-opportunity/" },
    { id: 7, name: "Informasi Terkini", img: "/kepulauan derawan.webp", link: "https://www.indonesia.travel/id/id/crisis-management/" },
  ];

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Siti Nur Aisyah",
      origin: "Surabaya",
      flag: "🇮🇩",
      role: "Wisatawan Domestik",
      rating: 5,
      destinasi: "Raja Ampat",
      text: '"Memenangkan kompetisi keindahan alam madani Indonesia! Situs ini memberikan panduan wisata yang sangat detail, mempermudah liburan keluarga kami saat menjelajahi wilayah Nusantara."',
      waktu: "2 hari yang lalu",
    },
    {
      id: 2,
      name: "John Smith",
      origin: "London",
      flag: "🇬🇧",
      role: "International Traveler",
      rating: 5,
      destinasi: "Candi Borobudur",
      text: '"I love the rich cultural insights and standardized navigation links. It makes booking local custom guides and understanding regulations completely stress-free!"',
      waktu: "5 hari yang lalu",
    },
    {
      id: 3,
      name: "Jean Dupont",
      origin: "Paris",
      flag: "🇫🇷",
      role: "International Traveler",
      rating: 5,
      destinasi: "Danau Toba",
      text: '"There is an instant trust built when using this platform. Seamless connection to the official destination resources and incredible transparency of information."',
      waktu: "1 minggu yang lalu",
    },
  ]);

  const kirimKomentar = (e) => {
    e.preventDefault();
    if (ratingForm === 0) { alert("Mohon berikan rating bintang!"); return; }

    const baru = {
      id: Date.now(),
      name: namaForm,
      origin: asalForm,
      flag: "🇮🇩",
      role: "Pengunjung",
      rating: ratingForm,
      destinasi: destinasiForm,
      text: `"${komentarForm}"`,
      waktu: "Baru saja",
    };

    setReviews([baru, ...reviews]);
    setNamaForm("");
    setAsalForm("");
    setDestinasiForm("");
    setRatingForm(0);
    setKomentarForm("");
  };

  return (
    <div className="bg-[#fcfbf7] min-h-screen text-[#0f2a3a] font-sans relative">

      <header className="absolute top-0 w-full px-6 py-8 flex flex-col md:flex-row justify-between items-center z-20 text-white bg-transparent">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/logo.png"
            alt="Logo Wisata Indonesia"
            className="w-12 h-12 object-contain drop-shadow-lg"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <div className="leading-tight drop-shadow-md">
            <h1 className="text-xl font-serif font-bold tracking-wide">wisata</h1>
            <h1 className="text-xl font-serif font-bold tracking-wide">indonesia</h1>
          </div>
        </Link>
        <nav className="hidden lg:flex gap-10 text-[15px] font-medium drop-shadow-md tracking-wide mt-4 md:mt-0">
          <Link href="/" className="hover:text-gray-300 transition">Destinasi</Link>
          <Link href="/pengalaman" className="text-amber-400 font-semibold tracking-wide">Pengalaman</Link>
          <Link href="/login" className="hover:text-gray-300 transition">Login Admin</Link>
        </nav>
      </header>

      <section className="relative h-[650px] w-full overflow-hidden bg-gray-900 flex flex-col justify-center items-center text-white px-4">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src={videoPlaylist[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            onError={() => handleVideoEnded()}
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mt-20">
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-4 drop-shadow-lg">
            Layanan Pilihan
          </h1>
          <p className="text-center text-sm md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Segala yang Anda butuhkan untuk perjalanan mempesona melalui kepulauan ini,
            mulai dari kearifan lokal hingga mobilitas mewah.
          </p>
        </div>

        <div className="absolute bottom-6 z-10 flex gap-2">
          {videoPlaylist.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentVideoIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentVideoIndex ? "bg-white w-6" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

        <section className="lg:col-span-7">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2a3a] mb-1">Top Destinations</h2>
            <p className="text-sm text-gray-400">Explore our highly-rated spots across the islands.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {destinations.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition duration-300 group"
              >
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500";
                    }}
                  />
                </div>
                <div className="pt-4 pb-2 px-1 flex flex-col flex-grow">
                  <div className="flex justify-between items-center gap-2 mb-1">
                    <h3 className="text-[15px] font-medium text-gray-900 leading-snug">{item.name}</h3>
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
              </Link>
            ))}
          </div>
        </section>

        <div className="lg:col-span-5 flex flex-col gap-12">

          <section>
            <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-1">Informasi Perjalanan</p>
            <h2 className="text-3xl font-serif mb-6">Wawasan Penting</h2>

            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-48 relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/candi borobudur.webp')" }} />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif mb-2">The Art of Adat</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    Indonesia memiliki ratusan suku dan tradisi yang beragam. Wisatawan dianjurkan
                    menghormati adat setempat, berpakaian sopan saat mengunjungi tempat ibadah,
                    serta menjaga etika saat berinteraksi dengan masyarakat. Memahami budaya lokal
                    akan membuat perjalanan lebih berkesan.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">Etiquette</span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">Culture</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-gray-400">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M8 13.5a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M8 13.5v-8.5a4 4 0 1 1 8 0v8.5" />
                    <path d="M9 6l6 0" />
                  </svg>
                  <h4 className="font-serif text-base mb-1">Panduan Iklim</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    Indonesia memiliki iklim tropis dengan dua musim utama, yaitu musim kemarau
                    (Mei–September) dan musim hujan (Oktober–April). Musim kemarau cocok untuk
                    wisata alam dan pantai.
                  </p>
                </div>

                <div className="bg-[#0b3546] text-white p-5 rounded-xl shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-gray-300">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                    <path d="M3 10l18 0" />
                    <path d="M7 15l.01 0" />
                    <path d="M11 15l2 0" />
                  </svg>
                  <h4 className="font-serif text-base mb-1">Mata Uang & Konektivitas</h4>
                  <p className="text-gray-300 text-[11px] leading-relaxed">
                    Mata uang resmi Indonesia adalah Rupiah (IDR). QRIS, kartu debit, dan dompet
                    digital tersedia di kota besar. Jaringan 4G/5G tersedia di banyak wilayah perkotaan.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {showInfo && (
            <section>
              <div className="flex justify-between items-center mb-6 border-b pb-3">
                <h2 className="text-2xl font-serif">Informasi</h2>
                <button
                  onClick={() => setShowInfo(false)}
                  className="text-gray-400 hover:text-gray-700 text-lg transition"
                >✕</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {informations.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-md cursor-pointer block"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                    <div className="absolute bottom-3 left-3 right-3 z-10 text-white flex items-center justify-between gap-1">
                      <h3 className="text-xs md:text-sm font-medium leading-tight">{item.name}</h3>
                      <span className="text-xs text-gray-300 group-hover:text-white shrink-0">↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-2">Komunitas Wisatawan</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f2a3a]">Ulasan & Pengalaman</h2>
          <p className="text-sm text-gray-400 mt-2">Ceritakan pengalamanmu berwisata di Indonesia</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-fit">
            <h3 className="text-2xl font-serif font-bold mb-1 text-[#0f2a3a]">Tulis Ulasan</h3>
            <p className="text-sm text-gray-400 mb-6">Bagikan pengalamanmu ke wisatawan lain</p>

            <form onSubmit={kirimKomentar} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nama</label>
                  <input
                    type="text"
                    value={namaForm}
                    onChange={(e) => setNamaForm(e.target.value)}
                    placeholder="Nama kamu"
                    required
                    className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Asal Kota</label>
                  <input
                    type="text"
                    value={asalForm}
                    onChange={(e) => setAsalForm(e.target.value)}
                    placeholder="Kota asal"
                    required
                    className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Destinasi</label>
                <select
                  value={destinasiForm}
                  onChange={(e) => setDestinasiForm(e.target.value)}
                  required
                  className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                >
                  <option value="">Pilih destinasi...</option>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Rating</label>
                <div className="flex gap-1 text-3xl">
                  {[1,2,3,4,5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`transition duration-150 ${star <= (hoverRatingForm || ratingForm) ? "text-yellow-400" : "text-gray-200"}`}
                      onClick={() => setRatingForm(star)}
                      onMouseEnter={() => setHoverRatingForm(star)}
                      onMouseLeave={() => setHoverRatingForm(0)}
                    >★</button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {ratingForm === 0 ? "Pilih bintang" : `${ratingForm} bintang`}
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Komentar</label>
                <textarea
                  value={komentarForm}
                  onChange={(e) => setKomentarForm(e.target.value)}
                  placeholder="Ceritakan pengalamanmu berwisata..."
                  rows="4"
                  required
                  className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0f2e3c] hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition text-sm tracking-wide"
              >
                Kirim Ulasan →
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-serif font-bold text-[#0f2a3a]">
                Semua Ulasan
                <span className="text-gray-400 text-lg ml-2">({reviews.length})</span>
              </h3>
            </div>

            <div className="flex flex-col gap-4 max-h-[700px] overflow-y-auto pr-1">
              {reviews.map((rev) => (
                <div key={rev.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {rev.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-gray-900">
                          {rev.name} <span className="text-xs">{rev.flag}</span>
                        </h4>
                        <div className="flex text-yellow-400 text-xs">
                          {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                        </div>
                      </div>
                      <p className="text-[11px] text-gray-400">{rev.origin} · {rev.role}</p>
                    </div>
                  </div>
                  {rev.destinasi && (
                    <p className="text-[11px] text-teal-600 font-semibold mb-2 flex items-center gap-1">
                      📍 {rev.destinasi}
                    </p>
                  )}
                  <p className="text-gray-600 text-xs italic leading-relaxed">{rev.text}</p>
                  <p className="text-[10px] text-gray-300 mt-3">{rev.waktu}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section
        className="py-16 px-6 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/kepulauan derawan.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-white mb-2 drop-shadow-md">
              Tanggapan Wisatawan
            </h2>
            <p className="text-sm text-gray-200 drop-shadow-sm">Ulasan dari Dalam dan Luar Negeri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((rev) => (
              <div key={rev.id} className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                        {rev.name} ({rev.origin}) <span>{rev.flag}</span>
                      </h4>
                      <p className="text-[11px] text-gray-400 font-medium">{rev.role}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400 text-xs mb-3">
                    {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                  </div>
                  <p className="text-gray-600 text-xs italic leading-relaxed mb-4">{rev.text}</p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md tracking-wider">
                    WisataReview
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}