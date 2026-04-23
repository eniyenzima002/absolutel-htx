import { FormCard } from "@/components/FormCard";
import { site } from "@/lib/data";

export default function ContactPage() {
  return (
    // <main className="container-shell pt-36 pb-16">
    //   <div className="">
    //     <FormCard
    //       title="Contact Us"
    //       copy="Use this page for venue questions, booking inquiries, private event requests, and general community messages."
    //     >
    //       <form className="grid gap-5 sm:grid-cols-2">
    //         <label className="block">
    //           <span className="mb-2 block text-sm font-semibold text-cocoa">Name</span>
    //           <input className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose" placeholder="Your name" />
    //         </label>
    //         <label className="block">
    //           <span className="mb-2 block text-sm font-semibold text-cocoa">Email</span>
    //           <input type="email" className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose" placeholder="you@example.com" />
    //         </label>
    //         <label className="block sm:col-span-2">
    //           <span className="mb-2 block text-sm font-semibold text-cocoa">Message</span>
    //           <textarea rows={7} className="w-full rounded-[24px] border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose" placeholder="How can we help?" />
    //         </label>
    //         <div className="sm:col-span-2">
    //           <button type="button" className="pill-btn bg-cocoa text-butter hover:bg-plum">Send Message</button>
    //         </div>
    //       </form>
    //     </FormCard>
    //   </div>
    // </main>
    <main className="container-shell pt-36 pb-16">
  <div className="">
    <FormCard
      title="Contact Us"
      copy="Use this page for venue questions, booking inquiries, private event requests, and general community messages."
    >
      <form className="grid gap-8 sm:grid-cols-2">

        <label className="relative block">
          <input
            placeholder=" "
            className="peer w-full border-b border-butter/50 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
          />
          <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
            Name
          </span>
        </label>

        <label className="relative block">
          <input
            type="email"
            placeholder=" "
            className="peer w-full border-b border-butter/50 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
          />
          <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
            Email
          </span>
        </label>

        <label className="relative block sm:col-span-2">
          <textarea
            rows={7}
            placeholder=" "
            className="peer w-full border-b border-butter/50 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
          />
          <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
            Message
          </span>
        </label>

        <div className="sm:col-span-2">
          <button type="button" className="pill-btn bg-cocoa text-butter hover:bg-plum">
            Send Message
          </button>
        </div>

      </form>
    </FormCard>
  </div>
</main>
  );
}
