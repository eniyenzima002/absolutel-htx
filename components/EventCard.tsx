import { CalendarDays, Clock3, Ticket } from "lucide-react";

type Event = {
  title: string;
  date: string;
  time: string;
  price: string;
  cta: string;
  description: string;
  artist: string;
  image: string;
};

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="glass-card flex h-full flex-col">
      <div className="">
        <img src={event.image} alt={event.title} className="h-48 w-full object-cover rounded-t-xl" />
      </div>
      <h3 className="mt-2 text-2xl font-black text-cocoa px-3">{event.title}</h3>
      <div className="mt-3 flex flex-wrap gap-4 text-sm text-cocoa/80 px-3">
        <span className="inline-flex items-center gap-2">
          <CalendarDays size={16} /> {event.date}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock3 size={15} /> {event.time}
        </span>
        <span className="inline-flex items-center gap-2">
          <Ticket size={15} /> {event.price}
        </span>
      </div>
      <p className="mt-3 text-base leading-7 text-cocoa/80 px-3">{event.description}</p>
      {/* <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-plum">{event.artist}</p> */}
      <div className="p-3">
        <button className="pill-btn mt-1 w-fit bg-rose text-white hover:bg-cocoa">{event.cta}</button>
      </div>
    </article>
  );
}
