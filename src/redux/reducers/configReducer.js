export const configReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FORM_CONFIG':
            return {...state, formConfig: action.payload};

        default:
            return state
    }
}
