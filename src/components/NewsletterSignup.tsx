"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  dark?: boolean;
  buttonText?: string;
  placeholder?: string;
}

export default function NewsletterSignup({
  dark = false,
  buttonText = "Join 1200+ product thinkers",
  placeholder = "Enter your email",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`max-w-[480px] w-full px-5 py-3.5 border-[1.5px] ${dark ? "border-white/10 bg-white/4" : "border-dark/10 bg-white"}`}
      >
        <p
          className={`font-secondary text-sm font-medium ${dark ? "text-light" : "text-dark"}`}
        >
          You&apos;re in! Check your inbox to confirm.
        </p>
      </div>
    );
  }

  return (
    <div>
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
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className={`flex-1 px-5 py-3.5 border-none outline-none bg-transparent font-primary text-sm font-medium ${
            dark
              ? "text-light placeholder:text-light/30"
              : "text-dark placeholder:text-dark/30"
          }`}
        />
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="px-6 py-3.5 bg-primary text-white font-primary text-[13px] font-bold whitespace-nowrap hover:bg-primary/85 transition-colors cursor-pointer disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing..." : buttonText}
        </button>
      </div>
      {status === "error" && (
        <p
          className={`mt-2 font-secondary text-xs font-medium ${dark ? "text-red-400" : "text-red-500"}`}
        >
          {errorMsg}
        </p>
      )}
    </div>
  );
}
