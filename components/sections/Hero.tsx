"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/content/home";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO.images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={HERO.images[index]}
              alt=""
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.25em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            {HERO.kicker}
          </span>
          <h1 className="mt-4 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
            {HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {HERO.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/about" variant="primary" showArrow>
              Discover More
            </Button>
            <Button href="/contact" variant="outline-light">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {HERO.images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-primary" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
