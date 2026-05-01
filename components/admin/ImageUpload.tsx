/*
"use client";

import { useState } from "react";

export function ImageUpload({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    setImageUrl(data.secure_url);
    setLoading(false);
  }

  return (
    <div className="grid gap-3">
      <label className="text-sm font-semibold text-white/70">{label}</label>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="admin-input"
      />

      <input type="hidden" name={name} value={imageUrl} />

      {loading && <p className="text-sm text-amber-300">Uploading image...</p>}

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded preview"
          className="h-40 w-full rounded-2xl object-cover"
        />
      )}
    </div>
  );
}
*/

"use client";

import { useState } from "react";

export function ImageUpload({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    // ❗ Validation: no file selected
    if (!file) {
      setError("Image is required");
      return;
    }

    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!data.secure_url) {
      setError("Upload failed. Try again.");
      setLoading(false);
      return;
    }

    setImageUrl(data.secure_url);
    setLoading(false);
  }

  return (
    <div className="grid gap-3">
      <label className="text-sm font-semibold text-white/70">
        {label} <span className="text-red-400">*</span>
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="admin-input"
        required
      />

      {/* hidden value sent to backend */}
      <input type="hidden" name={name} value={imageUrl} required />

      {loading && (
        <p className="text-sm text-amber-300">Uploading image...</p>
      )}

      {error && (
        <p className="text-sm font-semibold text-red-400">{error}</p>
      )}

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded preview"
          className="h-40 w-full rounded-2xl object-cover"
        />
      )}
    </div>
  );
}