"use client";

import { useState } from "react";
import Link from "next/link";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="flex flex-col justify-center gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {menuOpen && (
        <nav className="absolute left-0 right-0 top-full bg-white px-8 pb-4 border-t border-gray-100 pt-4 flex flex-col gap-4 text-sm z-20">
          <Link
            href="#"
            className="hover:opacity-70"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:opacity-70"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link href="/tools" className="hover:opacity-70">
            Tools
          </Link>
          {/* <div>
            <button
              className="hover:opacity-70 flex items-center gap-1"
              onClick={() => setToolsOpen(!toolsOpen)}
            >
              Tools
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${toolsOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {toolsOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link
                  href="#"
                  className="hover:opacity-70"
                  onClick={() => setMenuOpen(false)}
                >
                  Frameworks
                </Link>
                <Link
                  href="#"
                  className="hover:opacity-70"
                  onClick={() => setMenuOpen(false)}
                >
                  Anythings
                </Link>
                <Link
                  href="#"
                  className="hover:opacity-70"
                  onClick={() => setMenuOpen(false)}
                >
                  Integrations
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            <a href="#" className="hover:opacity-70" aria-label="Instagram">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-70" aria-label="Threads">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.186 24h-.007C5.965 24 2.615 20.272 2.615 14.83V9.17C2.615 3.728 5.965 0 12.186 0h.007c4.956 0 8.41 2.608 9.614 6.958l-3.482.91C17.55 5.12 15.392 3.482 12.193 3.482c-4.2 0-6.096 2.94-6.096 5.688v5.66c0 2.748 1.896 5.688 6.096 5.688 3.2 0 5.357-1.638 6.133-4.388l3.481.91C20.604 21.392 17.149 24 12.186 24Z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-70" aria-label="X">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div> */}
        </nav>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="relative px-8 py-4 md:px-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-black" />
          <div className="w-4 h-4 bg-black rounded-full" />
          <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-16 border-b-black" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:opacity-70">
            Home
          </Link>
          <Link href="/blog" className="hover:opacity-70">
            Blog
          </Link>
          <Link href="/tools" className="hover:opacity-70">
            Tools
          </Link>
          {/* // dropdown
          <div className="relative group">
            <button className="hover:opacity-70 flex items-center gap-1">
              Tools
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-t-lg"
              >
                Frameworks
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-50"
              >
                Anythings
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-b-lg"
              >
                Integrations
              </Link>
            </div>
          </div> */}
        </nav>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:opacity-70" aria-label="Instagram">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
          <a href="#" className="hover:opacity-70" aria-label="Threads">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.186 24h-.007C5.965 24 2.615 20.272 2.615 14.83V9.17C2.615 3.728 5.965 0 12.186 0h.007c4.956 0 8.41 2.608 9.614 6.958l-3.482.91C17.55 5.12 15.392 3.482 12.193 3.482c-4.2 0-6.096 2.94-6.096 5.688v5.66c0 2.748 1.896 5.688 6.096 5.688 3.2 0 5.357-1.638 6.133-4.388l3.481.91C20.604 21.392 17.149 24 12.186 24Z" />
            </svg>
          </a>
          <a href="#" className="hover:opacity-70" aria-label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
