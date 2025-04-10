import React from "react";

const Categories = () => {
  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto flex space-x-4 overflow-x-auto">
        <div className="p-4 bg-white shadow-md rounded-md flex-shrink-0 w-40 text-center">
          Category 1
        </div>
        <div className="p-4 bg-white shadow-md rounded-md flex-shrink-0 w-40 text-center">
          Category 2
        </div>
        <div className="p-4 bg-white shadow-md rounded-md flex-shrink-0 w-40 text-center">
          Category 3
        </div>
        <div className="p-4 bg-white shadow-md rounded-md flex-shrink-0 w-40 text-center">
          Category 4
        </div>
      </div>
    </section>
  );
};

export default Categories;
