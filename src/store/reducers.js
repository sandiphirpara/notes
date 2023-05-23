import { combineReducers } from "redux";

import Dashboard from "modules/dashboard/store/reducer";
import Login from "modules/login/store/reducer";

const rootReducer = combineReducers({
    Login,
    Dashboard,
});

export default rootReducer;
