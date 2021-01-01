import {combineReducers} from "redux";
import {chatReducer} from "./chatReducer";
import {messageReducer} from "./messageReducer";
import {configReducer} from "./configReducer";
import {authReducer} from "./authReducer";
import {menuReducer} from "./menuReducer";

export const rootReducer = combineReducers({
    chatReducer,
    messageReducer,
    configReducer,
    authReducer,
    menuReducer
});