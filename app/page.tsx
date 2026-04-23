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
              <Link href="/submit" className="pill-btn border border-amber-500/15 bg-amber-700/90 text-white hover:bg-amber-800/90">
                Submit a Request
              </Link>
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

      {/* <section className="container-shell py-10 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.34em] text-plum">Submission Form</p>
            <h3 className="mt-4 text-3xl font-black text-cocoa">Want to perform?</h3>
            <p className="mt-4 text-base leading-7 text-cocoa/80">
              Invite singers, poets, comedians, and musicians to apply through a warm, clear submission flow.
            </p>
            <ul className="mt-6 space-y-3 text-cocoa/85">
              <li>Name and stage name</li>
              <li>Performance type and links</li>
              <li>Short artist bio</li>
              <li>Availability and contact details</li>
            </ul>
            <Link href="/submit" className="pill-btn mt-8 bg-rose text-white hover:bg-cocoa">
              Open Submission Page
            </Link>
          </div>

          <div className="glass-card p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.34em] text-plum">Contact</p>
            <h3 className="mt-4 text-3xl font-black text-cocoa">Keep booking and questions easy</h3>
            <p className="mt-4 text-base leading-7 text-cocoa/80">
              Let brands, artists, and attendees reach out quickly for venue inquiries, private events, and partnerships.
            </p>
            <div className="mt-8 space-y-4 text-cocoa/85">
              <p><span className="font-semibold">Email:</span> {site.email}</p>
              <p><span className="font-semibold">Instagram:</span> {site.instagram}</p>
              <p><span className="font-semibold">Based in:</span> {site.location}</p>
            </div>
            <Link href="/contact" className="pill-btn mt-8 border border-cocoa/15 bg-white/60 text-cocoa hover:bg-white">
              Open Contact Page
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}
