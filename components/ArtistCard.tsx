"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Artist = {
  name: string;
  genre: string;
  bio: string;
  image: string;
};

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <motion.article
      className="glass-card p-6 text-center"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-butter to-peach text-2xl font-black text-cocoa shadow-soft overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.h3
        className="mt-5 text-2xl font-black bg-gradient-to-r from-red-500 to-teal-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
      >
        {artist.name}
      </motion.h3>

      <motion.p
        className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-plum"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
      >
        {artist.genre}
      </motion.p>

      <motion.p
        className="mt-4 text-base leading-7 text-white/40"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
      >
        {artist.bio}
      </motion.p>
    </motion.article>
  );
}