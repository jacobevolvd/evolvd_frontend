export default function NewsletterSignup() {
  return (
    <section className="flex flex-col items-center px-8 py-8">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="email"
          placeholder="name@framer.com"
          className="h-10 px-4 border border-gray-300 rounded-md text-sm w-56 outline-none focus:border-gray-500"
        />
        <button className="h-10 px-5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors w-full">
          Email Address
        </button>
      </div>
      <p className="text-gray-400 text-lg mt-3">Get fresh ideas.</p>
    </section>
  );
}
