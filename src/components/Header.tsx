"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Blog", href: "/blog" },
  // { label: "Vault", href: "/vault" },
  { label: "Book", href: "/book" },
  { label: "Speaking", href: "/speaking" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-light/92 backdrop-blur-xl border-b border-dark/8 py-3.5 px-7"
          : "bg-transparent border-b border-transparent py-5 px-7"
      }`}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ProductNativeLogo.svg"
            alt="ProductNatives"
            width={180}
            height={30}
            priority
            className="h-6 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-primary text-sm font-semibold transition-colors hover:text-primary tracking-[.02rem] ${
                pathname.startsWith(link.href)
                  ? "text-primary"
                  : "text-[#57534E]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/subscribe"
            className="font-primary text-sm font-bold text-white bg-primary px-5.5 py-2.5 hover:bg-primary/85 transition-colors"
          >
            Subscribe
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-dark transition-all ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark transition-all ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden absolute left-0 right-0 top-full bg-light/95 backdrop-blur-xl border-b border-dark/8 px-7 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-primary text-sm font-semibold transition-colors hover:text-primary ${
                pathname.startsWith(link.href)
                  ? "text-primary"
                  : "text-[#57534E]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#subscribe"
            className="font-primary text-sm font-bold text-white bg-primary px-5 py-2.5 text-center hover:bg-primary/85 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Subscribe
          </Link>
        </nav>
      )}
    </header>
  );
}
