import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./Reducers/combineReducers";
import { thunk } from "redux-thunk";


const mystore = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))

export default mystore;