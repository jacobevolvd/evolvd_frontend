import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-8 py-12 md:px-16 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-black" />
          <div className="w-4 h-4 bg-black rounded-full" />
          <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-16 border-b-black" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-black">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connection</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-black">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-black">
                  Frameworks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
