"use client";

import { useState } from "react";
import { ImageUpload } from "./ImageUpload";
import { useRouter } from "next/navigation";

export function EventForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      title: formData.get("title"),
      date: formData.get("date"),
      time: formData.get("time"),
      price: formData.get("price"),
      cta: formData.get("cta"),
      description: formData.get("description"),
      artist: formData.get("artist"),
      image: formData.get("image"),
      ticketUrl: formData.get("ticketUrl"),
    };

    const image = formData.get("image");

    if (!image) {
      alert("Please upload an event image");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/upcoming-shows"); // 👈 redirect here
      router.refresh();

    }

  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input name="title" placeholder="Event title" className="admin-input" required />
      <input type="date" name="date" placeholder="Date e.g. Thursday, May 21st" className="admin-input" required />
      <input name="time" placeholder="Time e.g. 7:00 PM" className="admin-input" required />
      <input name="price" placeholder="Price e.g. Free / $10" className="admin-input" required />
      <input name="cta" placeholder="Button text e.g. RSVP / Get Tickets" className="admin-input" required />
      <input name="artist" placeholder="Artist / Host name" className="admin-input" />
      <ImageUpload name="image" label="Event Image" />
      <input name="ticketUrl" placeholder="Ticket Tailor link" className="admin-input" required />

      <textarea
        name="description"
        placeholder="Short description"
        rows={4}
        className="admin-input resize-none"
        required
      />

      <button
        disabled={loading}
        className="rounded-full bg-rose px-5 py-3 font-bold text-white transition hover:bg-cocoa disabled:opacity-50"
      >
        {loading ? "Saving..." : "Add Show"}
      </button>
    </form>
  );
}
