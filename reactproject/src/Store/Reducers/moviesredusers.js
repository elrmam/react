const INITIAL_VALUE = {
    products: [],
  };
  
  export default function  ProductsReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
      case 'GET_PRODUCTS':
        return {
          ...state,
          products: action.payload
        };
        default:
        return state;
    }
  }
  