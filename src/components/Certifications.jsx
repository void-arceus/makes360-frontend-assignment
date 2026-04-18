function Certifications() {
  return (
    <section className="box-border bg-gray-100 px-4 py-16 w-full flex flex-col items-center md:px-6">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-5xl text-center font-semibold mt-2">
            Top Digital Consulting Company
          </h1>
          <p className="text-center text-base md:text-lg leading-relaxed transition">
            Makes360 is a results-driven digital agency founded in 2018,
            empowering 300+ businesses across 10+ countries with web design,
            development, mobile app development, ERP, CRM, and marketing
            solutions. We deliver up to 2600% business growth, backed by a
            30-day money-back guarantee.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 py-8">
          <div className="box-border border w-full max-w-sm border-gray-200 bg-white flex flex-col items-center p-4 rounded-xl shadow-md">
            <div className="w-full h-24 flex items-center justify-center">
              <img
                src="/Certifications/iso_certified.png"
                alt="logo"
                className="h-18"
              />
            </div>
            <h2 className="text-gray-800 text-lg font-medium">
              ISO Certified Company
            </h2>
          </div>

          <div className="box-border border w-full max-w-sm border-gray-200 bg-white flex flex-col items-center p-4 rounded-xl shadow-md">
            <div className="w-full h-24 flex items-center justify-center">
              <img
                src="/Certifications/niti_aayog.png"
                alt="logo"
                className="h-18"
              />
            </div>
            <h2 className="text-gray-800 text-lg font-medium">
              Supported by NITI aayog
            </h2>
          </div>

          <div className="box-border border w-full max-w-sm border-gray-200 bg-white flex flex-col items-center p-4 rounded-xl shadow-md">
            <div className="w-full h-24 flex items-center justify-center">
              <img src="/Certifications/acic.png" alt="logo" className="h-18" />
            </div>
            <h2 className="text-gray-800 text-lg font-medium">
              Supported by ACIC RISE
            </h2>
          </div>

          <div className="box-border border w-full max-w-sm border-gray-200 bg-white flex flex-col items-center p-4 rounded-xl shadow-md">
            <div className="w-full h-24 flex items-center justify-center">
              <img
                src="/Certifications/startupIndia.png"
                alt="logo"
                className="h-18"
              />
            </div>
            <h2 className="text-gray-800 text-lg font-medium">
              Supported by Startup India
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
