import Link from "next/link";

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
  return (
    <div className="flex gap-2 mb-10 flex-wrap">
      <Link
        href={basePath}
        className={`px-4.5 py-2 border font-secondary text-sm font-semibold transition-all ${
          active === "All"
            ? "border-primary bg-primary/10 text-primary"
            : "border-dark/8 bg-transparent text-[#57534E] hover:border-primary/40"
        }`}
      >
        All
      </Link>
      {items.map((item) => {
        const label = typeof item === "string" ? item : item.title;
        const value = typeof item === "string" ? item : item.slug.current;
        return (
          <Link
            key={value}
            href={`${basePath}?${paramName}=${encodeURIComponent(value)}`}
            className={`px-4.5 py-2 border font-secondary text-sm font-semibold transition-all ${
              active === value
                ? "border-primary bg-primary/10 text-primary"
                : "border-dark/8 bg-transparent text-[#57534E] hover:border-primary/40"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
