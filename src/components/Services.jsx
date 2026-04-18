function Services() {
  return (
    <section className="w-full p-4 py-15 bg-slate-900 flex flex-col items-center gap-6 md:px-6">
      <div className="w-full max-w-7xl flex flex-col items-center gap-2">
        <h1 className="text-3xl md:text-5xl text-slate-200 font-bold">
          Our Services
        </h1>
        <p className="text-center text-base md:text-lg text-slate-100">
          We offer expertise across a wide range of leading technologies and
          comprehensive tech suites. Our focus is on leveraging the right tools,
          to build innovative website and mobile application. We help you haress
          the powerof technology to achieve your business objectives and drive
          digital transformation.
        </p>
      </div>
      {/* cards div */}
      <div className="max-w-7xl text-slate-200 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-slate-700 bg-slate-800 p-5 rounded-xl max-w-md min-h-75 flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer text-center">
          <div className="w-full h-40 rounded-lg flex items-center justify-center">
            <img src="/servicesIcon/webdev.png" alt="logo" className="h-30" />
          </div>
          <h2 className="text-lg font-semibold text-slate-100">
            Website Development
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Build modern, responsive, and high-performance websites for your
            business needs.
          </p>
        </div>

        <div className="border border-slate-700 bg-slate-800 p-5 rounded-xl max-w-md min-h-75 flex flex-col gap- hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center cursor-pointer">
          <div className="w-full h-40 rounded-lg flex items-center justify-center">
            <img src="/servicesIcon/app.png" alt="logo" className="h-30" />
          </div>
          <h2 className="text-lg font-semibold text-slate-100">
            Mobile App Development
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Create cross-platform mobile applications with smooth performance
            and great user experience.
          </p>
        </div>

        <div className="border border-slate-700 bg-slate-800 p-5 rounded-xl max-w-md min-h-75 flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer text-center">
          <div className="w-full h-40 rounded-lg flex items-center justify-center">
            <img
              src="/servicesIcon/user-experience.png"
              alt="logo"
              className="h-30"
            />
          </div>
          <h2 className="text-lg font-semibold text-slate-100">UI/UX Design</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Design clean, user-friendly interfaces focused on usability and
            seamless user experience.
          </p>
        </div>

        <div className="border border-slate-700 bg-slate-800 p-5 rounded-xl max-w-md min-h-75 flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer text-center">
          <div className="w-full h-40 rounded-lg flex items-center justify-center">
            <img
              src="/servicesIcon/digitalMarketing.png"
              alt="logo"
              className="h-30"
            />
          </div>
          <h2 className="text-lg font-semibold text-slate-100">
            Digital Marketing
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Grow your brand through targeted marketing strategies and effective
            online campaigns.
          </p>
        </div>

        <div className="border border-slate-700 bg-slate-800 p-5 rounded-xl max-w-md min-h-75 flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center cursor-pointer">
          <div className="w-full h-40 rounded-lg flex items-center justify-center">
            <img src="/servicesIcon/seo.png" alt="logo" className="h-30" />
          </div>
          <h2 className="text-lg font-semibold text-slate-100">
            Search Engine Optimization
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Improve website visibility and ranking to attract more organic
            traffic and users.
          </p>
        </div>

        <div className="border border-slate-700 bg-slate-800 p-5 rounded-xl max-w-md min-h-75 flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer text-center">
          <div className="w-full h-40 rounded-lg flex items-center justify-center">
            <img src="/servicesIcon/rating.png" alt="logo" className="h-30" />
          </div>
          <h2 className="text-lg font-semibold text-slate-100">
            Online Reputation Management
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Build and protect your brand image across digital platforms with
            effective strategies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
