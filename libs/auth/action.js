"use server";

import db from "@/libs/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function authenticate(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return "Username tidak ditemukan";
    }

    const user = rows[0];
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return "Password salah";
    }

  } catch (err) {
    if (err.message === "NEXT_REDIRECT") throw err;
    console.error("ERROR AUTHENTICATE:", err.message);
    return "Terjadi kesalahan server";
  }

 redirect("/");
}

export async function register(formData) {
  const name = formData.get("name");
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    if (!name || !username || !password) {
      return "Semua field harus diisi";
    }

    const [existing] = await db.query(
      "SELECT id FROM users WHERE username = ?",
      [username]
    );

    if (existing.length > 0) {
      return "Username sudah dipakai";
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (name, username, password) VALUES (?, ?, ?)",
      [name, username, hashedPassword]
    );
  } catch (err) {
    if (err.message === "NEXT_REDIRECT") throw err;
    console.error("ERROR REGISTER:", err.message);
    return "Terjadi kesalahan server";
  }

  redirect("/login");
}
