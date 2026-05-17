export default function StickySection() {

  return (
    <section className="h-[200vh] relative">

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-10">

        <h2 className="text-6xl md:text-8xl font-black leading-tight">

          Security
          <br />

          <span className="text-green-400">
            Without Limits
          </span>

        </h2>

        <p className="mt-10 text-xl text-gray-400 max-w-2xl">
          Real-time enterprise protection powered by AI-driven infrastructure.
        </p>

      </div>

    </section>
  );
}