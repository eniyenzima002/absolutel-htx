"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const gallery = [
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
];

export function HomeSections({
  events,
  artists,
}: {
  events: Event[];
  artists: Artist[];
}) {
  const [visibleEvents, setVisibleEvents] = useState(3);
  const [visibleArtists, setVisibleArtists] = useState(3);
  const [visibleGallery, setVisibleGallery] = useState(6);

  return (
    <>
      <motion.section
        id="events"
        className="py-10 sm:py-16 bg-gradient-to-r from-black/80 via-black to-black/80 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container-shell">
          <h1 className="section-heading uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent">
            Upcoming Shows
          </h1>

          {events.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-white/10 bg-black/60 p-10 text-center">
              <h2 className="text-2xl font-black text-butter">
                No Current Upcoming Events
              </h2>
              <p className="mt-3 text-white/50">
                Check back soon for new Absolutely HTX shows.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {events.slice(0, visibleEvents).map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>

              {visibleEvents < events.length && (
                <button
                  onClick={() => setVisibleEvents((prev) => prev + 3)}
                  type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-12 py-3 text-center leading-5 rounded-full mt-7"
                >
                  See More
                </button>
              )}
            </>
          )}
        </div>
      </motion.section>

      <motion.section
        id="artists"
        className="py-10 sm:py-16 bg-gradient-to-r from-black/90 via-indigo-950 to-black/90 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container-shell">
          <p className="section-heading uppercase bg-gradient-to-r from-red-400 via-teal-400 to-pink-600 bg-clip-text text-transparent">
            Featured Artists
          </p>

          {artists.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-white/10 bg-black/60 p-10 text-center">
              <h2 className="text-2xl font-black text-butter">
                No Current Featured Artists
              </h2>
              <p className="mt-3 text-white/50">
                Check back soon for featured Absolutely HTX artists.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-3">
                {artists.slice(0, visibleArtists).map((artist) => (
                  <ArtistCard key={artist._id} artist={artist} />
                ))}
              </div>

              {visibleArtists < artists.length && (
                <button
                  onClick={() => setVisibleArtists((prev) => prev + 3)}
                  type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-12 py-3 text-center leading-5 rounded-full mt-7"
                >
                  See More
                </button>
              )}
            </>
          )}
        </div>
      </motion.section>

      <motion.section
        id="gallery"
        className="py-10 sm:py-16 bg-gradient-to-r from-black/90 via-black to-black/90 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container-shell">
          <h2 className="section-heading uppercase bg-gradient-to-r from-amber-300 via-pink-400 to-teal-300 bg-clip-text text-transparent">
            Gallery
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.slice(0, visibleGallery).map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Gallery photo ${index + 1}`}
                className="h-48 w-full rounded-2xl object-cover"
              />
            ))}
          </div>

          {visibleGallery < gallery.length && (
            <button
              onClick={() => setVisibleGallery((prev) => prev + 3)}
              type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-12 py-3 text-center leading-5 rounded-full mt-7"
            >
              See More
            </button>
          )}
        </div>
      </motion.section>
    </>
  );
}






