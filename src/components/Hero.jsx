import { useEffect, useState } from "react";

function Hero() {
  const fullText = "Increase Your Business Growth By 2600%";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden h-[95vh] w-full flex items-center justify-center bg-gradient-to-br from-indigo-400 via-indigo-50 to-slate-100 animate-gradient md:px-6">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl p-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-4 animate-[fadeIn_0.8s_ease-out]">
          <p className="text-lg text-slate-800 font-medium">
            Idea - Development - Branding
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight">
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-base md:text-lg text-slate-800 font-medium">
            Makes360 is one of the best digital consulting companies in India
            since 2018. We offer full stack digital services that cover
            everything your business needs.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
            <button className="border-2 border-slate-600 py-2 px-5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium cursor-pointer transition-all duration-300 hover:scale-105">
              Free Trials
            </button>

            <button className="border-2 border-slate-500 hover:bg-slate-800 cursor-pointer hover:text-slate-200 font-medium py-2 px-4 rounded-xl transition-all duration-300 hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>

        <div className="hidden md:flex w-1/2 justify-center animate-[fadeIn_1s_ease-out]">
          <div className="relative">
            <div className="absolute -inset-8 bg-indigo-200 blur-3xl opacity-30 rounded-full animate-pulse"></div>

            <img
              src="heroImage.png"
              alt="hero"
              className="relative w-[90%] rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
