import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import FilterTabs from "@/src/components/FilterTabs";

const resources = [
  {
    type: "Frameworks",
    title: "The 0-to-1 Framework",
    desc: "A complete system for taking product ideas from raw concept to first paying customer. Covers validation, prototyping, launch, and iteration.",
    status: "Free",
    gated: false,
  },
  {
    type: "Frameworks",
    title: "Product Lifecycle Model",
    desc: "Six stages every product goes through: Idea, Validate, Ship, Sell, Scale, Sustain. Know where you are and what to do next.",
    status: "Free",
    gated: false,
  },
  {
    type: "Frameworks",
    title: "The MisAlignment Model",
    desc: "Diagnose the three types of alignment failure that kill products: Vision, Execution, and Market misalignment.",
    status: "Email-gated",
    gated: true,
  },
  {
    type: "Frameworks",
    title: "Decision Velocity Framework",
    desc: "How to make product decisions faster without sacrificing quality. The framework I used at Nike and Grab.",
    status: "Email-gated",
    gated: true,
  },
  {
    type: "Workbooks",
    title: "0-to-1 Workbook",
    desc: "40-page hands-on workbook. Every exercise you need to go from idea to validated product. Designed for founders and PMs.",
    status: "Email-gated",
    gated: true,
  },
  {
    type: "Workbooks",
    title: "Product Strategy Brief Template",
    desc: "The one-page strategy document I wish every PM would fill out before writing a single user story.",
    status: "Free",
    gated: false,
  },
  {
    type: "Templates",
    title: "OKR Worksheet for Product Teams",
    desc: "Stop writing bad OKRs. This worksheet forces clarity on what you're measuring and why.",
    status: "Coming Soon",
    gated: false,
  },
  {
    type: "Templates",
    title: "Design Review Checklist",
    desc: "22 questions to ask before shipping any design. Covers usability, accessibility, business alignment, and technical feasibility.",
    status: "Coming Soon",
    gated: false,
  },
];

const types = ["Frameworks", "Workbooks", "Templates"];

export default async function VaultPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const active = type || "All";
  const filtered =
    active === "All"
      ? resources
      : resources.filter((r) => r.type === active);

  return (
    <div className="min-h-screen w-full">
      <Header />

      <div className="pt-[100px]">
        {/* Header */}
        <section className="pt-15 pb-10 px-7 bg-light">
          <div className="max-w-[1100px] mx-auto">
            <div className="section-label mb-4">The Vault</div>
            <h1 className="font-primary text-[clamp(36px,5vw,56px)] font-extrabold text-dark tracking-[-2px] mb-3">
              Tools that work.
            </h1>
            <p className="font-secondary text-[17px] text-[#57534E] leading-relaxed max-w-[500px] mb-10">
              Frameworks, workbooks, and templates from 20 years of shipping.
              Built for practitioners, not academics.
            </p>

            <FilterTabs
              items={types}
              active={active}
              basePath="/vault"
              paramName="type"
            />
          </div>
        </section>

        {/* Resource grid */}
        <section className="pb-25 px-7 bg-light">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((r) => (
                <div
                  key={r.title}
                  className="p-7 border border-dark/8 bg-white flex flex-col transition-all hover:border-primary/40 cursor-pointer"
                >
                  {/* Type + status */}
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-secondary text-[10px] font-bold text-primary tracking-[1.5px] uppercase">
                      {r.type}
                    </span>
                    <span
                      className={`font-secondary text-[10px] font-bold tracking-[1px] uppercase px-2.5 py-0.5 border ${
                        r.status === "Coming Soon"
                          ? "text-dark/30 border-dark/8"
                          : r.gated
                            ? "text-secondary border-secondary/30"
                            : "text-primary border-primary/30"
                      }`}
                    >
                      {r.status}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <h3 className="font-primary text-[19px] font-bold text-dark tracking-[-0.3px] mb-2">
                    {r.title}
                  </h3>
                  <p className="font-secondary text-sm text-[#57534E] leading-relaxed flex-1 mb-4.5">
                    {r.desc}
                  </p>

                  {/* Action */}
                  <span
                    className={`font-secondary text-[13px] font-bold ${
                      r.status === "Coming Soon"
                        ? "text-dark/30"
                        : "text-primary"
                    }`}
                  >
                    {r.status === "Coming Soon"
                      ? "Notify me when available"
                      : r.gated
                        ? "Download (email required) \u2192"
                        : "Download free \u2192"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
