import { combineReducers } from "redux";
import appStatus from "./appStatus";
import dogs from "./dogs.js";
import counter from "./counter.js";

export default combineReducers({
  appStatus,
  dogs,
  counter
});
