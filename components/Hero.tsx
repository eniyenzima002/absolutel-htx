"use client";

import React from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-cat.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

        <div className="container-shell relative flex min-h-[88vh] items-center justify-center pt-28 pb-24 text-center sm:pt-36">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className="text-5xl font-black leading-[0.95] text-butter drop-shadow-[0_6px_0_rgba(90,58,56,0.35)] sm:text-7xl lg:text-7xl pt-14">
              <Logo />
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* CTA later */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
