import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [subMenu, setSubMenu] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const toggleSubMenu = (menu) => {
    setSubMenu((prev) => (prev === menu ? "" : menu));
  };

  const toggleIsOpen = (menu) => {
    setIsOpen((prev) => (prev === menu ? "" : menu));
  };

  return (
    <section className="sticky top-0 z-50 w-full bg-slate-900 flex flex-col items-center justify-center md:px-6">
      <div className="w-full flex items-center justify-between px-4 xl:px-0 h-16 max-w-7xl">
        {/* Logo */}
        <div className="flex-1">
          <h1 className="text-slate-200 text-lg sm:xl md:text-2xl font-bold">
            Makes360
          </h1>
        </div>

        <div className="hidden sm:flex items-center justify-end w-full">
          <div className="flex text-white text-md md:text-lg font-medium items-center gap-6">
            <div className="relative group">
              <button
                onClick={() => {
                  toggleIsOpen("about");
                }}
                className="h-15 cursor-pointer text-md hover:text-yellow-400"
              >
                About Us
              </button>

              <div
                className={`w-50 p-1 absolute ${isOpen === "about" ? "block" : "hidden"} md:group-hover:block rounded-lg shadow-lg top-15 bg-slate-800`}
              >
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Our Story
                </p>
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Our Work
                </p>
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Testimonials & Reviews
                </p>
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Case Study
                </p>
                <p className="text-sm   p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Training & Internship
                </p>
              </div>
            </div>

            <div className="relative group">
              <button
                onClick={() => {
                  toggleIsOpen("services");
                }}
                className="h-15 cursor-pointer text-md hover:text-yellow-400"
              >
                Services
              </button>

              <div
                className={`w-50 p-1 absolute ${isOpen === "services" ? "block" : "hidden"} md:group-hover:block rounded-lg shadow-lg top-15 bg-slate-800`}
              >
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Website Development
                </p>
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Web App Development
                </p>
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Mobile Apps Development
                </p>
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Branding & Design
                </p>
                <p className="text-sm   p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Digital Marketing
                </p>
                <p className="text-sm   p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Search Engine Optimization
                </p>
                <p className="text-sm   p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Online Reputation Management
                </p>
              </div>
            </div>

            <div className="relative group">
              <button
                onClick={() => {
                  toggleIsOpen("industry");
                }}
                className="h-15 cursor-pointer text-md hover:text-yellow-400"
              >
                Industries
              </button>

              <div
                className={`w-50 p-1 absolute ${isOpen === "industry" ? "block" : "hidden"} md:group-hover:block rounded-lg shadow-lg top-15 bg-slate-800`}
              >
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Law Firms
                </p>
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Real Estate
                </p>
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Hotel and Restaurant
                </p>
                <p className="text-sm p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  School & Coaching
                </p>
                <p className="text-sm   p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  HealthCare
                </p>
                <p className="text-sm   p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  Business & Start-up
                </p>
                <p className="text-sm   p-2.5 cursor-pointer hover:bg-slate-700 hover:text-yellow-400 rounded-md">
                  E-commerce & Retail
                </p>
              </div>
            </div>

            <div className="relative group">
              <button className="h-15 cursor-pointer text-md hover:text-yellow-400">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Menu Button */}
        <div className="flex-1 flex justify-end sm:hidden">
          <button
            onClick={() => {
              setShowMenu((prev) => !prev);
              setSubMenu("");
            }}
            className="text-slate-200 text-lg font-bold cursor-pointer"
          >
            <img src="/menu.png" alt="menu-logo" className="h-10" />
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-14 left-0 w-full bg-slate-900 z-10 rounded-b-lg transition-all duration-400 ease-in-out
        ${
          showMenu
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        >
          <div className="flex flex-col text-slate-200 font-medium p-2">
            {/* ABOUT */}
            <div>
              <div
                onClick={() => toggleSubMenu("about")}
                className="w-full p-3 hover:bg-slate-800 hover:text-yellow-300 rounded-md cursor-pointer"
              >
                About Us
              </div>

              <div
                className={`overflow-hidden pl-4 transition-all duration-300 ease-in-out
              ${
                subMenu === "about"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              >
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Our Story
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Our Work
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Testimonials & Reviews
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Case Study
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Training & Internship
                </div>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <div
                onClick={() => toggleSubMenu("services")}
                className="w-full p-3 hover:bg-slate-800 hover:text-yellow-300 rounded-md cursor-pointer"
              >
                Services
              </div>

              <div
                className={`overflow-hidden pl-4 transition-all duration-400 ease-in-out
              ${
                subMenu === "services"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              >
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Website Development
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Web App Development
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Mobile App Development
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Branding & Design
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Digital Marketing
                </div>
              </div>
            </div>

            {/* INDUSTRIES */}
            <div>
              <div
                onClick={() => toggleSubMenu("industries")}
                className="w-full p-3 hover:bg-slate-800 hover:text-yellow-300 rounded-md cursor-pointer"
              >
                Industries
              </div>

              <div
                className={`overflow-hidden pl-4 transition-all duration-400 ease-in-out
              ${
                subMenu === "industries"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              >
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Real Estate
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Law Firms
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  E-commerce
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Hotel & Restaurants
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  School & Coaching
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  Healthcare
                </div>
                <div className="p-2 hover:bg-slate-700 hover:text-yellow-300 rounded-md cursor-pointer">
                  <a href="#" className="underline">
                    See All Industries
                  </a>
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="p-3 hover:bg-slate-800 hover:text-yellow-300 rounded-md cursor-pointer">
              Contact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
