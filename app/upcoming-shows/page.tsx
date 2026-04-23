import { EventCard } from "@/components/EventCard";
import { events } from "@/lib/data";

export default function UpcomingShowsPage() {
  return (
    <main className="container-shell pt-36 pb-16">
      <div className="text-center bg-gradient-to-r from-black/50 via-black/90 to-black/50 p-10 rounded-xl">
        {/* <p className="text-sm font-bold uppercase tracking-[0.34em] text-amber-300">Upcoming Shows</p> */}
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
