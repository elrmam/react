// cartReducer.js
const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Handle adding to cart
      const newItem = { ...action.payload, quantity: 1 }; // Set default quantity to 1
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };

    case 'REMOVE_FROM_CART':
      // Handle removing from cart
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case 'INCREASE_QUANTITY':
      // Handle increasing quantity
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREASE_QUANTITY':
      // Handle decreasing quantity
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
