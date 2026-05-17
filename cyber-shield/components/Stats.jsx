"use client";

import CountUp from "react-countup";

export default function Stats() {

  const stats = [
    {
      value: 10000,
      label: "Threats Blocked"
    },
    {
      value: 500,
      label: "Businesses Protected"
    },
    {
      value: 99,
      label: "AI Accuracy"
    }
  ];

  return (

    <section className="py-32 px-10">

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {stats.map((item, i) => (

          <div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-12 text-center hover:-translate-y-3 transition duration-500"
          >

            <h2 className="text-6xl font-black text-green-400">

              <CountUp
                end={item.value}
                duration={3}
              />

              +

            </h2>

            <p className="mt-4 text-xl text-gray-400">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}