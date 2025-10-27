const insights = [
  {
    label: "Crafted itineraries",
    value: "120+",
    detail: "Curated with local tastemakers and boutique hoteliers."
  },
  {
    label: "Sustainable partners",
    value: "85%",
    detail: "Experiences vetted for environmental and community impact."
  },
  {
    label: "On-the-ground scouts",
    value: "42",
    detail: "Designers, chefs, and guides feeding real-time intel."
  },
  {
    label: "Destination playlists",
    value: "30",
    detail: "Soundscapes and storytelling to set your travel mood."
  }
];

export function InsightGrid() {
  return (
    <section className="rounded-3xl border border-white/5 bg-slate-900/40 p-8 sm:p-12">
      <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {insights.map((insight) => (
          <div key={insight.label} className="space-y-2">
            <dt className="text-xs uppercase tracking-[0.35em] text-slate-400">
              {insight.label}
            </dt>
            <dd className="text-3xl font-semibold text-white">{insight.value}</dd>
            <p className="text-sm text-slate-300">{insight.detail}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
