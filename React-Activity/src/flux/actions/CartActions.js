import AppDispatcher from "../dispatcher/AppDispatcher";

export const addToCart = (product) => {
  AppDispatcher.dispatch({
    type: "ADD_TO_CART",
    payload: product
  });
};

export const removeFromCart = (id) => {
  AppDispatcher.dispatch({
    type: "REMOVE_FROM_CART",
    payload: id
  });
};
