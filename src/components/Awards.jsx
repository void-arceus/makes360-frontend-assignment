function Awards() {
  return (
    <section className="w-full px-4 md:px-6 py-16 bg-slate-900 text-slate-100 flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center gap-10">
        <div className="text-center max-w-3xl flex flex-col gap-3">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Awards & Recognitions
          </h1>
          <p className="text-slate-300 text-base md:text-lg">
            Trusted by global platforms for delivering consistent, high-quality
            digital solutions.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {[
              "⭐ 4.9+ rated across platforms",
              "🏆 Top Digital Agency (Clutch & GoodFirms)",
              "🌍 Trusted by 1000+ clients",
              "🛡 ISO Certified Company",
              "📺 Featured in media outlets",
            ].map((item, i) => (
              <p
                key={i}
                className="bg-slate-800/40 border border-slate-700 px-4 py-3 rounded-lg hover:scale-[1.02] transition duration-300"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="hidden md:flex w-1/2 justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-indigo-500/20 blur-3xl rounded-full"></div>

              <img
                src="/awards-certifications-logo.png"
                className="relative h-72 object-contain hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
