import { Hero } from "@/components/hero";
import { InsightGrid } from "@/components/insight-grid";
import { DestinationDiscovery } from "@/components/destination-discovery";
import { SectionHeading } from "@/components/section-heading";
import { itineraries, seasonalEvents, destinations } from "@/lib/data";
import { ItineraryCard } from "@/components/itinerary-card";
import { SeasonalHighlight } from "@/components/seasonal-highlight";

export default function Page() {
  const seasonalEventCards = seasonalEvents.map((event) => ({
    event,
    destination: destinations.find((destination) => destination.id === event.destinationId)
  }));

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-12 sm:py-16 sm:px-8 lg:px-0">
      <Hero />

      <InsightGrid />

      <section id="discover" className="space-y-10">
        <SectionHeading
          eyebrow="Destination finder"
          title="Pinpoint your next city break or long-haul escape."
          description="Filter by region, travel vibe, or simply search your curiosity. Every feature destination includes climate intel, signature highlights, and curated experiences."
        />
        <DestinationDiscovery />
      </section>

      <section id="itineraries" className="space-y-10">
        <SectionHeading
          eyebrow="Blueprint journeys"
          title="Beautiful itineraries, optimized for flow and local immersion."
          description="Save time with day-by-day roadmaps that balance headline sights with off-menu experiences."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {itineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
      </section>

      <section id="seasonal" className="space-y-10">
        <SectionHeading
          eyebrow="Seasonal spotlights"
          title="Time your trip with the world’s most luminous travel moments."
          description="Align your travels with festivals, natural phenomena, and micro-seasonal experiences that offer the richest sense of place."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {seasonalEventCards.map(
            ({ event, destination }) =>
              destination && (
                <SeasonalHighlight
                  key={event.id}
                  event={event}
                  destination={destination}
                />
              )
          )}
        </div>
      </section>

      <footer className="mb-10 rounded-3xl border border-white/10 bg-slate-900/40 p-10 text-center text-sm text-slate-400">
        <p>
          Crafted by Wanderly Atlas • Tailored travel intelligence for design-led
          explorers. Subscribe for weekly dispatches, curated playlists, and
          beta invites.
        </p>
      </footer>
    </main>
  );
}
