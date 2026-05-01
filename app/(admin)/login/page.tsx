"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormCard } from "@/components/FormCard";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Invalid email or password");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="container-shell pt-36 pb-16">
      <div className="">
        <FormCard
          title="Login to Admin"
          copy="Welcome to admin login page - please enter your credentials to access the admin panel."
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <label className="relative ">
              <input
                name="email"
                type="email"
                placeholder=" "
                className="peer w-full border-b border-butter/50 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
                required
              />
              <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
                Email
              </span>
            </label>

            <label className="relative ">
              <input
                name="password"
                type="password"
                placeholder=" "
                className="peer w-full border-b border-butter/50 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
                required
              />
              <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
                Password
              </span>
            </label>

            {error && <p className="text-sm font-semibold text-red-400">{error}</p>}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="pill-btn bg-cocoa text-butter hover:bg-plum disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </FormCard>
      </div>
    </main>
  );
}

