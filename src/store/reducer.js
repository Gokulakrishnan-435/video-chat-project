import { combineReducers } from "redux";
import dashboardReducer from "./reducers/dashboardReducer";
import callReducer from "./reducers/callReducer";

 let reducer = combineReducers({
  dashboard: dashboardReducer,
  call: callReducer,
});
export default reducer