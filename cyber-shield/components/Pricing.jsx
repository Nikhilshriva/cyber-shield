"use client";

import { useState } from "react";

export default function Pricing() {

  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: "₹4999",
      yearly: "₹49,999",
      features: [
        "24/7 Monitoring",
        "AI Detection",
        "Basic Dashboard"
      ]
    },
    {
      name: "Business",
      monthly: "₹9999",
      yearly: "₹99,999",
      popular: true,
      features: [
        "Advanced AI",
        "Cloud Security",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      monthly: "Custom",
      yearly: "Custom",
      features: [
        "Dedicated Team",
        "Zero Trust",
        "Unlimited Protection"
      ]
    }
  ];

  return (

    <section className="py-40 px-10">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="text-center">

          <h2 className="text-6xl font-black">
            Pricing Plans
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Flexible plans for every business.
          </p>

          {/* TOGGLE */}
          <div className="flex justify-center mt-10">

            <button
              onClick={() => setYearly(!yearly)}
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-xl"
            >
              {yearly ? "Yearly Billing" : "Monthly Billing"}
            </button>

          </div>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {plans.map((plan, i) => (

            <div
              key={i}
              className={`relative rounded-[40px] p-10 border backdrop-blur-2xl transition duration-500 hover:-translate-y-4
              ${
                plan.popular
                  ? "bg-green-400 text-black border-green-300"
                  : "bg-white/5 border-white/10"
              }`}
            >

              {/* POPULAR */}
              {plan.popular && (

                <div className="absolute top-6 right-6 bg-black text-green-400 px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>

              )}

              <h3 className="text-4xl font-black">
                {plan.name}
              </h3>

              <div className="mt-10">

                <span className="text-6xl font-black">
                  {yearly ? plan.yearly : plan.monthly}
                </span>

                {plan.monthly !== "Custom" && (
                  <span className="text-xl">
                    /mo
                  </span>
                )}

              </div>

              <ul className="mt-10 space-y-5">

                {plan.features.map((feature, idx) => (

                  <li
                    key={idx}
                    className="flex items-center gap-3"
                  >
                    ✅ {feature}
                  </li>

                ))}

              </ul>

              <button
                className={`w-full mt-12 py-4 rounded-2xl font-bold transition
                ${
                  plan.popular
                    ? "bg-black text-white"
                    : "bg-green-400 text-black"
                }`}
              >
                Get Started
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}