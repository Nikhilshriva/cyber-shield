"use client";

import { motion } from "framer-motion";

export default function MotionSection() {

  return (

    <section className="py-40 px-10">

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >

        <h2 className="text-6xl font-black">
          Powered by
          <span className="text-green-400">
            {" "}Artificial Intelligence
          </span>
        </h2>

        <p className="mt-8 text-xl text-gray-400">
          Advanced AI systems continuously monitor and protect your infrastructure.
        </p>

      </motion.div>

    </section>

  );
}