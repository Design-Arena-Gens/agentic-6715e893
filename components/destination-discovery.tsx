"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { Destination } from "@/lib/data";
import { destinations } from "@/lib/data";
import { DestinationCard } from "./destination-card";
import { clsx } from "clsx";

const regions: Destination["region"][] = [
  "Europe",
  "Asia",
  "Americas",
  "Africa",
  "Oceania"
];

const experiences = [
  "foodie",
  "culture",
  "heritage",
  "seasonal",
  "outdoors",
  "adventure",
  "wellness",
  "coastal",
  "mountain",
  "wine"
];

export function DestinationDiscovery() {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<Destination["region"] | "All">("All");
  const [selectedFocus, setSelectedFocus] = useState<string>("All");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesRegion =
        selectedRegion === "All" || destination.region === selectedRegion;
      const matchesExperience =
        selectedFocus === "All" || destination.tags.includes(selectedFocus);
      const matchesQuery =
        query.trim().length === 0 ||
        [destination.name, destination.country, destination.summary, ...destination.tags]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());

      return matchesRegion && matchesExperience && matchesQuery;
    });
  }, [query, selectedRegion, selectedFocus]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
        <div className="relative">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for cities, vibes, cuisines..."
            className="w-full rounded-full border border-white/10 bg-slate-900/60 py-3 pl-12 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-wrap gap-2 rounded-3xl border border-white/10 bg-slate-900/60 p-4">
            <button
              type="button"
              onClick={() => setSelectedRegion("All")}
              className={clsx(
                "rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] transition-colors",
                selectedRegion === "All"
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/40"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/60"
              )}
            >
              All regions
            </button>
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={clsx(
                  "rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] transition-colors",
                  selectedRegion === region
                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/40"
                    : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/60"
                )}
              >
                {region}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 rounded-3xl border border-white/10 bg-slate-900/60 p-4">
            <button
              type="button"
              onClick={() => setSelectedFocus("All")}
              className={clsx(
                "rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] transition-colors",
                selectedFocus === "All"
                  ? "bg-white text-slate-900 shadow-lg shadow-white/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/60"
              )}
            >
              All vibes
            </button>
            {experiences.map((experience) => (
              <button
                key={experience}
                type="button"
                onClick={() => setSelectedFocus(experience)}
                className={clsx(
                  "rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] transition-colors",
                  selectedFocus === experience
                    ? "bg-white text-slate-900 shadow-lg shadow-white/20"
                    : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/60"
                )}
              >
                {experience}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={index === 0 ? "md:col-span-2 xl:col-span-2" : ""}
            >
              <DestinationCard
                destination={destination}
                layout={index === 0 ? "featured" : "grid"}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredDestinations.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-dashed border-white/20 bg-slate-900/40 p-12 text-center text-slate-300"
        >
          <p className="text-lg font-semibold text-white">
            We&apos;re scouting this adventure.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Try adjusting your filters or explore another region to discover new
            travel stories.
          </p>
        </motion.div>
      ) : null}
    </div>
  );
}
