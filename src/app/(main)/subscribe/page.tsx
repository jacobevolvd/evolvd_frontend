import Link from "next/link";
import SubscribeForm from "@/src/components/SubscribeForm";

const benefits = [
  {
    icon: "\u25C8",
    title: "Weekly Frameworks",
    desc: "One actionable product lesson every Friday",
  },
  {
    icon: "\u25A4",
    title: "Free Resources",
    desc: "Workbooks, templates, and cheat sheets",
  },
  {
    icon: "\u2726",
    title: "Real War Stories",
    desc: "Lessons from Adobe, Boeing, Nike, and more",
  },
  {
    icon: "\u229E",
    title: "Early Access",
    desc: "First to know about courses and events",
  },
];

export default function SubscribePage() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* LEFT: Dark editorial panel */}
      <div className="relative flex-none lg:w-[46%] bg-dark px-10 py-12 lg:px-14 flex flex-col justify-between overflow-hidden">
        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(200,75,49,0.04) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Logo */}
        <div className="relative">
          <Link href="/" className="flex items-baseline">
            <span className="font-primary text-xl font-extrabold text-light tracking-tight">
              Product
            </span>
            <span className="font-primary text-xl font-extrabold text-primary tracking-tight">
              OS
            </span>
          </Link>
        </div>

        {/* Headline + Benefits */}
        <div className="relative py-12 lg:py-0">
          <div className="font-secondary text-sm font-bold tracking-[3px] uppercase text-primary mb-7 flex items-center gap-3">
            <span className="w-7 h-[1.5px] bg-primary inline-block" />
            Weekly Newsletter
          </div>

          <h1 className="font-primary text-[clamp(36px,4.5vw,56px)] font-extrabold text-light leading-none tracking-[-2.5px] mb-5">
            One lesson.
            <br />
            Every week.
            <br />
            <span className="text-primary">No fluff.</span>
          </h1>

          <p className="font-secondary text-base text-light/50 leading-relaxed max-w-[380px] mb-11">
            Practical product insights from 20 years of shipping at Adobe,
            Boeing, Nike, and beyond. Join 1,200+ founders, PMs, and designers
            getting smarter every Friday.
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-4 bg-primary/5 border border-light/8"
              >
                <div className="text-lg text-primary/50 mb-2">{b.icon}</div>
                <div className="font-secondary text-sm font-bold text-light mb-0.5">
                  {b.title}
                </div>
                <div className="font-secondary text-sm text-light/30 leading-snug">
                  {b.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Form panel */}
      <div className="flex-1 bg-light px-10 py-12 lg:px-14 flex flex-col justify-center">
        <SubscribeForm />
      </div>
    </div>
  );
}
