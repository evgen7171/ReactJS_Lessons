export function createStore(reducer, initialState) {
    let state = reducer(initialState, {type: '__INIT__'});

    return {
        dispatch(action) {
            state = reducer(state, action);
        },
        getState() {
            return state
        }
    }
}