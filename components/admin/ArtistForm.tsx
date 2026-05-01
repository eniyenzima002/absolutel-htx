"use client";

import { useState } from "react";
import { ImageUpload } from "./ImageUpload";
import { useRouter } from "next/navigation";

export function ArtistForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      genre: formData.get("genre"),
      bio: formData.get("bio"),
      image: formData.get("image"),
    };

    const image = formData.get("image");

    if (!image) {
      alert("Please upload an artist image");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/artists");   // 👈 redirect here
      router.refresh();

    }

  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input name="name" placeholder="Artist name" className="admin-input" required />
      <input name="genre" placeholder="Genre e.g. R&B / Poetry / Comedy" className="admin-input" required />
      <ImageUpload name="image" label="Artist Image" />
      {/* <input name="image" placeholder="Image URL" className="admin-input" required /> */}

      <textarea
        name="bio"
        placeholder="Short artist bio"
        rows={5}
        className="admin-input resize-none"
        required
      />

      <button
        disabled={loading}
        className="rounded-full bg-rose px-5 py-3 font-bold text-white transition hover:bg-cocoa disabled:opacity-50"
      >
        {loading ? "Saving..." : "Add Artist"}
      </button>
    </form>
  );
}