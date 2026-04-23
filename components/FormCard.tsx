import { ReactNode } from "react";

export function FormCard({ title, copy, children }: { title: string; copy: string; children: ReactNode }) {
  return (
    <div className="form-glass-card p-6 sm:p-8">
      <h2 className="text-3xl font-black text-butter/70">{title}</h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-butter/60">{copy}</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}
