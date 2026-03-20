"use client";

import { useEffect, useState } from "react";
import NewsletterSignup from "@/src/components/NewsletterSignup";
import { NEWSLETTER_MODAL_DELAY } from "@/src/constants";

const SESSION_KEY = "newsletter_modal_shown";

export default function NewsletterModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, NEWSLETTER_MODAL_DELAY);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-dark/50"
        onClick={() => setVisible(false)}
      />
      <div className="relative bg-light max-w-[480px] w-full p-10 shadow-[0_24px_64px_rgba(0,0,0,0.15)]">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-5 font-primary text-xl text-dark/30 hover:text-dark transition-colors cursor-pointer"
        >
          &times;
        </button>
        <div className="section-label mb-4">Stay in the loop</div>
        <h2 className="font-primary text-[26px] font-extrabold text-dark tracking-[-0.5px] leading-tight mb-2">
          Enjoying the read?
        </h2>
        <p className="font-secondary text-sm text-[#57534E] leading-relaxed mb-7">
          Get one practical product lesson every week. Join 1,200+ founders,
          PMs, and designers getting smarter every Friday.
        </p>
        <NewsletterSignup
          placeholder="you@company.com"
          buttonText="Subscribe"
          onSuccess={() => setVisible(false)}
        />
      </div>
    </div>
  );
}
