// import AppDispatcher from "../dispatcher/AppDispatcher";
// import { EventEmitter } from "events";

// let cart = [];

// class CartStore extends EventEmitter {
//   getCart() {
//     return cart;
//   }

//   emitChange() {
//     this.emit("change");
//   }

//   addChangeListener(callback) {
//     this.on("change", callback);
//   }

//   removeChangeListener(callback) {
//     this.removeListener("change", callback);
//   }
// }

// const cartStore = new CartStore();

// AppDispatcher.register((action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       cart.push(action.payload);
//       cartStore.emitChange();
//       break;

//     case "REMOVE_FROM_CART":
//       cart = cart.filter(item => item.id !== action.payload);
//       cartStore.emitChange();
//       break;

//     default:
//       break;
//   }
// });

// export default cartStore;



import AppDispatcher from "../dispatcher/AppDispatcher";

let cartItems = [];

class CartStore extends EventTarget {
  getCart() {
    return cartItems;
  }
}

const cartStore = new CartStore();

AppDispatcher.register((action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      cartItems.push(action.payload);
      cartStore.dispatchEvent(new Event("change")); // ✅ browser-safe
      break;
  }
});

export default cartStore;
