import { combineReducers } from "redux";
import appStatus from "./appStatus";
import dogs from "./dogs.js";

export default combineReducers({
  appStatus,
  dogs
});
