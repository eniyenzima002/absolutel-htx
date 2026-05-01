
/*
import { FormCard } from "@/components/FormCard";

export default function ContactPage() {
  return (
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
*/

"use client";

import { useRouter } from "next/navigation";
import { FormCard } from "@/components/FormCard";

export default function ContactPage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  formData.append("form-name", "contact");

  const encoded = new URLSearchParams();

  formData.forEach((value, key) => {
    encoded.append(key, value.toString());
  });

  const res = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encoded.toString(),
  });

  if (res.ok) {
    router.push("/thank-you");
  } else {
    alert("Something went wrong. Please try again.");
  }
}

  return (
    <main className="container-shell pt-36 pb-16">
      <div className="">
        <FormCard
          title="Contact Us"
          copy="Use this page for artist submissions, venue questions, booking inquiries, private event requests, and general community messages."
        >
          <form
            onSubmit={handleSubmit}
            className="grid gap-8 sm:grid-cols-2"
          >
            <label className="relative block">
              <input
                name="name"
                required
                placeholder=" "
                className="peer w-full border-b border-butter/50 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
              />
              <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
                Name
              </span>
            </label>

            <label className="relative block">
              <input
                name="email"
                type="email"
                required
                placeholder=" "
                className="peer w-full border-b border-butter/50 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
              />
              <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
                Email
              </span>
            </label>

            <label className="relative block sm:col-span-2">
              <textarea
                name="message"
                rows={7}
                required
                placeholder=" "
                className="peer w-full border-b border-butter/50 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
              />
              <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
                Message
              </span>
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="pill-btn bg-cocoa text-butter hover:bg-plum"
              >
                Send Message
              </button>
            </div>
          </form>
        </FormCard>
      </div>
    </main>
  );
}
