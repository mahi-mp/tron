import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import {authenticate} from "./Authenticate"
import { home } from "./Home";
import { profileDetails } from "./ProfileDetails";

const reducers = {
  home,
  authenticate,
  profileDetails
};

const rootReducers = combineReducers(reducers);
// create saparate separate for separate controller and combine reducer here

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export { store, reducers };
