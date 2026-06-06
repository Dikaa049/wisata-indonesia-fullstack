"use client";

import { useState } from "react";
import { registerUser } from "@/libs/auth/action"; // Menggunakan fungsi register asli ke MySQL
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  
  const clientAction = async (formData) => {
    const result = await registerUser(formData);
    
    // Jika ada pesan error dari backend (misal: username sudah dipakai)
    if (result) {
      setError(result);
    } 
    // Catatan: Jika sukses, registerUser sudah otomatis melakukan redirect ke /login
  };

  return (
    <div className="flex min-h-screen bg-white">
      
      {/* Sisi Kiri: Form Sign Up */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 bg-gray-50">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Sign Up</h2>
          
          <form action={clientAction} className="flex flex-col gap-5">
            {/* Input Name (Sesuai dengan kolom di tabel MySQL) */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Masukkan nama lengkap" 
                required 
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            {/* Input Username (Menggantikan email agar sesuai db_wisata) */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Username / E-mail</label>
              <input 
                type="text" 
                name="username" 
                placeholder="Pilih username" 
                required 
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            {/* Input Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="Masukkan password" 
                required 
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            {/* Checkbox Terms */}
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="terms" required className="w-4 h-4 text-blue-600" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree all statements in <a href="#" className="text-blue-600 hover:underline">terms of service</a>
              </label>
            </div>

            {/* Pesan Error */}
            {error && <p className="text-red-500 text-sm italic">{error}</p>}

            {/* Tombol Submit dari Next.js */}
            <SubmitButton />
          </form>

          {/* Sisi Sosial Login (Sesuai dengan kode asli Anda) */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">Atau daftar menggunakan</p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                f
              </button>
              <button className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                G
              </button>
              <button className="bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                t
              </button>
            </div>
            
            <p className="mt-6 text-sm text-gray-600">
              Sudah punya akun?{" "}
              <Link href="/login" className="text-blue-600 hover:underline font-medium">
                LOGIN DI SINI
              </Link>
            </p>
          </div>
        </div>
      </div>

      
      <div className="hidden md:block w-1/2 relative bg-gray-900">
        <img 
          src="/borobudur.webp" 
          alt="Latar Belakang Wisata" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none p-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
            PESONA ALAM
          </h1>
          <p className="text-xl font-medium drop-shadow-md">
            Gabung sekarang dan kelola destinasi wisata terbaik di Nusantara.
          </p>
        </div>
      </div>

    </div>
  );
}


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 font-medium mt-4 shadow-lg"
    >
      {pending ? "Mendaftarkan..." : "Sign Up"}
    </button>
  );
}