import {
  DASHBOARD_SET_USERNAME,
  DASHBOARD_SET_ACTIVE_USERS,
  DASHBOARD_SET_GROUP_CALL_ROOMS,
} from "../actions/dashboardActions";

const initState = {
  username: "",
  activeUsers: [],
  groupCallRooms: [],
};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case DASHBOARD_SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case DASHBOARD_SET_ACTIVE_USERS:
      return {
        ...state,
        activeUsers: action.activeUsers,
      };
    case DASHBOARD_SET_GROUP_CALL_ROOMS:
      return {
        ...state,
        groupCallRooms: action.groupCallRooms,
      };
    default:
      return state;
  }
};
export default dashboardReducer;
