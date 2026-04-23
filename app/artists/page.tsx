import { ArtistCard } from "@/components/ArtistCard";
import { artists } from "@/lib/data";

export default function ArtistsPage() {
  return (
    <main className="container-shell pt-36 pb-16">
      <div className="text-center bg-gradient-to-r from-black/50 via-black/90 to-black/50 p-10 rounded-xl">
        {/* <p className="text-sm font-bold uppercase tracking-[0.34em] text-plum">Artists</p> */}
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
