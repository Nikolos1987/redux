import { createStore,combineReducers } from "redux";
import { test,test1 } from "./reduser";
export const store=createStore(combineReducers({te:test,se:test1}))
