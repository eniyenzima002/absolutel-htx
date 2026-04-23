

// import React from "react";
// import { Logo } from "./Logo";

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div
//         className="relative min-h-[85vh] bg-cover bg-center"
//         style={{ backgroundImage: "url('/bg-cat.png')" }}
//       >
//         {/* <div className="absolute inset-0 bg-gradient-to-b from-cocoa/25 via-white/10 to-transparent" />
//         <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" /> */}

//         <div className="container-shell relative flex min-h-[88vh] items-center justify-center pt-28 pb-24 text-center sm:pt-36">
//           <div className="max-w-3xl">
//             <div className="text-5xl font-black leading-[0.95] text-butter drop-shadow-[0_6px_0_rgba(90,58,56,0.35)] sm:text-7xl lg:text-7xl pt-14">
//               <Logo />
//             </div>
//             <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-cat.png')" }}
      >
        {/* 🌈 Soft color wash (keeps vibe but readable) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* ✨ Blur layer (premium feel) */}
        {/* <div className="absolute inset-0 backdrop-blur-[2px]" /> */}

        {/* 🎯 Bottom fade (smooth transition to next section) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

        {/* Content */}
        <div className="container-shell relative flex min-h-[88vh] items-center justify-center pt-28 pb-24 text-center sm:pt-36">
          <div className="max-w-3xl">
            <div className="text-5xl font-black leading-[0.95] text-butter drop-shadow-[0_6px_0_rgba(90,58,56,0.35)] sm:text-7xl lg:text-7xl pt-14">
              <Logo />
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* CTA later */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
