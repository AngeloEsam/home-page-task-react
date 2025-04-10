import React from "react";

const Recommended = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-md p-4">
          <img
            src="/phone5.jpeg"
            alt="Product"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="font-semibold mt-2">Product 4</h3>
          <p>$60</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <img
            src="/phone5.jpeg"
            alt="Product"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="font-semibold mt-2">Product 5</h3>
          <p>$80</p>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
