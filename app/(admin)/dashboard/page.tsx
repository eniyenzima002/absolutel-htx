import { redirect } from "next/navigation";
import { verifyAdmin } from "@/lib/auth";
import { EventForm } from "@/components/admin/EventForm";
import { ArtistForm } from "@/components/admin/ArtistForm";
import { LogoutButton } from "@/components/admin/LogoutButton";

export default async function AdminDashboardPage() {
  const admin = await verifyAdmin();

  if (!admin) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Absolutely HTX
            </p>
            <h1 className="mt-2 text-4xl font-black bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-white/50">
              Hi Catherine, welcome to the dashboard! Here is where you manage upcoming shows and featured artists displayed on your website.
            </p>
          </div>

          <LogoutButton />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-amber-200">
                Add Upcoming Show
              </h2>
              <p className="mt-2 text-sm text-white/40">
                Add event details and paste the Ticket Tailor link for RSVP or ticket purchase.
              </p>
            </div>

            <EventForm />
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-amber-200">
                Add Featured Artist
              </h2>
              <p className="mt-2 text-sm text-white/40">
                Add artist details that will appear in the featured artists section.
              </p>
            </div>

            <ArtistForm />
          </section>
        </div>
      </section>
    </main>
  );
}



