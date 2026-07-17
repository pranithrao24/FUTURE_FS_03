import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#111111] px-6 text-white">
      <h1 className="text-7xl font-black text-yellow-400">404</h1>

      <p className="mt-4 text-center text-xl">
        Oops! This page doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
      >
        Back to Home
      </Link>
    </main>
  );
}