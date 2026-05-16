import React from "react";
import { Hero } from "@/components/Hero";
import { HomeSections } from "@/components/HomeSections";

type Event = {
  _id: string;
  title: string;
  date: string;
  time: string;
  price: string;
  cta: string;
  description: string;
  artist: string;
  image: string;
  ticketUrl: string;
};

type Artist = {
  _id: string;
  name: string;
  bio: string;
  image: string;
};

async function getEvents(): Promise<Event[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/events`, {
    cache: "no-store",
  });

  if (!res.ok) return [];
  return res.json();
}

async function getArtists(): Promise<Artist[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/artists`, {
    cache: "no-store",
  });

  if (!res.ok) return [];
  return res.json();
}

export default async function HomePage() {
  const [events, artists] = await Promise.all([getEvents(), getArtists()]);
  const nextEvent = events[0];

  return (
    <main>
      <Hero nextEvent={nextEvent} />
      <HomeSections events={events} artists={artists} />
    </main>
  );
}


