import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-white/30 blur-md" />
        <div className="relative rounded-full border border-white/50 bg-butter/80 px-3 py-2 shadow-soft">
          <span className="block text-lg font-black uppercase tracking-[0.22em] text-cocoa">Absolutely HTX</span>
        </div>
      </div> */}
      <div>
        <div className="text-[1.85rem] font-black italic leading-none text-butter drop-shadow-[0_4px_0_rgba(90,58,56,0.4)] sm:text-[2.5rem]">
          <Image src="/logo5.png" alt="Absolutely HTX logo text" width={1000} height={50} />
        </div>
        {/* <div className="mt-1 text-xs font-semibold uppercase tracking-[0.38em] text-white/90 sm:text-sm">
          Open Mic Venue
        </div> */}
      </div>
    </div>
  );
}
