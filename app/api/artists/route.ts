// app/api/artists/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/auth";
import { Artist } from "@/models/Artist";

export async function GET() {
  await connectDB();
  const artists = await Artist.find().sort({ createdAt: -1 });
  return NextResponse.json(artists);
}

export async function POST(req: Request) {
  const admin = await verifyAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();
  const artist = await Artist.create(body);

  return NextResponse.json(artist);
}