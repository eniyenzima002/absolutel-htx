"use client";

import React from "react";
import Link from "next/link";
import { site } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <motion.footer
      className="pb-10 pt-6 bg-gradient-to-r from-black/95 via-black to-black/95"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container-shell">
        <div className="flex flex-col items-center justify-between gap-5 px-6 py-6 text-center sm:flex-row sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/logo5.png"
              alt={site.name}
              width={250}
              height={50}
              className="mx-auto mb-2"
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-lg font-semibold uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <Link href="/upcoming-shows">Shows</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/submit">Submission</Link>
            <Link href="/contact">Contact</Link>
            <Link target="_blank" href="/login">Admin</Link>
          </motion.div>
        </div>

        <motion.div
          className="h-0.5 w-full text-sm uppercase bg-gradient-to-r from-lime-400/30 via-pink-300/30 to-teal-200/70 text-transparent"
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        />

        <motion.div
          className="py-12 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
          <p className="text-sm uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent">
            {site.tagline} {date} - Site by Catherine - {site.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
