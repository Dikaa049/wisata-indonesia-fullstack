"use client";

import { useState } from "react";
import { register } from "@/libs/auth/action";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
  const [error, setError] = useState("");

  const clientAction = async (formData) => {
    const result = await register(formData); // ✅ registerUser → register

    if (result) {
      setError(result);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 bg-gray-50">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Sign Up
          </h2>

          <form action={clientAction} className="flex flex-col gap-5">

            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              required
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="w-full border p-3 rounded"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full border p-3 rounded"
            />

            {error && (
              <p className="text-red-500">
                {error}
              </p>
            )}

            <SubmitButton text="Sign Up" />
          </form>

          <p className="mt-5 text-center">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="text-blue-600"
            >
              LOGIN DI SINI
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
        {/* ✅ <img> → <Image> dari next/image */}
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
      className="bg-black text-white p-3 rounded"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}