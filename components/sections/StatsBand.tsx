import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { STATS } from "@/content/home";

export function StatsBand() {
  return (
    <section className="bg-navy py-20 text-white sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            {STATS.kicker}
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{STATS.title}</h2>
          <p className="text-base leading-relaxed text-white/70">{STATS.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          {STATS.items.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <span className="text-4xl font-extrabold text-primary sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-medium tracking-wide text-white/70 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
