/*
import { EventCard } from "@/components/EventCard";
import { events } from "@/lib/data";

export default function UpcomingShowsPage() {
  return (
    <main className="container-shell pt-36 pb-16">
      <div className="text-center bg-gradient-to-r from-black/50 via-black/90 to-black/50 p-10 rounded-xl">
        {/* <p className="text-sm font-bold uppercase tracking-[0.34em] text-amber-300">Upcoming Shows</p> 
        <h1 className="section-heading mt-4">Every show should feel like a reason to show up</h1>
        <p className="section-copy">
          This page is already designed to be deployment-ready. Replace the sample event data with your real entries.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
*/

import { EventCard } from "@/components/EventCard";

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

async function getEvents(): Promise<Event[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/events`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function UpcomingShowsPage() {
  const events = await getEvents();

  return (
    <main className="container-shell pt-36 pb-16 relative min-h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-cat.png')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      {/* <div className="text-center bg-gradient-to-r from-black/50 via-black/90 to-black/50 p-10 rounded-xl">
        <h1 className="section-heading mt-4">
          Every show should feel like a reason to show up
        </h1>
        <p className="section-copy">
          Browse upcoming Absolutely HTX shows, RSVP, or grab tickets through Ticket Tailor.
        </p>
      </div> */}

      {events.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-white/10 bg-black/60 p-10 text-center">
          <h2 className="text-2xl font-black text-butter">No upcoming events</h2>
          <p className="mt-3 text-white/50">
            Check back soon for new Absolutely HTX shows.
          </p>
        </div>
      ) : (
        <div className="mt-12 flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory">
          {events.map((event) => (
            <div
              key={event._id}
              className="min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] snap-start"
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

