"use client";

import { useState } from "react";

export default function AIChatbot() {

  const [open, setOpen] = useState(false);

  return (
    <>

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 right-8 z-50 bg-green-400 text-black w-16 h-16 rounded-full text-2xl shadow-2xl hover:scale-110 transition"
      >
        🤖
      </button>

      {/* CHAT WINDOW */}
      {open && (

        <div className="fixed bottom-48 right-8 z-50 w-[350px] rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl p-6">

          <h2 className="text-2xl font-bold text-green-400">
            Cyber AI
          </h2>

          <p className="text-gray-400 mt-3">
            How can I help protect your business today?
          </p>

          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full mt-6 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none"
          />

          <button className="w-full mt-4 bg-green-400 text-black py-3 rounded-xl font-bold">
            Send
          </button>

        </div>

      )}

    </>
  );
}