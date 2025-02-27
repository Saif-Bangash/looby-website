import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu on mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <header className="bg-gray-800">
      <nav className="shadow-md">
        <div className="container max-w-6xl mx-auto py-2 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl px-2 font-bold text-gray-300 hover:text-blue-400"
          >
            LOOBY
          </a>

          {/* Navbar Menu (on larger screens) */}
          <ul className="hidden lg:flex justify-center items-center gap-8 text-gray-300 font-semibold">
            <li>
              <a
                href="#"
                className="hover:bg-gray-700 py-2 px-3 hover:text-blue-400 hover:rounded-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-gray-700 py-2 px-3 hover:text-blue-400 hover:rounded-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-gray-700 py-2 px-3 hover:text-blue-400 hover:rounded-lg"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Menu Button (for medium and small screens) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (visible when 'isOpen' is true for both medium and small screens) */}
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } transition-all duration-8000 transform ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <ul className="flex flex-col bg-gray-800 py-5 gap-10">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 py-2 px-4 hover:text-blue-400 hover:rounded-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 py-2 px-4 hover:text-blue-400 hover:rounded-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 py-2 px-4 hover:text-blue-400 hover:rounded-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
