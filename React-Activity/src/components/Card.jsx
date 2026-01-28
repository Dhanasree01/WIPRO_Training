

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Card({ product, deleteProduct }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white shadow rounded-xl p-4 hover:scale-105 transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-bold">{product.name}</h3>
      <p className="text-green-700 font-semibold">₹{product.price}</p>

      <div className="flex gap-2 mt-3">

        {/* ✅ Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-green-700 text-white py-1 rounded-lg hover:bg-black transition"
        >
          Add to Cart 🛒
        </button>

        {/* ✅ Delete from Cards + JSON */}
        <button
          onClick={() => deleteProduct(product.id)}
          className="flex-1 bg-green-500 text-white py-1 rounded-lg hover:bg-black transition"
        >
          Delete ❌
        </button>

      </div>
    </div>
  );
}


// import { addToCart } from "../flux/actions/CartActions";

// function Card({ product, deleteProduct }) {
//   return (
//     <div className="border p-4 rounded shadow">
//       <img src={product.image} className="w-full h-40 object-cover rounded" />
//       <h3 className="font-bold mt-2">{product.name}</h3>
//       <p>₹{product.price}</p>

//       <button
//         onClick={() => addToCart(product)}
//         className="bg-green-700 text-white px-3 py-1 rounded mt-2"
//       >
//         Add to Cart
//       </button>

//       <button
//         onClick={() => deleteProduct(product.id)}
//         className="bg-red-600 text-white px-3 py-1 rounded mt-2 ml-2"
//       >
//         Delete
//       </button>
//     </div>
//   );
// }

// export default Card;
