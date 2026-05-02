// Here is Artist Page
/*
import { ArtistCard } from "@/components/ArtistCard";
import { artists } from "@/lib/data";

export default function ArtistsPage() {
  return (
    <main className="container-shell pt-36 pb-16">
      <div className="text-center bg-gradient-to-r from-black/50 via-black/90 to-black/50 p-10 rounded-xl">
        <h1 className="section-heading mt-4">The voices that make the room glow</h1>
        <p className="section-copy">
          Highlight featured performers, hosts, and recurring artists to make the venue feel active and loved.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {artists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </main>
  );
}
*/

import { ArtistCard } from "@/components/ArtistCard";

type Artist = {
  _id: string;
  name: string;
  genre: string;
  bio: string;
  image: string;
};

async function getArtists(): Promise<Artist[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/artists`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function ArtistsPage() {
  const artists = await getArtists();

  return (
    <main className="container-shell pt-36 pb-16 relative min-h-[85vh] bg-cover bg-center"
    style={{ backgroundImage: "url('/bg-cat.png')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      {/* <div className="text-center bg-gradient-to-r from-black/50 via-black/90 to-black/50 p-10 rounded-xl">
        <h1 className="section-heading mt-4">
          The voices that make the room glow
        </h1>
        <p className="section-copy">
          Highlight featured performers, hosts, and recurring artists to make
          the venue feel active and loved.
        </p>
      </div> */}

      {artists.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-white/10 bg-black/60 p-10 text-center">
          <h2 className="text-2xl font-black text-butter">No featured artists</h2>
          <p className="mt-3 text-white/50">
            Check back soon for featured Absolutely HTX artists.
          </p>
        </div>
      ) : (
        <div className="mt-12 flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory">
          {artists.map((artist) => (
            <div
              key={artist._id}
              className="min-w-[280px] sm:min-w-[320px] xl:min-w-[360px] snap-start"
            >
              <ArtistCard artist={artist} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
