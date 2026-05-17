"use client";

import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">

      <div className="text-center">

        <div className="w-28 h-28 border-4 border-green-400 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h1 className="mt-10 text-5xl font-black text-green-400">
          CyberShield
        </h1>

        <p className="mt-4 text-gray-400">
          Initializing AI Security...
        </p>

      </div>

    </div>

  );
}
