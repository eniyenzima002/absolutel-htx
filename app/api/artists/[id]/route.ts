import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Artist } from "@/models/Artist";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await connectDB();

  const artist = await Artist.findById(id);

  if (!artist) {
    return NextResponse.json({ error: "Artist not found" }, { status: 404 });
  }

  return NextResponse.json(artist);
}

