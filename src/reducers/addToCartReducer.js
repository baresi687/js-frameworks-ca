export default function addToCartReducer(state, action) {
  let productIndex;
  let cart;

  switch (action.type) {
    case 'INCREMENT_PRODUCT':
      cart = [...state.cart];
      productIndex = cart.findIndex((product) => product.id === action.payload.id);

      if (productIndex === -1) {
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }
      return { ...state, cart: cart };

    case 'DECREMENT_PRODUCT':
      productIndex = state.cart.findIndex((product) => product.id === action.payload.id);

      cart = [...state.cart];

      if (cart[productIndex].quantity > 1) {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity - 1 },
          ...cart.slice(productIndex + 1),
        ];
      } else {
        cart = [...cart.slice(0, productIndex), ...cart.slice(productIndex + 1)];
      }

      return { ...state, cart: cart };

    case 'REMOVE_PRODUCT':
      return { ...state, cart: state.cart.filter((item) => action.payload.id !== item.id) };

    case 'CLEAR_CART':
      return { cart: [] };

    default:
      return state;
  }
}
