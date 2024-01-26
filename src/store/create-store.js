import { createStore,combineReducers } from "redux";
import { test } from "./reduser";
export const store=createStore(combineReducers({te:test}))
