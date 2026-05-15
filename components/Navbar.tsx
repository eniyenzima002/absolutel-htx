"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Menu, X } from "lucide-react";

const links = [
  ["Home", "home"],
  ["Upcoming Shows", "events"],
  ["Artists", "artists"],
  ["Gallery", "gallery"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isAdminPage = pathname.startsWith("/dashboard");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goToSection(target: string) {
    setOpen(false);

    if (target.startsWith("/")) {
      router.push(target);
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${target}`);
      return;
    }

    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (isAdminPage) return null;

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
            <motion.button
              onClick={() => goToSection("home")}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <Home
                className="text-white/70 hover:text-amber-300 hidden sm:inline"
                size={43}
              />
            </motion.button>

            <motion.button
              className="text-white/70 hover:text-amber-300"
              onClick={() => setOpen(!open)}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <Menu size={45} />
            </motion.button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start p-7 uppercase gap-5 bg-black/90">
          <button
            className="absolute top-6 right-7 text-4xl"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={45} className="text-red-600" />
          </button>

          {links.map(([label, target], index) => (
            <motion.button
              key={target}
              onClick={() => goToSection(target)}
              className="w-fit text-left text-2xl bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent font-normal transition"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.08 * index,
              }}
            >
              {label}
            </motion.button>
          ))}
        </div>
      )}
    </>
  );
}
