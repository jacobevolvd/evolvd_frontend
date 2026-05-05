import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Speaking — Arun Jacob",
  description:
    "Invite Arun Jacob to speak at your event. Topics include product strategy, 0-to-1 product development, building aligned teams, and lessons from 20 years at Adobe, Microsoft, Nike, and Boeing.",
  alternates: {
    canonical: "/speaking",
  },
  openGraph: {
    title: "Speaking — Arun Jacob | ProductNatives",
    description:
      "Invite Arun Jacob to speak at your event on product strategy, 0-to-1 development, and building aligned teams.",
    url: "/speaking",
    type: "website",
  },
};

const topics = [
  {
    title: "From MisAlignment to Market Fit",
    desc: "Why smart teams ship products nobody wants, and the diagnostic framework to fix it. Ideal for product conferences and leadership offsites.",
    duration: "45 min keynote",
  },
  {
    title: "The 0-to-1 Playbook",
    desc: "How to take a product from raw idea to first paying customer. A tactical, no-theory talk built for founders and early-stage teams.",
    duration: "30 min talk",
  },
  {
    title: "Building a Design-Led Product Culture",
    desc: "What it actually takes to make design a strategic function, not a service desk. Lessons from Adobe, Nike, and Freshworks.",
    duration: "45 min keynote",
  },
  {
    title: "Product Leadership in the AI Era",
    desc: "How product roles are evolving, what skills matter now, and what the next 5 years look like for PMs and designers.",
    duration: "30 min talk + Q&A",
  },
];

const pastEvents = [
  { event: "ProductCon", type: "Keynote", year: "2025" },
  { event: "DesignUp", type: "Workshop", year: "2024" },
  { event: "SaaSBOOMi", type: "Panel", year: "2024" },
  { event: "Figma Config (Side Event)", type: "Talk", year: "2024" },
];

export default function SpeakingPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />

      <div className="pt-[100px]">
        {/* Header */}
        <section className="relative min-h-screen flex items-center px-7">
          <Image
            src="/arun/arun_3.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/75" />
          <div className="relative max-w-[1100px] mx-auto w-full">
            <div className="section-label mb-4">Speaking</div>
            <h1 className="font-primary text-[clamp(36px,5vw,56px)] font-extrabold text-light tracking-[-2px] mb-3">
              Let&apos;s talk product.
            </h1>
            <p className="font-secondary text-[17px] text-light/60 leading-relaxed max-w-[520px]">
              Keynotes, panels, workshops, and fireside chats on product
              strategy, design leadership, and building things that matter.
              Available for in-person and virtual events.
            </p>
          </div>
        </section>

        <section className="py-25 px-7 bg-light">
          <div className="max-w-[1100px] mx-auto">
            {/* Talk Topics */}
            <h2 className="font-primary text-2xl font-extrabold text-dark tracking-[-0.5px] mb-6">
              Talk Topics
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-18">
              {topics.map((t, i) => (
                <div
                  key={i}
                  className="p-7 border border-dark/8 bg-white transition-colors hover:border-primary/40"
                >
                  <div className="flex justify-between items-start mb-2.5">
                    <h3 className="font-primary text-lg font-bold text-dark">
                      {t.title}
                    </h3>
                    <span className="font-secondary text-sm font-semibold text-dark/30 tracking-wide whitespace-nowrap ml-4">
                      {t.duration}
                    </span>
                  </div>
                  <p className="font-secondary text-sm text-[#57534E] leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Past Events */}
            <h2 className="font-primary text-2xl font-extrabold text-dark tracking-[-0.5px] mb-6">
              Past Events
            </h2>
            <div className="mb-18">
              {pastEvents.map((e, i) => (
                <div
                  key={i}
                  className="py-4 border-b border-dark/8 flex justify-between items-center"
                >
                  <div className="flex gap-5 items-center">
                    <span className="font-primary text-base font-bold text-dark">
                      {e.event}
                    </span>
                    <span className="font-secondary text-sm font-semibold text-primary tracking-[1px] uppercase">
                      {e.type}
                    </span>
                  </div>
                  <span className="font-secondary text-sm text-dark/30">
                    {e.year}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-12 bg-[#F2EDE6] border border-dark/8 text-center">
              <h2 className="font-primary text-[28px] font-extrabold text-dark tracking-[-0.5px] mb-3">
                Book Arun for your event
              </h2>
              <p className="font-secondary text-[15px] text-[#57534E] leading-relaxed max-w-[400px] mx-auto mb-7">
                For speaking inquiries, topic customization, or workshop
                bookings, reach out directly.
              </p>
              <a
                href="mailto:speaking@founderevolved.com"
                className="inline-block px-7 py-3.5 bg-primary text-white font-primary text-sm font-bold hover:bg-primary/85 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
