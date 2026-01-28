export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold text-green-400">GemStore</h2>
          <p className="text-gray-400 mt-3">
            Premium gemstones with elegance and quality.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <p className="text-gray-400">Home</p>
          <p className="text-gray-400">Category</p>
          <p className="text-gray-400">About Us</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Email: gemstore@gmail.com</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>
        </div>

      </div>

      <p className="text-center text-gray-500 pb-4">
        © 2026 GemStore. All rights reserved.
      </p>
    </footer>
  );
}


// export default function Footer() {
//   return (
//     <div className="bg-red-500 text-white text-center p-10">
//       FOOTER IS WORKING 🔥
//     </div>
//   );
// }
