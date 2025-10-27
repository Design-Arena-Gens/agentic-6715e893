"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import type { Destination } from "@/lib/data";
import { clsx } from "clsx";

type DestinationCardProps = {
  destination: Destination;
  layout: "grid" | "featured";
};

const tagColors: Record<string, string> = {
  coastal: "bg-sky-500/20 text-sky-200",
  foodie: "bg-rose-500/20 text-rose-200",
  culture: "bg-purple-500/20 text-purple-200",
  heritage: "bg-amber-500/20 text-amber-200",
  seasonal: "bg-emerald-500/20 text-emerald-200",
  mountain: "bg-blue-500/20 text-blue-200",
  outdoors: "bg-teal-500/20 text-teal-200",
  wellness: "bg-pink-500/20 text-pink-200",
  adventure: "bg-orange-500/20 text-orange-200",
  wildlife: "bg-lime-500/20 text-lime-200",
  wine: "bg-violet-500/20 text-violet-200",
  tea: "bg-green-500/20 text-green-200"
};

export function DestinationCard({ destination, layout }: DestinationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl",
        layout === "featured" ? "md:col-span-2" : ""
      )}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={destination.image}
          fill
          priority={layout === "featured"}
          alt={`${destination.name}, ${destination.country}`}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-transparent" />
        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.35em] text-brand-200 backdrop-blur">
          <MapPinIcon className="h-4 w-4" />
          {destination.region}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {destination.name}
            </h3>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {destination.country}
            </p>
          </div>
          <ArrowUpRightIcon className="h-6 w-6 text-brand-300 transition-colors group-hover:text-brand-200" />
        </div>
        <p className="text-base leading-relaxed text-slate-300">
          {destination.summary}
        </p>
        <dl className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-slate-200">Signature moments</dt>
            <dd className="mt-2 space-y-1 text-sm text-slate-300">
              {destination.highlights.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-200">Climate intel</dt>
            <dd className="mt-2 text-sm text-slate-300">{destination.climate}</dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-2">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className={clsx(
                "rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.25em]",
                tagColors[tag] ?? "bg-slate-700/60 text-slate-200"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
