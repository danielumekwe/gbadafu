import { Container } from "@/components/ui/Container";
import { CORE_VALUES } from "@/content/home";

export function CoreValues() {
  return (
    <section className="relative z-10 -mt-16 pb-4">
      <Container>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-border shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex flex-col gap-4 bg-surface p-8">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-heading">{title}</h3>
              <p className="text-sm leading-relaxed text-body">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
