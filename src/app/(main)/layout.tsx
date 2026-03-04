import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive } from "@/src/lib/sanity/live";
import DisableDraftMode from "@/src/components/DisableDraftMode";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <>
      {children}
      <SanityLive />
      {isDraftMode && (
        <>
          <VisualEditing />
          <DisableDraftMode />
        </>
      )}
    </>
  );
}
