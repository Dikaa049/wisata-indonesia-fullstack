"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DetailBromoUltimate() {
  const pathname = usePathname();
  const [deskripsi, setDeskripsi] = useState("");
  
  // Deskripsi Epic untuk Bromo
  const teksPenuh = "Saksikan kemegahan fajar yang membelah kabut di jantung Kaldera Tengger. Di sini, di mana pasir berbisik ditiup angin pegunungan, berdiri kokoh sang legenda purba, Gunung Bromo. Jelajahi hamparan lautan pasir yang mistis, daki tangga menuju kawah aktif yang menderu, dan biarkan dirimu terpaku oleh pesona matahari terbit paling ikonik di dunia. Bromo bukan sekadar gunung berapi; ia adalah altar alam semesta di mana keajaiban fajar bertemu dengan ketenangan batin yang tak terlupakan.";

  useEffect(() => {
    let index = 0;
    let interval;
    setDeskripsi("");

    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        setDeskripsi(teksPenuh.slice(0, index));
        index++;
        if (index > teksPenuh.length) {
          clearInterval(interval);
        }
      }, 30);
    }, 1500);

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
    };
  }, [pathname]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&display=swap');
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .anim-fade { animation: fadeIn 1.5s ease-out forwards; }
        .anim-up-1 { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s forwards; opacity: 0; }
        .anim-up-2 { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s forwards; opacity: 0; }
        .anim-up-3 { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.9s forwards; opacity: 0; }
        
        .cursor-blink { animation: blink 1s step-end infinite; }
        .font-epic { font-family: 'Cinzel', serif; }
      `}} />

      {/* Fix: key={pathname} agar animasi reset saat pindah page */}
      <main key={pathname} className="relative w-full h-screen overflow-hidden bg-black font-sans text-white antialiased">
        
        {/* Layer 1: BACKGROUND VIDEO (.mp4) */}
        <div className="absolute inset-0 anim-fade z-0">
          <video
            src="/gunung bromo.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient: Warna agak warm/orange sedikit di bawah agar estetik fajar dapet */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Layer 2: UI Content */}
        <div className="relative z-10 flex flex-col h-full container mx-auto px-6 md:px-10">
          
          {/* HEADER DENGAN LOGO */}
          <header className="flex justify-between items-center py-8 anim-up-1">
            <div className="flex items-center gap-4">
              <img 
                src="/logo.png" 
                alt="Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-xl" 
              />
              <span className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-white/90 drop-shadow-md font-epic">
                Wisata Indonesia
              </span>
            </div>

            <Link
              href="/"
              className="group flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase border-b border-transparent hover:border-white transition-all duration-500"
            >
              <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-2">
                ←
              </span>
              <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                Kembali
              </span>
            </Link>
          </header>

          {/* MAIN KONTEN */}
          <div className="flex-1 flex flex-col justify-center items-center text-center px-4 w-full max-w-5xl mx-auto">
            
            {/* Lokasi */}
            <div className="inline-flex items-center gap-2 mb-6 anim-up-1">
              <span className="text-rose-500 text-sm"></span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Jawa Timur, Indonesia
              </span>
            </div>

            {/* Judul: BROMO */}
            <h1 className="font-epic text-7xl sm:text-8xl md:text-[9rem] font-black leading-none uppercase tracking-widest mb-10 drop-shadow-2xl anim-up-2 text-white">
              BROMO
            </h1>

            {/* Typewriter Deskripsi */}
            <div className="w-full max-w-4xl mx-auto min-h-[140px] mb-12">
              <p className="text-white/90 text-base md:text-lg leading-relaxed font-light text-center drop-shadow-lg">
                {deskripsi}
                <span className="inline-block w-[2px] h-[1em] bg-white align-middle ml-1 cursor-blink"></span>
              </p>
            </div>

            {/* Statistik Info */}
            <div className="w-full max-w-4xl mx-auto anim-up-3">
              <div className="w-24 h-[1px] bg-white/30 mx-auto mb-8" />
              <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-center">
                {[
                  { label: "Musim Terbaik", nilai: "Mei — September" },
                  { label: "Aktivitas", nilai: "Jeep Adventure & Trekking" },
                  { label: "Suhu Udara", nilai: "5°C — 18°C" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">
                      {item.label}
                    </span>
                    <span className="font-epic text-white text-xl md:text-2xl font-medium tracking-wider drop-shadow-md">
                      {item.nilai}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
          <div className="h-12 md:h-20"></div>
        </div>
      </main>
    </>
  );
}