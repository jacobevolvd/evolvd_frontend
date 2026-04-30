import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/home/HeroSection";
import AboutSection from "@/src/components/home/AboutSection";
import BookSection from "@/src/components/home/BookSection";
import VaultSection from "@/src/components/home/VaultSection";
import CoursesSection from "@/src/components/home/CoursesSection";
import ForgeSection from "@/src/components/home/ForgeSection";
import ArticlesSection from "@/src/components/home/ArticlesSection";
import FinalCTASection from "@/src/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "ProductNatives — Build Products People Actually Need",
  description:
    "Frameworks, lessons, and community for founders, PMs, and designers who build products people love. Weekly insights from Arun Jacob.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ProductNatives — Build Products People Actually Need",
    description:
      "Frameworks, lessons, and community for founders, PMs, and designers who build products people love.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BookSection />
        {/* <VaultSection /> */}
        {/* <CoursesSection /> */}
        {/* <ForgeSection /> */}
        <ArticlesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
