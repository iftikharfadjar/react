import { createStore } from "redux";
import { ShopReducer } from "./Reducer";

export const sportDataStore = createStore(ShopReducer);
