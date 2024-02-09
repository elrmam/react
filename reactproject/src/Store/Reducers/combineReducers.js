import { combineReducers } from "redux";
import favReducer from "./FavReducer";
import ProductsReducer from "./moviesredusers";
import authReducer from './authReducer';
import cartReducer from './cartReducer';



export default combineReducers({
    fav: favReducer,
    list: ProductsReducer,
    auth: authReducer, 
    cart: cartReducer,

});
