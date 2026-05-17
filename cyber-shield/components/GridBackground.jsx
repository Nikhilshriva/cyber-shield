export default function GridBackground() {

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(to right, #00ff88 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

    </div>
  );
}