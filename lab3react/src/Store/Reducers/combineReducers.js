import { combineReducers } from "redux";
import favReducer from "./FavReducer";
import MoviesReducer from "./moviesredusers";

export default combineReducers({
    fav: favReducer,
    list: MoviesReducer,
});
