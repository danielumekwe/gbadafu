import { ElementType, ComponentPropsWithoutRef } from "react";

type CardProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Card<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: CardProps<T>) {
  const Component = as || "div";
  return (
    <Component
      className={`rounded-lg border border-border bg-surface shadow-sm transition-shadow duration-200 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}
