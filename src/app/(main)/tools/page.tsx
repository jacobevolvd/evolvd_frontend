import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Link from "next/link";

const frameworks = [
  { category: "Frameworks", title: "Modern UI Kit", slug: "modern-ui-kit" },
  { category: "Ebooks", title: "Essential Guide", slug: "essential-guide" },
  {
    category: "Downloadables",
    title: "Starter Assets",
    slug: "starter-assets",
  },
];

const ebooks = [
  {
    title: "React Pro.",
    description: "A lightweight, modular UI framework for fast builds.",
    slug: "react-pro",
  },
  {
    title: "UX Mastery.",
    description: "An ebook to transform your product design strategy.",
    slug: "ux-mastery",
  },
  {
    title: "Icon Pack.",
    description: "A downloadable collection of high-quality SVG icons.",
    slug: "icon-pack",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-primary">
      <Header />

      {/* Frameworks Section */}
      <section className="px-8 py-12 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Frameworks</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {frameworks.map((item) => (
            <Link href={`/tools/${item.slug}`} key={item.slug} className="group">
              <div className="aspect-square bg-gray-100 rounded-2xl" />
              <p className="text-sm text-gray-400 mt-4">{item.category}</p>
              <h2 className="text-sm font-bold mt-1 group-hover:underline">
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      {/* Ebooks Section */}
      <section className="px-8 py-12 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">Ebooks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {ebooks.map((item) => (
            <Link href={`/tools/${item.slug}`} key={item.slug} className="group">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl" />
              <h3 className="text-sm font-bold mt-4 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
