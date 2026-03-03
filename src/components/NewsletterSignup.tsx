"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  dark?: boolean;
  buttonText?: string;
  placeholder?: string;
}

export default function NewsletterSignup({
  dark = false,
  buttonText = "Join 1,200+ Builders",
  placeholder = "Enter your email",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`flex flex-col sm:flex-row max-w-[480px] w-full border-[1.5px] transition-colors ${
        focused
          ? "border-primary"
          : dark
            ? "border-white/10"
            : "border-dark/10"
      } ${dark ? "bg-white/4" : "bg-white"}`}
    >
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`flex-1 px-5 py-3.5 border-none outline-none bg-transparent font-secondary text-sm font-medium ${
          dark
            ? "text-light placeholder:text-light/30"
            : "text-dark placeholder:text-dark/30"
        }`}
      />
      <button className="px-6 py-3.5 bg-primary text-white font-secondary text-[13px] font-bold whitespace-nowrap hover:bg-primary/85 transition-colors cursor-pointer">
        {buttonText}
      </button>
    </div>
  );
}
