"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

type Event = {
  title: string;
  date: string;
  time: string;
};

function Countdown({ nextEvent }: { nextEvent?: Event }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
  if (!nextEvent?.date) return;

  const interval = setInterval(() => {
    const target = new Date(nextEvent.date).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      setTimeLeft("Showtime!");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const dayLabel = days === 1 ? "Day" : "Days";
    const hourLabel = hours === 1 ? "Hour" : "Hours";
    const minuteLabel = minutes === 1 ? "Minute" : "Minutes";

    setTimeLeft(
      `${days} ${dayLabel}, ${hours} ${hourLabel} - ${minutes} ${minuteLabel}`
    );
  }, 1000);

  return () => clearInterval(interval);
}, [nextEvent]);

if (!nextEvent) return null;

  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-butter shadow-2xl backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
        Next Show is happening in
      </p>
      <p className="sm:text-2xl uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent">{timeLeft}</p>
    </div>
  );
}

export function Hero({ nextEvent }: { nextEvent?: Event }) {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[url('/bg-cat.png')] bg-cover bg-center" />
      <div className="fixed inset-0 -z-10 bg-black/50" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      <div className="container-shell relative flex min-h-screen items-center justify-center pt-28 pb-24 text-center sm:pt-36">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="text-5xl font-black leading-[0.95] text-butter drop-shadow-[0_6px_0_rgba(90,58,56,0.35)] sm:text-7xl lg:text-7xl pt-14">
            <Logo />
          </div>

          <Countdown nextEvent={nextEvent} />

          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Join our email list"
              className="w-full rounded-full border border-white/10 bg-black/50 px-5 py-3 text-white outline-none placeholder:text-white/40 focus:border-amber-300"
            />
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-full">Join</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
