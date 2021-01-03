import {store} from "../index";

export const mapStateToAuth = () => {
    const user = store.getState().authReducer.user.user;
    return {
        auth: store.getState().authReducer.auth,
        user: {
            email: user.email
        }
    }
}
