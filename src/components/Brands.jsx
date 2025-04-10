import React from "react";

const Brands = () => {
  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Brands</h2>
        <div className="flex space-x-4 overflow-x-auto">
          <div className="p-4 bg-white shadow-md rounded-md flex-shrink-0 w-40 text-center">
            Brand 1
          </div>
          <div className="p-4 bg-white shadow-md rounded-md flex-shrink-0 w-40 text-center">
            Brand 2
          </div>
          <div className="p-4 bg-white shadow-md rounded-md flex-shrink-0 w-40 text-center">
            Brand 3
          </div>
          <div className="p-4 bg-white shadow-md rounded-md flex-shrink-0 w-40 text-center">
            Brand 4
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
