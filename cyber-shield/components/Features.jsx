"use client";

import { motion } from "framer-motion";

export default function Features() {

  const features = [
    {
      title: "AI Monitoring",
      desc: "Real-time AI-driven protection systems."
    },
    {
      title: "Cloud Security",
      desc: "Protect your infrastructure worldwide."
    },
    {
      title: "Zero Trust",
      desc: "Enterprise-grade zero trust architecture."
    }
  ];

  return (

    <section className="py-40 px-10">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-6xl font-black">
            Powerful Features
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Everything you need to secure your business.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {features.map((feature, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 hover:-translate-y-4 transition duration-500"
            >

              <div className="w-20 h-20 rounded-3xl bg-green-400/10 flex items-center justify-center text-4xl">
                🛡️
              </div>

              <h3 className="mt-10 text-4xl font-black text-green-400">
                {feature.title}
              </h3>

              <p className="mt-6 text-gray-400 text-lg">
                {feature.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}