// models/Artist.ts
import mongoose, { Schema, models } from "mongoose";

const ArtistSchema = new Schema(
  {
    name: String,
    genre: String,
    bio: String,
    image: String,
  },
  { timestamps: true }
);

export const Artist = models.Artist || mongoose.model("Artist", ArtistSchema);