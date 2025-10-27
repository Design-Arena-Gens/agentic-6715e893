"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  actions
}: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
    >
      <div className="space-y-2 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-300/80">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base text-slate-300">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex-shrink-0">{actions}</div> : null}
    </motion.header>
  );
}
