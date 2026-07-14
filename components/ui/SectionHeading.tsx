type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {kicker && (
        <span className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-primary uppercase">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          {kicker}
        </span>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${light ? "text-white" : "text-heading"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed ${light ? "text-white/75" : "text-body"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
