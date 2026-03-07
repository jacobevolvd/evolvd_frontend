"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

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

const reassurances = [
  { icon: "\u2713", text: "Free forever" },
  { icon: "\u2713", text: "No spam" },
  { icon: "\u2713", text: "Unsubscribe in 1 click" },
];

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = useCallback(async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the terms to continue.");
      return;
    }
    setError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setStatus("idle");
        return;
      }

      setStatus("success");
      setEmail("");
      setAgreed(false);
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  }, [email, agreed]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleSubmit();
    },
    [handleSubmit],
  );

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
          <div className="font-secondary text-[11px] font-bold tracking-[3px] uppercase text-primary mb-7 flex items-center gap-3">
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
                <div className="font-secondary text-[13px] font-bold text-light mb-0.5">
                  {b.title}
                </div>
                <div className="font-secondary text-xs text-light/30 leading-snug">
                  {b.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Form panel */}
      <div className="flex-1 bg-light px-10 py-12 lg:px-14 flex flex-col justify-center">
        <div className="max-w-[420px] mx-auto w-full">
          <h2 className="font-primary text-[clamp(24px,3vw,32px)] font-extrabold text-dark tracking-[-1px] mb-2 leading-tight">
            Subscribe to ProductOS
          </h2>
          <p className="font-secondary text-[15px] text-[#57534E] leading-snug mb-9">
            Free weekly newsletter. Unsubscribe anytime.
          </p>

          {/* Email input */}
          <div className="mb-4">
            <label className="font-secondary text-[11px] font-bold text-[#57534E] tracking-[1.5px] uppercase block mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyDown}
              className={`w-full px-4.5 py-4 border-[1.5px] bg-light text-dark font-secondary text-[15px] font-medium outline-none transition-all ${
                error && !email.includes("@")
                  ? "border-[#EF4444]"
                  : focused
                    ? "border-primary shadow-[0_0_0_3px_rgba(200,75,49,0.12)]"
                    : "border-dark/8"
              }`}
            />
          </div>

          {/* Checkbox */}
          <div className="mb-6">
            <label
              className="flex items-start gap-3 cursor-pointer select-none"
              onClick={() => {
                setAgreed(!agreed);
                setError("");
              }}
            >
              <div
                className={`w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center border-[1.5px] transition-all ${
                  error && !agreed
                    ? "border-[#EF4444]"
                    : agreed
                      ? "border-primary bg-primary"
                      : "border-dark/8"
                }`}
              >
                {agreed && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className="font-secondary text-[13px] text-[#57534E] leading-snug">
                I agree to receive the ProductOS newsletter and accept the{" "}
                <Link
                  href="/privacy"
                  className="text-primary underline underline-offset-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms"
                  className="text-primary underline underline-offset-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  terms of service
                </Link>
                .
              </span>
            </label>
          </div>

          {/* Error */}
          {error && (
            <div className="font-secondary text-[13px] font-semibold text-[#EF4444] mb-4 flex items-center gap-1.5">
              <span>&#9888;</span> {error}
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="w-full py-4 bg-primary text-white font-secondary text-[15px] font-bold tracking-wide hover:bg-primary/85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,75,49,0.12)] transition-all cursor-pointer disabled:opacity-60"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe \u2192"}
          </button>

          {status === "success" && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 font-secondary text-sm text-green-700 font-medium">
              You&apos;re in! Check your inbox to confirm your subscription.
            </div>
          )}

          {/* Reassurance */}
          <div className="mt-7 flex gap-4 flex-wrap">
            {reassurances.map((item) => (
              <div key={item.text} className="flex items-center gap-1.5">
                <span className="font-secondary text-xs font-bold text-primary">
                  {item.icon}
                </span>
                <span className="font-secondary text-xs font-medium text-dark/30">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 border border-dark/8 bg-[#F2EDE6]">
            <div className="font-primary text-xl text-primary/25 leading-none mb-2.5">
              &ldquo;
            </div>
            <p className="font-secondary text-sm text-[#57534E] leading-relaxed italic mb-3.5">
              The most actionable product newsletter I&apos;ve read in years.
              Every issue has at least one insight I can apply the same week.
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-primary/10 flex items-center justify-center font-secondary text-xs font-bold text-primary">
                S
              </div>
              <div>
                <div className="font-secondary text-[13px] font-bold text-dark">
                  Sarah K.
                </div>
                <div className="font-secondary text-[11px] font-medium text-dark/30">
                  Product Lead, Series B Startup
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
