// app/api/events/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/auth";
import { Event } from "@/models/Event";

export async function GET() {
  await connectDB();
  // const events = await Event.find().sort({ createdAt: -1 });
  // const events = await Event.find().sort({ date: 1 });
  
  const now = new Date();
  const events = await Event.find({
    date: { $gte: now },
  }).sort({ date: 1 });
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  const admin = await verifyAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();
  const event = await Event.create(body);

  return NextResponse.json(event);
}