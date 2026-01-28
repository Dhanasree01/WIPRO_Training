// import { useEffect, useState } from "react";
// import Card from "../components/Card";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     image: ""
//   });

//   // ✅ Fetch products from JSON server
//   const fetchProducts = () => {
//     fetch("http://localhost:5000/products")
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // ✅ Add product to JSON server
//   const handleAddProduct = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:5000/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newProduct)
//     })
//       .then(res => res.json())
//       .then(() => {
//         fetchProducts();
//         setNewProduct({ name: "", price: "", image: "" });
//       });
//   };

//   // ✅ Delete product from JSON server + UI
//   const deleteProduct = (id) => {
//     fetch(`http://localhost:5000/products/${id}`, {
//       method: "DELETE"
//     })
//       .then(() => {
//         setProducts(prev => prev.filter(p => p.id !== id));
//       });
//   };

//   return (
//     <div>

//       {/* HERO SECTION */}
//       <div className="pt-24 bg-linear-to-r from-green-100 to-white">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 items-center px-10 py-16">
          
//           <div>
//             <h2 className="text-4xl font-bold text-gray-800 leading-snug">
//               Premium <span className="text-green-700">Gemstones</span><br />
//               For Every Style
//             </h2>
//             <p className="mt-4 text-gray-600">
//               Discover rare, natural and luxury gemstones.
//             </p>
//             <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-black transition">
//               Explore Collection
//             </button>
//           </div>

//           <img 
//             src="https://puneetgems.com/cdn/shop/articles/ChatGPT_Image_Jan_14_2026_12_09_32_PM.jpg?v=1768373777&width=1100"
//             alt="Gemstones"
//             className="rounded-2xl shadow-lg"
//           />
//         </div>
//       </div>

//       {/* ADD PRODUCT FORM */}
//       <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
//         <h2 className="text-xl font-bold mb-4 text-green-700">Add New Product</h2>

//         <form onSubmit={handleAddProduct} className="grid grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={newProduct.name}
//             onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//             className="border p-2 rounded"
//             required
//           />

//           <input
//             type="number"
//             placeholder="Price"
//             value={newProduct.price}
//             onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//             className="border p-2 rounded"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Image URL"
//             value={newProduct.image}
//             onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
//             className="border p-2 rounded"
//             required
//           />

//           <button
//             type="submit"
//             className="col-span-3 bg-green-700 text-white py-2 rounded hover:bg-black transition"
//           >
//             Add Product
//           </button>
//         </form>
//       </div>

//       {/* CATEGORY SECTION */}
//       <div id="category" className="max-w-7xl mx-auto px-10 py-16">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Our Gemstone Collection
//         </h2>

//         <div className="grid grid-cols-3 gap-8">
//           {products.map(p => (
//             <Card 
//               key={p.id} 
//               product={p} 
//               deleteProduct={deleteProduct} 
//             />
//           ))}
//         </div>
//       </div>

//       {/* CONTACT SECTION */}
//       <div id="contact" className="max-w-7xl mx-auto px-10 py-16 bg-green-50 rounded-2xl mb-10">
//         <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

//         <div className="grid grid-cols-2 gap-10">
          
//           <div>
//             <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
//             <p className="text-gray-600 mb-2">📧 Email: gemstore@gmail.com</p>
//             <p className="text-gray-600 mb-2">📞 Phone: +91 98765 43210</p>
//             <p className="text-gray-600">📍 Location: Tamil Nadu, India</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <input type="text" placeholder="Your Name" className="w-full border p-2 rounded mb-3" />
//             <input type="email" placeholder="Your Email" className="w-full border p-2 rounded mb-3" />
//             <textarea placeholder="Message" className="w-full border p-2 rounded mb-3"></textarea>
//             <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-black transition">
//               Send Message
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }





import { useEffect, useState } from "react";
import Card from "../components/Card";
import { addToCart } from "../flux/actions/CartActions"; // ✅ FLUX ACTION

export default function Home() {
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  // ✅ Fetch products from JSON server
  const fetchProducts = () => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Add product to JSON server
  const handleAddProduct = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(() => {
        fetchProducts();
        setNewProduct({ name: "", price: "", image: "" });
      });
  };

  // ✅ Delete product
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE"
    }).then(() => {
      setProducts(prev => prev.filter(p => p.id !== id));
    });
  };

  // ✅ ADD TO CART (FLUX)
  const handleAddToCart = (product) => {
    addToCart(product); // 🔥 FLUX DISPATCH
  };

  return (
    <div>

      {/* HERO SECTION */}
      <div className="pt-24 bg-linear-to-r from-green-100 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 items-center px-10 py-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 leading-snug">
              Premium <span className="text-green-700">Gemstones</span><br />
              For Every Style
            </h2>
            <p className="mt-4 text-gray-600">
              Discover rare, natural and luxury gemstones.
            </p>
            <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-black transition">
              Explore Collection
            </button>
          </div>

          <img
            src="https://puneetgems.com/cdn/shop/articles/ChatGPT_Image_Jan_14_2026_12_09_32_PM.jpg?v=1768373777&width=1100"
            alt="Gemstones"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* ADD PRODUCT FORM */}
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-green-700">Add New Product</h2>

        <form onSubmit={handleAddProduct} className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="border p-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="col-span-3 bg-green-700 text-white py-2 rounded hover:bg-black transition"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* PRODUCTS */}
      <div id="category" className="max-w-7xl mx-auto px-10 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Gemstone Collection
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {products.map(p => (
            <Card
              key={p.id}
              product={p}
              deleteProduct={deleteProduct}
              addToCart={handleAddToCart} // ✅ PASS TO CARD
            />
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="max-w-7xl mx-auto px-10 py-16 bg-green-50 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
            <p className="text-gray-600 mb-2">📧 Email: gemstore@gmail.com</p>
            <p className="text-gray-600 mb-2">📞 Phone: +91 98765 43210</p>
            <p className="text-gray-600">📍 Location: Tamil Nadu, India</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <input type="text" placeholder="Your Name" className="w-full border p-2 rounded mb-3" />
            <input type="email" placeholder="Your Email" className="w-full border p-2 rounded mb-3" />
            <textarea placeholder="Message" className="w-full border p-2 rounded mb-3"></textarea>
            <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-black transition">
              Send Message
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
