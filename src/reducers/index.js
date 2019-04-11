import { combineReducers } from "redux";
import appStatus from "./appStatus";
import dogs from "./dogs.js";
import gameTwo from "./game2Reducer"

export default combineReducers({
  appStatus,
  dogs,
  gameTwo
});
