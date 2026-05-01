import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="container-shell flex min-h-screen items-center justify-center text-center">
      <div className="rounded-3xl bg-black/70 p-10">
        <h1 className="text-4xl font-black text-butter">Message Sent!</h1>
        <p className="mt-4 text-butter/60">
          Thank you for reaching out. We’ll get back to you soon.
        </p>

        <Link
          href="/"
          className="pill-btn mt-8 inline-block bg-cocoa text-butter hover:bg-plum"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}