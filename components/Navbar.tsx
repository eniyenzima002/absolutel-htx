"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Home, House, Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const links = [
  ["Home", "/"],
  ["Upcoming Shows", "/upcoming-shows"],
  ["Artists", "/artists"],
  ["Submission", "/submit"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="inset-x-0 top-0 z-40">
        <div
          className={`inset-x-0 top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "fixed bg-black/80 backdrop-blur-md shadow-lg"
              : "absolute bg-transparent"
          }`}
        >
          <div className="flex justify-between px-4 py-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Home
                className="text-white/70 hover:text-amber-300 hidden sm:inline"
                size={43}
              />
            </Link>
            <button
              className="text-white/70 hover:text-amber-300"
              onClick={() => setOpen(!open)}
            >
              <Menu size={45} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start p-7 uppercase gap-5 bg-black/90">
          <button
            className="absolute top-6 right-7 text-red-/90 hover:text-amber-300 text-4xl"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={45} className="text-red-600" />
          </button>

          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-2xl bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent font-normal transition ${
                pathname === href
                  ? "text-amber-300"
                  : "text-white/90 hover:text-amber-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}