"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/lib/constants";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Trap focus inside the mobile panel while open, and move focus in/out of
  // it so keyboard users can't tab into the (visually hidden) page behind it.
  useEffect(() => {
    if (!isOpen) return;

    const getFocusable = () =>
      panelRef.current
        ? Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
        : [];

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    getFocusable()[0]?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Return focus to the toggle button once the panel closes.
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (!isOpen && wasOpenRef.current) {
      toggleRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <>
      <div className="hidden bg-navy text-white lg:block">
        <Container className="flex h-10 items-center justify-end gap-6 text-xs">
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-primary">
            <Mail className="size-3.5" aria-hidden="true" />
            {SITE.email}
          </a>
          <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-1.5 hover:text-primary">
            <Phone className="size-3.5" aria-hidden="true" />
            {SITE.phone}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsappHref}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary"
          >
            <WhatsappIcon className="size-3.5" aria-hidden="true" />
            {SITE.whatsapp} (WhatsApp only)
          </a>
        </Container>
      </div>

      <header className="sticky top-0 z-[70] w-full border-b border-border bg-surface/95 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between lg:h-24">
          <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
            <Image
              src="/images/brand/logo.png"
              alt={SITE.name}
              width={220}
              height={126}
              className="h-14 w-auto object-contain lg:h-16"
              priority
            />
          </Link>

          <DesktopNav />

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary">
                Get In Touch
              </Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setIsOpen((v) => !v)}
              className="flex size-11 items-center justify-center rounded-sm border border-border text-heading lg:hidden"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[65] bg-black/50 lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              ref={panelRef}
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[68] w-full max-w-sm bg-surface shadow-2xl lg:hidden"
            >
              <MobileMenu onNavigate={() => setIsOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
