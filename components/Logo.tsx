import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div>
        <div className="text-[1.85rem] font-black italic leading-none text-butter drop-shadow-[0_4px_0_rgba(90,58,56,0.4)] sm:text-[2.5rem]">
          <Image
            src="/a-logo.png"
            alt="Absolutely HTX logo text"
            width={1000}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}

