import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/ui/SocialIcons";
import {
  ABOUT_BLURB,
  FOOTER_COMPANY_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICE_LINKS,
  SITE,
} from "@/lib/constants";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Twitter", href: "https://x.com", icon: TwitterIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="mb-5 text-lg font-bold text-white">{title}</h2>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm leading-relaxed text-white/65 transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/images/brand/logo.png"
            alt={SITE.name}
            width={180}
            height={103}
            className="mb-5 h-14 w-auto object-contain brightness-0 invert"
          />
          <p className="text-sm leading-relaxed text-white/65">{ABOUT_BLURB}</p>
          <ul className="mt-6 flex items-center gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors duration-150 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Our Services" links={FOOTER_SERVICE_LINKS} />
        <FooterColumn title="Company" links={FOOTER_COMPANY_LINKS} />
        <FooterColumn title="Quick Link" links={FOOTER_QUICK_LINKS} />

        <div>
          <h2 className="mb-5 text-lg font-bold text-white">Contact Info</h2>
          <ul className="flex flex-col gap-4 text-sm text-white/65">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-primary">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <WhatsappIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`https://wa.me/${SITE.whatsappHref}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {SITE.whatsapp} (WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
