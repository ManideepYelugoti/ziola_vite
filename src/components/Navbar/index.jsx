import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/ziola.png";

const navItems = [
  {
    label: "Inventory",
    submenu: ["Service 1", "Service 2"],
  },
  {
    label: "Insights",
    submenu: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    label: "Services",
    submenu: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    label: "About",
    submenu: [
      { name: "About Company", path: "/about/aboutcompany" },
      { name: "Vision", path: "/about/vision" },
      { name: "Mission", path: "/about/mission" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav
      className="bg-white fixed top-0 left-0 right-0 sm:mt-0 z-50  md:mt-0"
      ref={navRef}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16 items-center ">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="max-h-32 w-auto object-contain p-4"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map(({ label, submenu }) => (
              <div key={label} className="relative">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-black"
                  onClick={() => handleDropdownClick(label)}
                >
                  {label}
                  <ChevronDown size={16} />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg py-2 w-40 z-40 transition-all duration-200 ${
                    openDropdown === label ? "block" : "hidden"
                  }`}
                >
                  {submenu.map((item) => (
                    <Link
                      key={item.name || item}
                      to={item.path || `/${label.toLowerCase()}`}
                      onClick={handleMenuItemClick}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {item.name || item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-3 ml-4">
              <button className="px-2 py-1 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-100 transition">
                Request
              </button>
              <button className="px-2 py-1 bg-[#1F40E9] text-white rounded-md hover:bg-[#1F40E9] transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-200 ${
          menuOpen ? "block" : "hidden"
        } bg-white shadow-md`}
      >
        {navItems.map(({ label, submenu }) => (
          <div key={label} className="border-t border-gray-200">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => handleDropdownClick(label)}
            >
              {label}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openDropdown === label ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-4 ${openDropdown === label ? "block" : "hidden"}`}
            >
              {submenu.map((item) => (
                <Link
                  key={item.name || item}
                  to={item.path || `/${label.toLowerCase()}`}
                  onClick={handleMenuItemClick}
                  className="block py-2 pl-4 text-sm text-gray-600 hover:text-black"
                >
                  {item.name || item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
