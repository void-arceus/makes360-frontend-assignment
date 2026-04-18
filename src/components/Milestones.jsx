function Milestones() {
  return (
    <section className="w-full px-4 md:px-6 py-15 flex flex-col items-center bg-slate-900 text-slate-100">
      <div className="w-full max-w-7xl flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-5xl text-slate-200 font-semibold">
            Some Milestones
          </h1>
          <h2 className="text-lg">
            We have already completed &nbsp;
            <span className="font-semibold">187+ projects</span> and more
            counting...
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-6">
          <div className="w-full max-w-sm border border-slate-700 bg-slate-800/70 backdrop-blur-sm p-6 flex flex-col items-center justify-center rounded-xl shadow-lg hover:scale-105 transition duration-300 gap-2">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-400">
              187+
            </h1>
            <p className="text-slate-300 text-sm md:text-base font-medium">
              Projects Done
            </p>
          </div>

          <div className="w-full max-w-sm border border-slate-700 bg-slate-800/70 backdrop-blur-sm p-6 flex flex-col items-center justify-center rounded-xl shadow-lg hover:scale-105 transition duration-300 gap-2">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-400">
              8+
            </h1>
            <p className="text-slate-300 text-sm md:text-base font-medium">
              Awards Won
            </p>
          </div>

          <div className="w-full max-w-sm border border-slate-700 bg-slate-800/70 backdrop-blur-sm p-6 flex flex-col items-center justify-center rounded-xl shadow-lg hover:scale-105 transition duration-300 gap-2">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-400">
              355+
            </h1>
            <p className="text-slate-300 text-sm md:text-base font-medium">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Milestones;
