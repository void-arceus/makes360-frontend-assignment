import { useState } from "react";

function Gallery() {
  const [images] = useState([
    "/Gallery/team-1.png",
    "/Gallery/team-2.png",
    "/Gallery/team-3.png",
    "/Gallery/team-4.png",
    "/Gallery/team-5.png",
    "/Gallery/team-6.png",
    "/Gallery/team-7.png",
  ]);

  const [idx, setIdx] = useState(0);

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 md:px-6">
      <div className="w-full px-4 max-w-7xl flex flex-col items-center gap-6">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Life At Makes360
          </h1>
          <p className="max-w-4xl text-center text-base md:text-md font-medium text-gray-600">
            Life at Makes360 is all about creativity, growth, and teamwork. We
            embrace innovation, celebrate achievements, and create an inspiring
            workplace where talent thrives and people grow together.
          </p>
        </div>

        {/* Gallery */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
          {/* LEFT BUTTON (desktop only) */}
          <button
            onClick={() => setIdx(idx === 0 ? images.length - 1 : idx - 1)}
            className="hidden md:flex border-2 rounded-full p-3 hover:bg-slate-200 transition"
          >
            <img src="/left-arrow.png" className="h-8 w-8" />
          </button>

          {/* IMAGE */}
          <img
            src={images[idx]}
            className="w-full max-w-xl rounded-xl hover:shadow-lg transition"
          />

          {/* RIGHT BUTTON (desktop only) */}
          <button
            onClick={() => setIdx(idx === images.length - 1 ? 0 : idx + 1)}
            className="hidden md:flex border-2 rounded-full p-3 hover:bg-slate-200 transition"
          >
            <img src="/right-arrow.png" className="h-8 w-8" />
          </button>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex md:hidden items-center gap-6">
          <button
            onClick={() => setIdx(idx === 0 ? images.length - 1 : idx - 1)}
            className="border-2 rounded-full p-3 hover:bg-slate-200 transition"
          >
            <img src="/left-arrow.png" className="h-8 w-8" />
          </button>

          <button
            onClick={() => setIdx(idx === images.length - 1 ? 0 : idx + 1)}
            className="border-2 rounded-full p-3 hover:bg-slate-200 transition"
          >
            <img src="/right-arrow.png" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
