import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import reducer from "./reducer";

export default createStore(reducer, compose(applyMiddleware(createLogger(), ReduxThunk)));
