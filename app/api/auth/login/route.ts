// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const validEmail = email === process.env.ADMIN_EMAIL;
  const validPassword = await bcrypt.compare(
    password,
    await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10)
  );

  if (!validEmail || !validPassword) {
    return NextResponse.json({ error: "Invalid login" }, { status: 401 });
  }

  const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  const res = NextResponse.json({ success: true });

  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}