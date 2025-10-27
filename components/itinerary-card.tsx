"use client";

import { motion } from "framer-motion";
import type { Itinerary } from "@/lib/data";
import { CalendarIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

type ItineraryCardProps = {
  itinerary: Itinerary;
};

export function ItineraryCard({ itinerary }: ItineraryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group flex flex-col gap-6 rounded-3xl border border-white/5 bg-slate-900/60 p-8 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.35)] backdrop-blur-xl hover:border-brand-400/50"
    >
      <header className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1 text-xs uppercase tracking-[0.35em] text-brand-200">
            <GlobeAltIcon className="h-4 w-4" />
            {itinerary.region}
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-slate-300">
            <CalendarIcon className="h-5 w-5 text-brand-200" />
            {itinerary.duration}
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">
            {itinerary.title}
          </h3>
          <p className="mt-3 text-base text-slate-300">{itinerary.description}</p>
        </div>
      </header>

      <div className="flex flex-wrap gap-2">
        {itinerary.themes.map((theme) => (
          <span
            key={theme}
            className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-200"
          >
            {theme}
          </span>
        ))}
      </div>

      <ol className="space-y-4 text-sm text-slate-300">
        {itinerary.stops.map((stop) => (
          <li key={stop.day} className="rounded-2xl bg-slate-950/80 p-4 shadow-inner">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-200">
              Day {stop.day} • {stop.location}
            </p>
            <p className="mt-2 leading-relaxed text-slate-200">{stop.activity}</p>
          </li>
        ))}
      </ol>
    </motion.article>
  );
}
