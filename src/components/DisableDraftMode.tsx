"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/src/app/actions";

export default function DisableDraftMode() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Hide the button when inside Presentation Tool iframe
  useEffect(() => {
    if (window === parent) return;
    const style = document.createElement("style");
    style.textContent = "#disable-draft { display: none }";
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <button
      id="disable-draft"
      onClick={() =>
        startTransition(async () => {
          await disableDraftMode();
          router.refresh();
        })
      }
      className="fixed bottom-4 right-4 z-50 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm shadow-lg hover:bg-gray-800 transition-colors"
    >
      {isPending ? "Exiting..." : "Exit Preview Mode"}
    </button>
  );
}
