import Link from "next/link";

const footerColumns = {
  Content: [
    { label: "Blog", href: "/blog" },
    { label: "Newsletter", href: "#subscribe" },
    { label: "The Vault", href: "/vault" },
    { label: "Frameworks", href: "/vault" },
  ],
  Product: [
    { label: "MisAligned", href: "/book" },
    { label: "Courses (Soon)", href: "/" },
    { label: "The Forge", href: "/" },
  ],
  Connect: [
    { label: "About Arun", href: "/about" },
    { label: "Speaking", href: "/speaking" },
    { label: "Contact", href: "/about" },
    { label: "Media Kit", href: "/about" },
  ],
};

const socials = ["LinkedIn", "YouTube", "Twitter / X", "Instagram"];

export default function Footer() {
  return (
    <footer className="bg-[#F2EDE6] border-t border-dark/8 pt-18 pb-10 px-7">
      <div className="max-w-[1100px] mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_repeat(3,1fr)_0.8fr] gap-9 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline mb-3.5">
              <span className="font-primary text-lg font-extrabold text-dark">
                Product
              </span>
              <span className="font-primary text-lg font-extrabold text-primary">
                OS
              </span>
            </div>
            <p className="font-secondary text-sm text-[#57534E] leading-relaxed max-w-[200px]">
              Frameworks, lessons, and community for the people who build
              products.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerColumns).map(([category, links]) => (
            <div key={category}>
              <div className="font-secondary text-[11px] font-bold text-dark tracking-widest uppercase mb-4">
                {category}
              </div>
              <div className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-secondary text-sm text-[#57534E] hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Social column */}
          <div>
            <div className="font-secondary text-[11px] font-bold text-dark tracking-widest uppercase mb-4">
              Social
            </div>
            <div className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-secondary text-sm text-[#57534E] hover:text-primary transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark/8 pt-5 flex flex-wrap justify-between gap-2.5">
          <span className="font-secondary text-[13px] text-dark/35">
            &copy; {new Date().getFullYear()} ProductOS. Built by Arun Jacob.
          </span>
          <div className="flex gap-4.5">
            <Link
              href="/privacy"
              className="font-secondary text-[13px] text-dark/35 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-secondary text-[13px] text-dark/35 hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
