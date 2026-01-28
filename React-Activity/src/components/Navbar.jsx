// import { Link } from "react-router-dom";

// export default function Navbar({ isLoggedIn }) {
//   return (
//     <nav className="fixed top-0 w-full bg-white shadow z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

//         <h1 className="text-2xl font-bold text-green-700">
//           GemStore
//         </h1>

//         <div className="flex gap-8 text-gray-700 font-medium">
//   <Link to="/" className="hover:text-green-700">Home</Link>
//   <a href="#category" className="hover:text-green-700">Category</a>
//   <a href="#contact" className="hover:text-green-700">Contact Us</a>
//   <Link to="/about" className="hover:text-green-700">About Us</Link>
// </div>


//         <div className="flex gap-5">
//           <Link to="/cart" className="hover:text-green-700">Cart 🛒</Link>
//           {!isLoggedIn && (
//             <Link 
//               to="/login" 
//               className="px-4 py-1 border border-green-700 rounded hover:bg-green-700 hover:text-white transition"
//             >
//               Login
//             </Link>
//           )}
//         </div>

//       </div>
//     </nav>
//   );
// }


import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn }) {
  const navigate = useNavigate();

  const goToSection = (id) => {
    navigate("/"); // go to home page first

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 px-10 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-700">GemStore</h1>

      <div className="flex gap-6 items-center">

        <Link to="/" className="hover:text-green-700">Home</Link>

        <button onClick={() => goToSection("category")} className="hover:text-green-700">
          Category
        </button>

        <button onClick={() => goToSection("contact")} className="hover:text-green-700">
          Contact
        </button>

        <Link to="/about" className="hover:text-green-700">About</Link>

        {isLoggedIn && (
          <Link to="/cart" className="hover:text-green-700">Cart</Link>
        )}

        {!isLoggedIn && (
          <Link to="/login" className="bg-green-700 text-white px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
