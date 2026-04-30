"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface FilterItem {
  title: string;
  slug: { current: string };
}

interface FilterTabsProps {
  items: (FilterItem | string)[];
  active: string;
  basePath: string;
  paramName: string;
}

export default function FilterTabs({
  items,
  active,
  basePath,
  paramName,
}: FilterTabsProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLabel =
    active === "All"
      ? "All Categories"
      : items
          .map((item) => (typeof item === "string" ? { label: item, value: item } : { label: item.title, value: item.slug.current }))
          .find((i) => i.value === active)?.label ?? active;

  function handleSelect(value: string) {
    setOpen(false);
    if (value === "All") {
      router.push(basePath);
    } else {
      router.push(`${basePath}?${paramName}=${encodeURIComponent(value)}`);
    }
  }

  return (
    <div ref={ref} className="relative inline-block mb-10">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 px-5 py-2.5 border font-primary text-sm font-semibold transition-all ${
          active !== "All"
            ? "border-primary bg-primary/10 text-primary"
            : "border-dark/8 bg-transparent text-[#57534E] hover:border-primary/40"
        }`}
      >
        {activeLabel}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1 z-50 min-w-[260px] border border-dark/8 bg-white shadow-lg max-h-[320px] overflow-y-auto">
          <button
            onClick={() => handleSelect("All")}
            className={`w-full text-left px-5 py-2.5 font-primary text-sm font-semibold transition-colors ${
              active === "All"
                ? "text-primary bg-primary/5"
                : "text-[#57534E] hover:bg-[#F2EDE6]"
            }`}
          >
            All Categories
          </button>
          {items.map((item) => {
            const label = typeof item === "string" ? item : item.title;
            const value = typeof item === "string" ? item : item.slug.current;
            return (
              <button
                key={value}
                onClick={() => handleSelect(value)}
                className={`w-full text-left px-5 py-2.5 font-primary text-sm font-semibold transition-colors ${
                  active === value
                    ? "text-primary bg-primary/5"
                    : "text-[#57534E] hover:bg-[#F2EDE6]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
