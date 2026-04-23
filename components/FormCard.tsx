"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function FormCard({
  title,
  copy,
  children,
}: {
  title: string;
  copy: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="form-glass-card p-6 sm:p-8"
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-black text-butter/70"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="mt-3 max-w-2xl text-base leading-7 text-butter/60"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
      >
        {copy}
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
