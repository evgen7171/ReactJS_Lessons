import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import {chatReducer} from "./chat/chatReducer";
import {routerMiddleware} from "react-router-redux";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const loggerMiddleware = createLogger()

const middleware = [
    thunk,
    // loggerMiddleware,
    routerMiddleware(history)
];

// combineReducers({
//         chatReducer, messageReducer
//     })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const configureStore = composeEnhancers(
    applyMiddleware(...middleware),
)(createStore)

const config = {
    key: 'openedChats',
    storage,
    whiteList: ['openedChats']
}

const pChatReducer = persistReducer(config, chatReducer)

const appStore = () => {
    let store = configureStore(pChatReducer)
    let persistor = persistStore(store)

    return {persistor, store}
}

export default appStore