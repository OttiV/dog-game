import { combineReducers } from "redux";
import appStatus from "./appStatus";
import breeds from "./dogs.js";

export default combineReducers({
  appStatus,
  breeds
});
