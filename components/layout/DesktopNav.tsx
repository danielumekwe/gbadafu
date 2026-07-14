"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export function DesktopNav() {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenLabel(null), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {NAV_ITEMS.map((item) => {
          const hasChildren = !!item.children?.length;
          const isActive =
            pathname === item.href || (hasChildren && pathname.startsWith(item.href));
          const isOpen = openLabel === item.label;

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                if (hasChildren) setOpenLabel(item.label);
              }}
              onMouseLeave={() => hasChildren && scheduleClose()}
            >
              <Link
                href={item.href}
                aria-haspopup={hasChildren ? "true" : undefined}
                aria-expanded={hasChildren ? isOpen : undefined}
                aria-current={isActive ? "page" : undefined}
                onFocus={() => hasChildren && setOpenLabel(item.label)}
                className={`flex items-center gap-1 px-4 py-8 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-heading hover:text-primary"
                }`}
              >
                {item.label}
                {hasChildren && (
                  <ChevronDown
                    className={`size-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                )}
              </Link>

              {hasChildren && (
                <div
                  onFocus={cancelClose}
                  onBlur={scheduleClose}
                  className={`absolute top-full left-0 z-50 min-w-64 rounded-b-md border border-border bg-surface py-2 shadow-xl transition-all duration-200 ${
                    isOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-body transition-colors duration-150 hover:bg-surface-muted hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
