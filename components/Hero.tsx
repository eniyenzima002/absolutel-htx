
// Here is the whole hero file

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
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (!nextEvent?.date) return;

    const interval = setInterval(() => {
      const target = new Date(nextEvent.date).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [nextEvent]);

  if (!nextEvent) return null;

  const Box = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="min-w-[70px] rounded-2xl border border-white/10 bg-black/70 px-4 py-3 shadow-2xl backdrop-blur-md sm:min-w-[82px] sm:px-5 sm:py-4">
        <span className="text-xl sm:text-4xl font-bold uppercase bg-gradient-to-r from-lime-700 via-purple-400 to-amber-700 bg-clip-text text-transparent">
          {value}
        </span>
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50 sm:text-xs">
        {label}
      </span>
    </div>
  );

  return (
    <div className="mt-8 flex flex-col items-center justify-center bg-black/50 px-1 py-3 rounded-3xl">
      <p className="sm:text-2xl font-bold tracking-[0.15em] uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent mb-4 ">
        Next Show is happening in
      </p>

      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-4">
        <Box value={timeLeft.days} label="DD" />
        <span className="text-2xl font-black text-white/40 sm:text-3xl">|</span>

        <Box value={timeLeft.hours} label="HH" />
        <span className="text-2xl font-black text-white/40 sm:text-3xl">|</span>

        <Box value={timeLeft.minutes} label="MM" />
        <span className="text-2xl font-black text-white/40 sm:text-3xl">|</span>

        <Box value={timeLeft.seconds} label="SS" />
      </div>
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

