import Image from "next/image";

type Artist = {
  name: string;
  genre: string;
  bio: string;
  image: string;
};

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <article className="glass-card p-6 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-butter to-peach text-2xl font-black text-cocoa shadow-soft overflow-hidden relative">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover"
        />

      </div>
      <h3 className="mt-5 text-2xl font-black bg-gradient-to-r from-red-500 to-teal-500 bg-clip-text text-transparent">{artist.name}</h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-plum">{artist.genre}</p>
      <p className="mt-4 text-base leading-7 text-white/40">{artist.bio}</p>
    </article>
  );
}
