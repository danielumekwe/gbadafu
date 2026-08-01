"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <div className="flex h-full flex-col">
      <nav aria-label="Primary" className="flex-1 overflow-y-auto py-2">
        <ul>
          {NAV_ITEMS.map((item) => {
            const hasChildren = !!item.children?.length;
            const isActive = pathname === item.href;
            const isOpen = openLabel === item.label;

            return (
              <li key={item.label} className="border-b border-border">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex-1 px-6 py-4 text-base font-semibold uppercase ${
                      isActive ? "text-primary" : "text-heading"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() => setOpenLabel(isOpen ? null : item.label)}
                      className="px-6 py-4 text-heading"
                    >
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {hasChildren && isOpen && (
                  <ul className="bg-surface-muted pb-2">
                    {item.children!.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onNavigate}
                          className="block px-10 py-2.5 text-sm text-body hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <a
        href={`tel:${SITE.phoneHref}`}
        className="flex items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold text-white"
      >
        <Phone className="size-4" aria-hidden="true" />
        {SITE.phone}
      </a>
      <a
        href={`https://wa.me/${SITE.whatsappHref}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-navy px-6 py-4 text-sm font-semibold text-white"
      >
        <WhatsappIcon className="size-4" aria-hidden="true" />
        {SITE.whatsapp} (WhatsApp only)
      </a>
    </div>
  );
}
