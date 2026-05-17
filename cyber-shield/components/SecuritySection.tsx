export default function SecuritySection() {

  const security = [
    {
      title: "99.9% Threat Detection",
      value: "99%"
    },
    {
      title: "Cloud Infrastructure Protection",
      value: "95%"
    },
    {
      title: "Zero-Day Attack Prevention",
      value: "92%"
    }
  ];

  return (
    <section className="py-40 px-10">

      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <h2 className="text-5xl md:text-6xl font-black">
            Built for
            <span className="text-green-400"> Enterprise Security</span>
          </h2>

          <p className="mt-8 text-xl text-gray-400">
            AI-powered cybersecurity infrastructure trusted worldwide.
          </p>

        </div>

        <div className="mt-20 space-y-10">

          {security.map((item, i) => (

            <div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
            >

              <div className="flex justify-between mb-4">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <span className="text-green-400 font-bold">
                  {item.value}
                </span>

              </div>

              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-green-400 rounded-full"
                  style={{ width: item.value }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}