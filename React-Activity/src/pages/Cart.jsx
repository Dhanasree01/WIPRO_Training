
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {cart.map((item, index) => (
            <div key={index} className="bg-white shadow rounded-xl p-4">
              <img src={item.image} className="w-full h-32 object-cover rounded" />
              <h3 className="font-bold mt-2">{item.name}</h3>
              <p className="text-green-700">₹{item.price}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
