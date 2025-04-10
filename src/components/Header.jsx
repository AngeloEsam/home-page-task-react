import React, { useState } from "react";
import { Heart, Menu, X, ArrowLeftRight  } from "lucide-react";
import Flag from "react-world-flags";

const countries = [
  "us", "ca", "gb", "fr", "de", "es", "it", "au"
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFlags, setShowFlags] = useState(false);

  return (
    <header className="bg-white shadow-md py-3">
      <div className="container mx-auto flex items-center justify-between flex-wrap px-4 gap-y-3">
        {/* Logo */}
        <div className="text-xl font-bold">MyStore</div>

        {/* Flags for md+ */}
        <div className="hidden md:flex items-center gap-2">
          {countries.map((code) => (
            <Flag
              key={code}
              code={code}
              style={{ width: 24, height: 16 }}
              className="rounded shadow"
              title={code.toUpperCase()}
            />
          ))}
        </div>

        {/* Dropdown for flags on mobile */}
        <div className="relative md:hidden">
          <button
            onClick={() => setShowFlags(!showFlags)}
            className="border px-2 py-1 rounded"
          >
            🌐
          </button>
          {showFlags && (
            <div className="absolute right-0 mt-2 bg-white shadow rounded p-2 flex flex-wrap gap-2 z-50">
              {countries.map((code) => (
                <Flag
                  key={code}
                  code={code}
                  style={{ width: 24, height: 16 }}
                  className="rounded shadow"
                  title={code.toUpperCase()}
                />
              ))}
            </div>
          )}
        </div>

        {/* Main Menu */}
        <nav className="hidden md:flex  gap-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-600">
          <Heart className="cursor-pointer" />
          <ArrowLeftRight className="cursor-pointer" />
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="md:hidden px-4 mt-4">
    <nav className="flex flex-col items-center justify-center gap-4 text-gray-700 font-semibold text-lg">
      <a href="#" className="hover:text-blue-600 transition-colors duration-200">
        Home
      </a>
      <a href="#" className="hover:text-blue-600 transition-colors duration-200">
        Shop
      </a>
      <a href="#" className="hover:text-blue-600 transition-colors duration-200">
        Contact
      </a>
      <a href="#" className="hover:text-blue-600 transition-colors duration-200">
        About
      </a>
    </nav>
  </div>
)}
    </header>
  );
};

export default Header;
