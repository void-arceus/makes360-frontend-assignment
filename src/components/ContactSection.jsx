function ContactSection() {
  return (
    <section className="box-border w-full bg-slate-900 text-slate-100 px-4 py-10 flex flex-col items-center justify-center md:px-6">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="w-full md:max-w-4xl py-10 flex flex-col items-start gap-6">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl text-white font-semibold transition">
              Grab 36% OFF
            </h1>
            <h1 className="text-3xl md:text-5xl  text-white font-semibold transition">
              Start Your Project in 2 Hours!
            </h1>
          </div>
          <div className="w-full">
            <p className="text-white text-lg">
              Trusted by 300+ businesses, Makes360 delivers custom web, app &
              marketing solutions backed by real results.
            </p>
          </div>
          <div>
            <span className="font-semibold">4.9/5</span>&nbsp;on Google |{" "}
            <span className="font-semibold">350+ Clients</span>&nbsp; Served |
            <span className="font-semibold">&nbsp;100+ Projects</span> Completed
          </div>
          <div>
            <button className="bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full hover:bg-yellow-500 transition font-medium cursor-pointer">
              Download Brochure
            </button>
          </div>
        </div>
        <div className="bg-slate-800 w-full md:max-w-4xl shadow-md hover:shadow-lg transition rounded-xl">
          <form className="border border-slate-700 rounded-xl p-4 flex flex-col items-start gap-3">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              Get a Free Quote
            </h2>
            <input
              placeholder="Your Name"
              type="text"
              className="w-full bg-slate-700 text-white border border-slate-600 p-3.5 rounded-md placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-slate-500 transition"
              required
            />
            <input
              placeholder="Email Id"
              type="email"
              className="w-full bg-slate-700 text-white border border-slate-600 p-3.5 rounded-md placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-slate-500 transition"
              required
            />
            <input
              placeholder="Contact Number"
              type="tel"
              className="w-full bg-slate-700 text-white border border-slate-600 p-3.5 rounded-md placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-slate-500 transition"
              required
            />
            <textarea
              placeholder="Tell us more about your need & goal"
              className="w-full h-30 overflow-auto bg-slate-700 text-white border border-slate-600 p-3.5 rounded-md placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-slate-500 transition resize-none"
            />
            <button className="w-full bg-indigo-500 p-3 text-base text-white font-semibold rounded-md cursor-pointer hover:bg-indigo-600 transition">
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
