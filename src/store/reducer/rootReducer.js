import { combineReducers } from "redux";
import { isLoggedIn } from "./isLoggedIn";

export const rootReducer = combineReducers({isLoggedIn})