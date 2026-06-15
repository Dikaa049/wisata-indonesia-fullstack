"use client";

import { useState } from "react";
import { authenticate } from "@/libs/auth/action";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const clientAction = async (formData) => {
    const result = await authenticate(formData);
    if (result) setError(result);
  };

  return (
    <div className="flex min-h-screen bg-white">

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-sm">

          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold">Masuk</h2>
          <p className="text-sm text-gray-500 mb-6">ke Wisata Indonesia</p>

          <form action={clientAction} className="flex flex-col gap-3">

            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <div className="text-right">
              <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                Lupa password?
              </Link>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <SubmitButton text="Masuk" />
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">atau lanjutkan dengan</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-3 w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition">
              <GoogleIcon />
              Lanjutkan dengan Google
            </button>

            <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm text-white bg-[#1877F2] hover:bg-[#1565d8] transition">
              <FacebookIcon />
              Lanjutkan dengan Facebook
            </button>

            <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm text-white bg-black hover:bg-gray-800 transition">
              <XIcon />
              Lanjutkan dengan X
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Belum punya akun?{" "}
            <Link href="/signup" className="text-blue-600 font-medium hover:underline">
              Daftar di sini
            </Link>
          </p>

        </div>
      </div>

      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/borobudur.webp"
          alt="Borobudur"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}

function SubmitButton({ text }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.05-3.71 1.05-2.86 0-5.29-1.93-6.15-4.53H2.05v2.84C3.88 20.9 7.71 23 12 23z" />
      <path fill="#FBBC05" d="M5.85 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.05A10 10 0 002 12c0 1.6.31 3.13.83 4.5l3.02-2.41z" />
      <path fill="#EA4335" d="M12 4.5c1.61 0 3.06.55 4.2 1.63l3.13-3.13C17.41 1.36 14.97 0 12 0 7.71 0 3.88 2.1 2.05 5.07l3.8 2.84C6.71 6.43 9.14 4.5 12 4.5z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.33 2 2 6.48 2 12.07c0 4.95 3.66 9.05 8.44 9.88v-6.99H8.21v-2.89h2.23V9.41c0-2.21 1.32-3.43 3.34-3.43.97 0 1.99.17 1.99.17v2.19h-1.12c-1.1 0-1.44.68-1.44 1.37v1.66h2.46l-.39 2.89h-2.07v6.99C18.34 21.12 22 17.02 22 12.07z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.42L10.59 13.41 4.29 19.71 2.87 18.29 9.17 12 2.87 5.71 4.29 4.29 10.59 10.59 16.89 4.29z" />
    </svg>
  );
}

<Image
  src="/borobudur.webp"
  alt="Borobudur"
  fill
  loading="eager"
  sizes="50vw"
  className="object-cover"
/>