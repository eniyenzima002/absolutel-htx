"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
    >
      Logout
    </button>
  );
}