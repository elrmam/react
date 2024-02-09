const INITIAL_VALUE = {
    movies: [],
  };
  
  export default function MoviesReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
      case 'GET_MOVIES':
        return {
          ...state,
          movies: action.payload
        };
        default:
        return state;
    }
  }
  