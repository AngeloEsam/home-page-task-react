// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
//         <div>
//           <h3 className="font-semibold">Company</h3>
//           <ul>
//             <li>
//               <a href="#">About Us</a>
//             </li>
//             <li>
//               <a href="#">Careers</a>
//             </li>
//             <li>
//               <a href="#">Privacy Policy</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold">Customer Service</h3>
//           <ul>
//             <li>
//               <a href="#">Help Center</a>
//             </li>
//             <li>
//               <a href="#">Returns</a>
//             </li>
//             <li>
//               <a href="#">Shipping</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold">Shop</h3>
//           <ul>
//             <li>
//               <a href="#">Men</a>
//             </li>
//             <li>
//               <a href="#">Women</a>
//             </li>
//             <li>
//               <a href="#">Sale</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold">Follow Us</h3>
//           <ul>
//             <li>
//               <a href="#">Facebook</a>
//             </li>
//             <li>
//               <a href="#">Instagram</a>
//             </li>
//             <li>
//               <a href="#">Twitter</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold">Contact</h3>
//           <ul>
//             <li>
//               <a href="#">Contact Us</a>
//             </li>
//             <li>
//               <a href="#">Support</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold">Newsletter</h3>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-2 rounded-md border border-gray-300 w-full"
//           />
//           <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md w-full">
//             Subscribe
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 w-full text-white"
          />
          <button className="mt-2 bg-blue-600 hover:bg-blue-700 transition duration-200 text-white px-4 py-2 rounded-md w-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
