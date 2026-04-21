import React from "react";
import Link from "next/link";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[88vh] bg-cover bg-center"
        // style={{ backgroundImage: "url('/cat-hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cocoa/25 via-white/10 to-transparent" />
        {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" /> */}

        <div className="container-shell relative flex min-h-[88vh] items-center justify-center pt-28 pb-24 text-center sm:pt-36">
          <div className="max-w-3xl">
            {/* <p className="mb-4 text-sm font-bold uppercase tracking-[0.42em] text-white/90">
              {site.location}
            </p> */}
            <h1 className="text-5xl font-black leading-[0.95] text-butter drop-shadow-[0_6px_0_rgba(90,58,56,0.35)] sm:text-7xl lg:text-7xl pt-14">
              <span className="lg:text-8xl">Houston Music</span> <br />
              Showcase Venue
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-normal text-lg leading-8 text-gray-100 sm:text-xl bg-slate-800/50 rounded-lg px-0.5 py-2 shadow-soft">
              Come and vide with us. Wether you're an artist looking to perform or a music lover looking for your next show, we've got you covered!
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/upcoming-shows" className="px-3 py-2 rounded-full border border-purple-800 bg-purple-800 text-white hover:bg-amber-600 hover:border-amber-600">
                See Upcoming Shows
              </Link>
              <Link href="/submit" className="px-3 py-2 rounded-full border border-amber-100 bg-slate-800/70 text-white  hover:bg-amber-800/50 hover:border-amber-800/50">
                Submit to Perform
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <img src="/wav-sep2.png" alt="Decorative section divider" className="-mt-1 block w-full" /> */}
    </section>
  );
}
