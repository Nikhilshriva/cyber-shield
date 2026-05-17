export default function AdvancedFeatures() {

  const items = [
    {
      title: "AI Detection",
      desc: "Detect threats instantly using machine learning."
    },
    {
      title: "Cloud Security",
      desc: "Secure your cloud infrastructure in real-time."
    },
    {
      title: "Zero Trust",
      desc: "Advanced enterprise-level protection systems."
    }
  ];

  return (
    <section className="py-40 px-10">

      <h2 className="text-5xl font-bold text-center mb-20">
        Advanced Protection
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {items.map((item, i) => (

          <div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 hover:-translate-y-3 transition duration-500"
          >

            <div className="w-16 h-16 rounded-2xl bg-green-400/20 flex items-center justify-center text-3xl">
              🛡️
            </div>

            <h3 className="mt-8 text-3xl font-bold text-green-400">
              {item.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}