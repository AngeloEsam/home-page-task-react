import React from "react";

const NewProducts = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">New Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-md p-4">
          <img
            src="/phone5.jpeg"
            alt="Product"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="font-semibold mt-2">Product 1</h3>
          <p>$50</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <img
            src="/phone5.jpeg"
            alt="Product"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="font-semibold mt-2">Product 2</h3>
          <p>$70</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <img
            src="/phone5.jpeg"
            alt="Product"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="font-semibold mt-2">Product 3</h3>
          <p>$30</p>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
