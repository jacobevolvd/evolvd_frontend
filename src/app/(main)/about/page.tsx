import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import Image from "next/image";
import NewsletterSignup from "@/src/components/NewsletterSignup";

const timeline = [
  {
    role: "Leading product design for AI-powered workflows",
    co: "Rapidflare.ai",
    note: "Started in petroleum and industrial IoT",
  },
  {
    role: "Drove product-led growth initiatives for CRM",
    co: "Freshworks Inc",
    note: "Aviation systems and safety-critical interfaces",
  },
  {
    role: "Shaped the Creative Cloud desktop experience",
    co: "Adobe",
    note: "Enterprise SaaS at global scale",
  },
  {
    role: "Built products across Microsoft's ecosystem",
    co: "Microsoft",
    note: "Retail, fitness wearables, and consumer products",
  },
  {
    role: "Reduced workflow complexity by 74%",
    co: "Avigilon (Motorola company)",
    note: "Scaling products across Southeast Asia and India",
  },
  {
    role: "Designed connected fitness experiences",
    co: "Nike",
    note: "Enterprise product strategy",
  },
  {
    role: "Revolutionized aviation fleet management systems",
    co: "Jeppesen, a Boeing company",
    note: "Building the platform",
  },
  {
    role: "Pioneered smart home energy monitoring",
    co: "Schneider Electric",
    note: "Building the platform",
  },
  {
    role: "Led digital transformation for one of America's largest food retailers",
    co: "Giant Eagle",
    note: "Building the platform",
  },
];

const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/arunjacobk/" },
  { name: "Twitter / X", url: "https://x.com/productnatives" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />

      <div className="pt-[100px]">
        {/* Hero / About */}
        <section className="pt-15 pb-25 px-7 bg-light">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex gap-16 items-start flex-wrap">
              {/* Photo */}
              <div
                className="relative flex-none w-[320px] h-[420px]"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to right, black 60%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              >
                <Image
                  src="/arun_2.jpg"
                  alt="Arun Jacob"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bio */}
              <div className="flex-1 sm:min-w-[400px]">
                <div className="section-label mb-4">About</div>
                <h1 className="font-primary text-[clamp(36px,5vw,52px)] font-extrabold text-dark tracking-[-2px] leading-none mb-6">
                  Arun Jacob
                </h1>
                <p className="font-secondary text-base text-[#57534E] leading-[1.75] mb-4">
                  I&apos;ve spent 20 years designing and shipping products
                  across some of the most demanding industries in the world:
                  petroleum, aviation, enterprise SaaS, retail, IoT, fitness
                  wearables, and ride-hailing. I&apos;ve worked inside companies
                  like Adobe, Boeing, Nike, Microsoft, Grab, and Freshworks.
                </p>
                <p className="font-secondary text-base text-[#57534E] leading-[1.75] mb-4">
                  The one pattern I&apos;ve seen repeat everywhere: talented
                  teams building the wrong thing. Not because they lack skill,
                  but because they lack alignment. That observation became a
                  book (MisAligned), a framework (the 0-to-1 system), and
                  eventually this platform: ProductOS.
                </p>
                <p className="font-secondary text-base text-[#57534E] leading-[1.75] mb-6">
                  My mission is simple: help founders, PMs, and designers build
                  products people actually need. Through writing, frameworks,
                  community, and eventually structured education.
                </p>
                <div className="flex gap-6 flex-wrap">
                  {socials.map((s) => (
                    <Link
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-secondary text-sm font-bold text-primary"
                    >
                      {s.name} &#8599;
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-25 px-7 bg-light">
          <div className="max-w-[1100px] mx-auto">
            {/* Career Timeline */}
            <div className="mb-20">
              <div className="section-label mb-4">Career Timeline</div>
              <h2 className="font-primary text-[28px] font-extrabold text-dark tracking-[-0.5px] mb-8">
                Two decades of building.
              </h2>
              {timeline.map((t, i) => (
                <div
                  key={i}
                  className="py-4.5 border-b border-dark/8 grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4 items-center"
                >
                  <div>
                    <span className="font-primary text-[15px] font-bold text-dark">
                      {t.role}
                    </span>
                    <span className="font-secondary text-sm text-primary ml-2.5">
                      {t.co}
                    </span>
                  </div>
                  {/* <span className="font-secondary text-sm text-[#57534E] hidden sm:block">
                    {t.note}
                  </span> */}
                </div>
              ))}
            </div>

            {/* What is ProductOS */}
            <div className="p-12 bg-[#F2EDE6] border border-dark/8 mb-10">
              <div className="section-label mb-4">The Platform</div>
              <h2 className="font-primary text-[28px] font-extrabold text-dark tracking-[-0.5px] mb-4">
                What is ProductOS?
              </h2>
              <p className="font-secondary text-base text-[#57534E] leading-[1.75] mb-3">
                ProductOS is everything I&apos;ve learned about building
                products, packaged into a system anyone can use. It includes a
                weekly newsletter, a library of frameworks and workbooks (The
                Vault), a book (MisAligned), a community for builders (The
                Forge), and soon structured courses.
              </p>
              <p className="font-secondary text-base text-[#57534E] leading-[1.75]">
                The business entity behind it is FoundrEvolved. Think of Arun
                Jacob as the voice and ProductOS as the toolkit. All roads lead
                here.
              </p>
            </div>

            {/* Newsletter CTA */}
            <div className="text-center py-12">
              <h2 className="font-primary text-[28px] font-extrabold text-dark tracking-[-0.5px] mb-3">
                Stay in the loop.
              </h2>
              <p className="font-secondary text-[15px] text-[#57534E] mb-7">
                One practical product lesson every week. Join 1,200+ builders.
              </p>
              <div className="flex justify-center">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
