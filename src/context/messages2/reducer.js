import {REQUEST_STATUS} from '../../constans';
import * as types from './types';

const initialState = {
    messages: [],
    request: {
        status: REQUEST_STATUS.IDLE,
        error: null
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_MESSAGES_REQUEST:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.LOADING
                }
            };
        case types.GET_MESSAGES_SUCCESS:
            return {
                messages: action.payload.messages,
                request: {
                    error: null,
                    status: REQUEST_STATUS.SUCCESS
                }
            };
    }
}