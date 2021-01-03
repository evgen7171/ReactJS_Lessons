import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import {chatReducer} from "./reducers/chatReducer";
import {routerMiddleware} from "react-router-redux";
import {createBrowserHistory} from 'history';
import {messageReducer} from "./reducers/messageReducer";
import {configReducer} from "./reducers/configReducer";
import {authReducer} from "./reducers/authReducer";
import {rootReducer} from "./reducers/rootReducer";
// import {createLogger} from "redux-logger";

const history = createBrowserHistory();

// const loggerMiddleware = createLogger()

const middleware = [
    thunk,
    // loggerMiddleware,
    routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const configureStore = composeEnhancers(
    applyMiddleware(...middleware),
)(createStore)

const config = {
    key: 'root',
    storage,
    whiteList: ['chatKeys', 'messages', 'formConfig']
}

const pChatReducer = persistReducer(config, rootReducer);

const appStore = () => {
    let store = configureStore(pChatReducer)
    let persistor = persistStore(store)

    return {persistor, store}
}

export default appStore