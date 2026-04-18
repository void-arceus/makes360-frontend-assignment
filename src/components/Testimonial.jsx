function Testimonial() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-gray-100 md:px-6">
      <div className="w-full max-w-7xl p-4 flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <h1 className="text-3xl md:text-5xl font-semibold">Testimonials</h1>
          <h2 className="text-xl text-center font-medium">
            Read Some Reviews from our beloved clients about our work
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
          <div className="w-full max-w-sm border border-gray-200 bg-white p-4 rounded-xl shadow-lg flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/user.png"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-sm font-semibold">Kumar Sanjay</h1>
                <p className="text-xs text-gray-500">
                  MD @ KP Digital Printing Press
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm leading-relaxed">
                Even after 3 years on my website, Makes360 and the team are
                still great. We are moving in the right direction. I have no
                complaints about their work.
              </p>
            </div>
          </div>

          <div className="w-full max-w-sm border border-gray-200 bg-white p-4 rounded-xl shadow-lg flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/user.png"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-sm font-semibold">Vikash Kumar</h1>
                <p className="text-xs text-gray-500">
                  Founder @ Vikash Institute
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm leading-relaxed">
                Makes360 is the best company. I am getting compliments on my new
                web design. Our site is working and the investment paid for
                itself in 2-3 months.
              </p>
            </div>
          </div>

          <div className="w-full max-w-sm border border-gray-200 bg-white p-4 rounded-xl shadow-lg flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/user.png"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-sm font-semibold">Dr. Akanksha Abhishek</h1>
                <p className="text-xs text-gray-500">MD @ The Doctor's</p>
              </div>
            </div>
            <div>
              <p className="text-sm leading-relaxed">
                Makes360 is great to work with, from a customer point of view,
                it is good that the team is always available. You guys have done
                a great job on my website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
