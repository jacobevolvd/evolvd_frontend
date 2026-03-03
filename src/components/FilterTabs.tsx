import Link from "next/link";

interface FilterItem {
  title: string;
  slug: { current: string };
}

interface FilterTabsProps {
  items: FilterItem[];
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
        className={`px-4.5 py-2 border font-secondary text-[13px] font-semibold transition-all ${
          active === "All"
            ? "border-primary bg-primary/10 text-primary"
            : "border-dark/8 bg-transparent text-[#57534E] hover:border-primary/40"
        }`}
      >
        All
      </Link>
      {items.map((item) => (
        <Link
          key={item.slug.current}
          href={`${basePath}?${paramName}=${encodeURIComponent(item.slug.current)}`}
          className={`px-4.5 py-2 border font-secondary text-[13px] font-semibold transition-all ${
            active === item.slug.current
              ? "border-primary bg-primary/10 text-primary"
              : "border-dark/8 bg-transparent text-[#57534E] hover:border-primary/40"
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
