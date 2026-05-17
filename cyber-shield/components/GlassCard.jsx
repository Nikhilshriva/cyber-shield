export default function GlassCard({ children }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
      {children}
    </div>
  );
}