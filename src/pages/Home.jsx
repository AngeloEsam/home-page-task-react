import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewProducts from "../components/NewProducts";
import Recommended from "../components/Recommended";
import Brands from "../components/Brands";
import Categories from "./../components/Categories";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <Header />
      {/* Categories Section */}
      <Categories />

      {/* Sidebar Filters Section */}
      <div className="flex flex-wrap lg:flex-nowrap">
        <aside className="w-full lg:w-1/4 bg-white p-6 shadow-md mb-6 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div>
            <p className="font-medium">Price Range</p>
            <input type="range" className="w-full" />
          </div>
          <div className="mt-4">
            <p className="font-medium">Brand</p>
            <div>
              <label>
                <input type="checkbox" /> Brand A
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Brand B
              </label>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-6">
          {/* New Products Section */}
          <NewProducts />

          {/* Recommended Section */}
          <Recommended />
        </main>
      </div>

      {/* Brands Section */}
      <Brands />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
