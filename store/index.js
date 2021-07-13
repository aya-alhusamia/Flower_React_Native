import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchProducts } from "../store/action/productActions";
import { fetchShops } from "../store/action/shopActions";
import productReducer from "./reducers/productReducer";
import shopReducer from "./reducers/shopReducer";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
const rootReducer = combineReducers({
  products: productReducer,
  shops: shopReducer,
  user: userReducer,
  items: cartReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
store.dispatch(fetchProducts());
store.dispatch(fetchShops());
export default store;
// export default rootReducer;
