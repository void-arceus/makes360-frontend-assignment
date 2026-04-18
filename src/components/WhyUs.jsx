function WhyUs() {
  return (
    <section className="w-full flex flex-col items-center gap-4 p-4 py-16 bg-gray-50 md:px-6">
      <div className="max-w-7xl flex flex-col items-center gap-2 ">
        <h1 className="text-3xl md:text-5xl font-bold">Why Choose Us?</h1>
        <p className="text-center text-base font-medium md:text-lg">
          We combine expertise, innovation, and a client-first approach to
          deliver high-quality digital solutions.
        </p>
      </div>

      {/* cards div */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-md min-h-40 flex flex-col items-center justify-center gap-1.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer text-center">
          <div className="w-full h-30 flex items-center justify-center">
            <img src="/WhyUs/experiencedTeam.png" alt="logo" className="h-25" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Experienced Team
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Skilled professionals delivering reliable, scalable, and efficient
            digital solutions.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-md min-h-40 flex flex-col items-center justify-center gap-1.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer text-center">
          <div className="w-full h-30 flex items-center justify-center">
            <img src="/WhyUs/modernTech.png" alt="logo" className="h-25" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Modern Technologies
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            We use the latest tools and frameworks to build fast, secure, and
            future-ready products.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-md min-h-40 flex flex-col items-center justify-center gap-1.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer text-center">
          <div className="w-full h-30 flex items-center justify-center">
            <img src="/WhyUs/trust.png" alt="logo" className="h-25" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Client-Focused Approach
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            We understand your goals and deliver solutions tailored to your
            business needs.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-md min-h-40 flex flex-col items-center justify-center gap-1.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer text-center">
          <div className="w-full h-30 flex items-center justify-center">
            <img src="/WhyUs/clock.png" alt="logo" className="h-25" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Timely Delivery
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            We ensure fast project completion while maintaining high quality and
            performance.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-md min-h-40 flex flex-col items-center justify-center gap-1.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer text-center">
          <div className="w-full h-30 flex items-center justify-center">
            <img src="/WhyUs/shield.png" alt="logo" className="h-25" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Quality Assurance
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            We ensure every product meets high standards of performance,
            security, and reliability.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-md min-h-40 flex flex-col items-center justify-center gap-1.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 hover:cursor-pointer text-center">
          <div className="w-full h-30 flex items-center justify-center">
            <img src="/WhyUs/arrow.png" alt="logo" className="h-25" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Scalable Solutions
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Build systems that grow with your business and adapt to future needs
            seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
