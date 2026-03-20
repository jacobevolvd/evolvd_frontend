"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NewsletterSignupProps {
  dark?: boolean;
  buttonText?: string;
  placeholder?: string;
  onSuccess?: () => void;
}

export function SuccessPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-dark/50" />
      <div className="relative bg-white p-8 max-w-[400px] w-full text-center shadow-[0_24px_64px_rgba(0,0,0,0.15)] rounded-xl">
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-2xl font-bold bg-primary/10 text-primary">
          &#10003;
        </div>
        <h3 className="font-primary text-xl font-bold text-dark mb-2">
          You&apos;re in!
        </h3>
        <p className="font-secondary text-sm text-[#57534E] leading-relaxed mb-6">
          Check your inbox to confirm your subscription.
        </p>
        <button
          onClick={onClose}
          className="px-7 py-3 bg-primary text-white font-primary text-sm font-bold hover:bg-primary/85 transition-colors cursor-pointer"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default function NewsletterSignup({
  dark = false,
  buttonText = "Join 1200+ product thinkers",
  placeholder = "Enter your email",
  onSuccess,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const pathname = usePathname();

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

  const handlePopupClose = () => {
    if (pathname === "/subscribe") {
      router.push("/");
    } else {
      setStatus("idle");
      onSuccess?.();
    }
  };

  return (
    <div>
      {status === "success" && <SuccessPopup onClose={handlePopupClose} />}
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
          className="px-6 py-3.5 bg-primary text-white font-primary text-sm font-bold whitespace-nowrap hover:bg-primary/85 transition-colors cursor-pointer disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing..." : buttonText}
        </button>
      </div>
      {status === "error" && (
        <p
          className={`mt-2 font-secondary text-sm font-medium ${dark ? "text-red-400" : "text-red-500"}`}
        >
          {errorMsg}
        </p>
      )}
    </div>
  );
}
