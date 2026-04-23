
// // Here is event card component

// import { CalendarDays, Clock3, Ticket } from "lucide-react";

// type Event = {
//   title: string;
//   date: string;
//   time: string;
//   price: string;
//   cta: string;
//   description: string;
//   artist: string;
//   image: string;
// };

// export function EventCard({ event }: { event: Event }) {
//   return (
//     <article className="glass-card flex h-full flex-col">
//       <div className="">
//         <img src={event.image} alt={event.title} className="h-48 w-full object-cover rounded-t-xl" />
//       </div>
//       <h3 className="mt-2 text-xl font-black bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent px-3">{event.title}</h3>
//       <div className="mt-3 flex flex-wrap gap-4 text-sm text-sky-300/95 px-3">
//         <span className="inline-flex items-center gap-2">
//           <CalendarDays size={16} /> {event.date}
//         </span>
//         <span className="inline-flex items-center gap-2">
//           <Clock3 size={15} /> {event.time}
//         </span>
//         <span className="inline-flex items-center gap-2">
//           <Ticket size={15} /> {event.price}
//         </span>
//       </div>
//       <p className="mt-3 text-base leading-7 text-white/40 px-3">{event.description}</p>
//       {/* <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-plum">{event.artist}</p> */}
//       <div className="p-3">
//         <button className="pill-btn mt-1 w-fit bg-rose/50 text-white hover:bg-cocoa/50">{event.cta}</button>
//       </div>
//     </article>
//   );
// }



"use client";

import { motion } from "framer-motion";
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
    <motion.article
      className="glass-card flex h-full flex-col"
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          src={event.image}
          alt={event.title}
          className="h-48 w-full object-cover rounded-t-xl"
        />
      </motion.div>

      <motion.h3
        className="mt-2 text-xl font-black bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent px-3"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      >
        {event.title}
      </motion.h3>

      <motion.div
        className="mt-3 flex flex-wrap gap-4 text-sm text-sky-300/95 px-3"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
      >
        <span className="inline-flex items-center gap-2">
          <CalendarDays size={16} /> {event.date}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock3 size={15} /> {event.time}
        </span>
        <span className="inline-flex items-center gap-2">
          <Ticket size={15} /> {event.price}
        </span>
      </motion.div>

      <motion.p
        className="mt-3 text-base leading-7 text-white/40 px-3"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
      >
        {event.description}
      </motion.p>

      <motion.div
        className="p-3"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
      >
        <button className="pill-btn mt-1 w-fit bg-rose/50 text-white hover:bg-cocoa/50">
          {event.cta}
        </button>
      </motion.div>
    </motion.article>
  );
}
