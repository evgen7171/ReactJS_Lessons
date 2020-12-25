import {API_URL} from "../../constans";
import {getMessagesFailure, getMessagesRequest, getMessagesSuccess} from "./actions";

export const getMessages = () => async (dispatch) => {
    dispatch(getMessagesRequest());
    try {
        const res = await fetch(API_URL);
        const messages = await res.json();
        dispatch(getMessagesSuccess(messages));
    } catch (e) {
        dispatch(getMessagesFailure(e));
    }
}