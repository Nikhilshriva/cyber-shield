export default function DashboardPreview() {

  return (
    <section className="py-40 px-10">

      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <h2 className="text-6xl font-black">
            Security Dashboard
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Real-time analytics powered by AI.
          </p>

        </div>

        {/* DASHBOARD */}
        <div className="mt-20 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10">

          {/* TOP */}
          <div className="flex justify-between items-center">

            <div>

              <h3 className="text-3xl font-bold">
                Threat Analytics
              </h3>

              <p className="text-gray-400 mt-2">
                Live monitoring system
              </p>

            </div>

            <div className="text-green-400 font-bold">
              ACTIVE
            </div>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-black/40 rounded-3xl p-8 border border-white/10">

              <h4 className="text-gray-400">
                Threats Blocked
              </h4>

              <p className="text-5xl font-black text-green-400 mt-4">
                12,847
              </p>

            </div>

            <div className="bg-black/40 rounded-3xl p-8 border border-white/10">

              <h4 className="text-gray-400">
                Protected Devices
              </h4>

              <p className="text-5xl font-black text-green-400 mt-4">
                2,340
              </p>

            </div>

            <div className="bg-black/40 rounded-3xl p-8 border border-white/10">

              <h4 className="text-gray-400">
                AI Accuracy
              </h4>

              <p className="text-5xl font-black text-green-400 mt-4">
                99.9%
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}