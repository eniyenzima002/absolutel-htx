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

      <section className="container-shell py-10 sm:py-16">
        <div className="text-center">
          {/* <p className="text-lg font-bold uppercase tracking-[0.34em] text-amber-300">Upcoming Shows</p> */}
          <h2 className="section-heading mt-4 ">Nights worth stepping out for</h2>
          <p className="section-copy">
            A front page that feels personal, polished, and ready to convert visitors into guests.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="container-shell py-10 sm:py-16">
        <div className="glass-card overflow-hidden p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.34em] text-plum">Featured Artists</p>
              <h2 className="section-heading mt-4 text-cocoa">A venue that feels like community</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-cocoa/80 sm:text-lg">
                Use this section to spotlight local voices, recurring hosts, and artists people will want to follow.
                It makes the venue feel alive before anyone even arrives.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/artists" className="pill-btn bg-cocoa text-butter hover:bg-plum">
                  See Artists
                </Link>
                <Link href="/submit" className="pill-btn border border-cocoa/15 bg-white/60 text-cocoa hover:bg-white">
                  Request To Perform
                </Link>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {artists.slice(0, 2).map((artist) => (
                <ArtistCard key={artist.name} artist={artist} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-16">
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
      </section>
    </main>
  );
}
