import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Countries Icons */}
        <div className="flex space-x-2">
          <span>🇺🇸</span>
          <span>🇨🇦</span>
          <span>🇬🇧</span>
          <span>🇫🇷</span>
          <span>🇩🇪</span>
          <span>🇪🇸</span>
          <span>🇮🇹</span>
          <span>🇦🇺</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2 w-full max-w-xs lg:max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 rounded-lg border border-gray-300 w-full"
          />
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-600 font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-4">
          <span className="flex gap-1">
            <Heart className="text-gray-500" /> Wishlist
          </span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 mt-2">
          <div className="mb-2">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 rounded-lg border border-gray-300 w-full"
            />
          </div>
          <ul className="space-y-2 text-gray-600 font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li className="flex gap-1 items-center">
              <Heart className="text-gray-500" /> Wishlist
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
