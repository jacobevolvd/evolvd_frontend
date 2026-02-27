import Header from "@/src/components/Header";
import NewsletterSignup from "@/src/components/NewsletterSignup";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-primary">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center px-8 pt-12 pb-8 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Modern solutions.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 text-center mt-1 italic">
          Designing the future in wireframe.
        </p>
        <div className="w-full max-w-2xl h-48 md:h-64 bg-gray-100 rounded-2xl mt-10" />
      </section>

      <NewsletterSignup />

      {/* Blog Section */}
      <section className="px-8 py-12 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="text-gray-400 text-sm mt-1">Ideas in motion.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Unlocking the Creator Economy: What to Expect",
              date: "Jun 15, 2024",
            },
            {
              title: "How to Craft a Compelling Hero Section",
              date: "Jun 10, 2024",
            },
            {
              title: "Building Your First Digital Book for Creators",
              date: "Jun 5, 2024",
            },
          ].map((post) => (
            <a href="#" key={post.title} className="group">
              <div className="aspect-4/3 bg-gray-100 rounded-xl" />
              <h3 className="text-sm font-semibold mt-3 group-hover:underline">
                {post.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{post.date}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Misaligned / Feature Section */}
      <section className="px-8 py-16 md:px-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="h-full flex flex-col justify-end">
            <h2 className="text-5xl md:text-7xl pl-2 font-bold leading-none">
              Misaligned
            </h2>
            <p className="text-gray-500 text-sm mt-6 leading-relaxed max-w-sm">
              Dive into cutting-edge design with the Modern Wireframe Book.
              Explore step-by-step guidance, practical frameworks, and
              contemporary insights for next-generation UI/UX projects. This
              resource is crafted to help creators, designers, and startups
              quickly build attractive, high-quality interfaces using proven
              structures and inspiring visuals.
            </p>
          </div>
          <div className="aspect-3/4 bg-gray-100 rounded-2xl" />
        </div>
      </section>

      {/* Resources Section */}
      <section className="px-8 py-16 md:px-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 gap-y-8 items-center">
          <div className="bg-gray-100 rounded-xl w-full h-30" />
          <div className="bg-gray-100 rounded-xl col-span-2 h-30 w-full" />
          <div className="w-full col-span-3 flex justify-between items-center flex-col sm:flex-row">
            <p className="text-[clamp(16px,8cqw,90px)] font-bold text-gray-100 text-center leading-none select-none">
              Resources.
            </p>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">Explore all resources.</h2>
              <p className="text-gray-400 mt-2">
                Discover which fits your
                <br />
                workflow best.
              </p>
              <button className="mt-4 px-5 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
                See Resources
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl col-span-2 h-30 w-full" />
          <div className="bg-gray-100 rounded-xl w-full h-30" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
