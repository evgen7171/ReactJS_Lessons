import {combineReducers} from "./reducers/combineReducer";
// import {todosReducer} from "./redux/reducers/todosReducer";
import {counterReducer} from "./reducers/counterReducer";
import {createStore} from "./createStore";
import {increment} from "./actions";
import {applyMiddleware} from "./middlewares/applyMiddleware";
// import {thunk} from "./redux/middlewares/thunk";
import {logger} from "./middlewares/logger";

export function example()
{
    const reducer = combineReducers({counterReducer})
    const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
    const store = createStoreWithMiddleware(reducer, {
        todoState: [],
        counterState: 0,
    })
    console.log(store.getState())
    store.dispatch(increment())
    console.log(store.getState())
    // store.dispatch(someStrangeAction())
}