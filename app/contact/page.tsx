import { FormCard } from "@/components/FormCard";
import { site } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="container-shell pt-36 pb-16">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <FormCard
          title="Contact Us"
          copy="Use this page for venue questions, booking inquiries, private event requests, and general community messages."
        >
          <form className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-cocoa">Name</span>
              <input className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-cocoa">Email</span>
              <input type="email" className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose" placeholder="you@example.com" />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-cocoa">Message</span>
              <textarea rows={7} className="w-full rounded-[24px] border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose" placeholder="How can we help?" />
            </label>
            <div className="sm:col-span-2">
              <button type="button" className="pill-btn bg-cocoa text-butter hover:bg-plum">Send Message</button>
            </div>
          </form>
        </FormCard>

        <div className="glass-card p-7 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.34em] text-plum">Venue Details</p>
          <h2 className="mt-4 text-3xl font-black text-cocoa">Let people know how to reach you</h2>
          <div className="mt-8 space-y-5 text-base leading-7 text-cocoa/80">
            <p><span className="font-semibold text-cocoa">Email:</span> {site.email}</p>
            <p><span className="font-semibold text-cocoa">Instagram:</span> {site.instagram}</p>
            <p><span className="font-semibold text-cocoa">Location:</span> {site.location}</p>
            <p><span className="font-semibold text-cocoa">Hours:</span> Thursday through Sunday, 6 PM to late</p>
          </div>
          <div className="mt-8 rounded-[24px] border border-white/50 bg-white/40 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-plum">Suggested Add-on</p>
            <p className="mt-3 text-base leading-7 text-cocoa/80">
              Later you can place a Google Maps embed or a venue photo here and the page will still feel balanced.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
