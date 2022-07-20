import { combineReducers } from "redux";
import { hardShoppingListReducer } from "./hard-shopping-list";

export const RootReducer = combineReducers({
  hardShoppingList: hardShoppingListReducer,
});
