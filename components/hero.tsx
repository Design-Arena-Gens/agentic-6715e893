"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircleIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-hero-pattern p-10 sm:p-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl space-y-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
          <GlobeAmericasIcon className="h-4 w-4" />
          Wanderly Atlas
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your sensorial travel concierge for unforgettable, design-led journeys.
        </h1>
        <p className="text-lg text-slate-100 sm:text-xl">
          Discover curated itineraries, insider experiences, and seasonal moments
          for destinations that blend culture, cuisine, and adventure. Crafted by
          explorers, for explorers.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#discover"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-100"
          >
            Start exploring
          </Link>
          <Link
            href="#itineraries"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-950/80"
          >
            <PlayCircleIcon className="h-5 w-5" />
            Watch journey teaser
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
      />
    </section>
  );
}
