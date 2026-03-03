import Link from "next/link";

interface FilterTabsProps {
  items: string[];
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
      {["All", ...items].map((item) => (
        <Link
          key={item}
          href={
            item === "All"
              ? basePath
              : `${basePath}?${paramName}=${encodeURIComponent(item)}`
          }
          className={`px-4.5 py-2 border font-secondary text-[13px] font-semibold transition-all ${
            active === item
              ? "border-primary bg-primary/10 text-primary"
              : "border-dark/8 bg-transparent text-[#57534E] hover:border-primary/40"
          }`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
