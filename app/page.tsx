import React from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { ArtistCard } from "@/components/ArtistCard";
import { events, artists, site } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="py-10 sm:py-16 bg-gradient-to-r from-black/80 via-black to-black/80">
        <div className="container-shell">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <h1 className="section-heading uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent">
              Upcoming Shows</h1>
            <div>
              {/* <Link href="/submit" className="pill-btn border border-amber-500/15 bg-amber-700/90 text-white hover:bg-amber-800/90">
                Submit a Request
              </Link> */}
            </div>
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
