import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { map } from "./Map";

const reducers = {
  map,
};

const rootReducers = combineReducers(reducers);
// create saparate separate for separate controller and combine reducer here

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export { store, reducers };
