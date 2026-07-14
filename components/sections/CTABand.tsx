import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CTABandProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTABand({
  title,
  description,
  buttonLabel = "Contact Us",
  buttonHref = "/contact",
}: CTABandProps) {
  return (
    <section className="bg-primary py-16">
      <Container className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {description}
          </p>
        </div>
        <Button href={buttonHref} variant="outline-light" className="!border-white shrink-0" showArrow>
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}
