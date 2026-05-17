export default function TrustBadges() {

  const badges = [
    "ISO 27001",
    "GDPR Compliant",
    "AI Security",
    "24/7 Monitoring"
  ];

  return (
    <section className="py-20 px-10">

      <div className="flex flex-wrap justify-center gap-6">

        {badges.map((badge, i) => (

          <div
            key={i}
            className="px-8 py-4 rounded-2xl border border-green-400/20 bg-green-400/10 text-green-400 backdrop-blur-xl"
          >
            {badge}
          </div>

        ))}

      </div>

    </section>
  );
}