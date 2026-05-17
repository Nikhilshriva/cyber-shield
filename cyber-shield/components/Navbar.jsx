export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex items-center justify-between bg-black/30 backdrop-blur-xl border-b border-white/10">

      <h1 className="text-2xl font-bold text-green-400">
        CyberShield
      </h1>

      <div className="flex gap-8 text-white">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-green-400 text-black px-5 py-2 rounded-xl">
        Book Demo
      </button>

    </nav>
  );
}