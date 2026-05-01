/*
import React from "react";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { ArtistCard } from "@/components/ArtistCard";
import { events, artists } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="py-10 sm:py-16 bg-gradient-to-r from-black/80 via-black to-black/80">
        <div className="container-shell">
          <div className="">
            <h1 className="section-heading uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent">
              Upcoming Shows</h1>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gradient-to-r from-black/90 via-indigo-950 to-black/90">
        <div className="container-shell">
          <div className="mb-12">
            <p className="section-heading uppercase bg-gradient-to-r from-red-400 via-teal-400 to-pink-600 bg-clip-text text-transparent">
              Featured Artists</p>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 ">
            {artists.slice(0, 3).map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
*/

import React from "react";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { ArtistCard } from "@/components/ArtistCard";

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
  genre: string;
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

  return (
    <main>
      <Hero />

      <section className="py-10 sm:py-16 bg-gradient-to-r from-black/80 via-black to-black/80">
        <div className="container-shell">
          <div className="">
            <h1 className="section-heading uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent">
              Upcoming Shows
            </h1>
          </div>

          {events.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-white/10 bg-black/60 p-10 text-center">
              <h2 className="text-2xl font-black text-butter">No Current Upcoming Events</h2>
              <p className="mt-3 text-white/50">
                Check back soon for new Absolutely HTX shows.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {events.slice(0, 3).map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gradient-to-r from-black/90 via-indigo-950 to-black/90">
        <div className="container-shell">
          <div className="mb-12">
            <p className="section-heading uppercase bg-gradient-to-r from-red-400 via-teal-400 to-pink-600 bg-clip-text text-transparent">
              Featured Artists
            </p>
          </div>

          {artists.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-white/10 bg-black/60 p-10 text-center">
              <h2 className="text-2xl font-black text-butter">No Current featured artists</h2>
              <p className="mt-3 text-white/50">
                Check back soon for featured Absolutely HTX artists.
              </p>
            </div>
          ): (
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
              {artists.slice(0, 3).map((artist) => (
                <ArtistCard key={artist._id} artist={artist} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


