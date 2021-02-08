import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import PostReducer from "./reducers/PostReducer";

const root = combineReducers({ PostReducer });
const middlewares = [thunkMiddleware];
const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
