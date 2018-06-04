/***********
 * Redux reducer file.
 *
 * All your reducer logic can go in this file in appReducer.
 ***********/

import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import * as types from "actionTypes";

const initialState = {
    user: null
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        // add your app actions here
        case types.APP_LOGIN: {
            return { ...state, user: action.payload.user };
        }
        default:
            return state;
    }
}

// combine all reducers into one main reducer
const rootReducer = combineReducers({
    app: appReducer,
    routing: routerReducer
});

export default rootReducer;
