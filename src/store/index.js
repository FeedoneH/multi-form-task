import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { MODULE_NAME as steps, reducer } from "./step";
import { MODULE_NAME as error, reducer as errorReducer } from "./error";



const rootReducer = combineReducers({
  [steps]: reducer,
  [error]: errorReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
