import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Artist = {
  _id: string;
  name: string;
  // genre: string;
  bio: string;
  image: string;
};

async function getArtist(id: string): Promise<Artist | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/artists/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function ArtistDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artist = await getArtist(id);
  if (!artist) {
    notFound();

  }

  return (
    <main className="container-shell pt-36 pb-16 relative min-h-[85vh] bg-cover bg-center"
    style={{ backgroundImage: "url('/bg-cat.png')" }}
    >
      {/* <Link href="/artists" className="text-amber-300 hover:text-rose">
        ← Back to Artists
      </Link> */}
      <div className="absolute inset-0 bg-black/50 z-1" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      <section className="mt-8 rounded-3xl border border-white/10 bg-black/70 p-6 text-white shadow-2xl sm:p-10">
        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          <div className="relative h-72 w-full overflow-hidden rounded-3xl">
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            {/* <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
              {artist.genre}
            </p> */}

            <h1 className="mt-4 text-5xl font-black bg-gradient-to-r from-red-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
              {artist.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/70">
              {artist.bio}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

