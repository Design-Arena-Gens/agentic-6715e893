"use client";

import { motion } from "framer-motion";
import type { SeasonalEvent, Destination } from "@/lib/data";
import { SparklesIcon } from "@heroicons/react/24/outline";

type SeasonalHighlightProps = {
  event: SeasonalEvent;
  destination: Destination;
};

export function SeasonalHighlight({
  event,
  destination
}: SeasonalHighlightProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-[0_18px_65px_-20px_rgba(94,234,212,0.35)] backdrop-blur"
    >
      <header className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
            <SparklesIcon className="h-4 w-4" />
            Seasonal moment
          </span>
          <h3 className="mt-4 text-xl font-semibold text-white">{event.name}</h3>
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-200">
          {event.month}
        </p>
      </header>
      <p className="mt-4 text-sm text-slate-300">{event.description}</p>
      <dl className="mt-6 space-y-3 text-sm text-slate-300">
        <div>
          <dt className="font-semibold text-slate-200">Where</dt>
          <dd className="text-slate-300">
            {destination.name}, {destination.country}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-200">Booking intel</dt>
          <dd className="text-slate-300">{event.bookingTips}</dd>
        </div>
      </dl>
    </motion.article>
  );
}
