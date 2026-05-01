// models/Event.ts
import mongoose, { Schema, models } from "mongoose";

const EventSchema = new Schema(
  {
    title: String,
    date: Date,
    time: String,
    price: String,
    cta: String,
    description: String,
    artist: String,
    image: String,
    ticketUrl: String,
  },
  { timestamps: true }
);

export const Event = models.Event || mongoose.model("Event", EventSchema);