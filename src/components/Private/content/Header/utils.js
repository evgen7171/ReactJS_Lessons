import {store} from "../../../../index";
import {hideProfileMenu, showProfileMenu} from "../../../../redux/actions";

export const mapStateToMenu = () => {
    return {
        menuVisible: store.getState().menuReducer.visible
    }
}
export const mapDispatchToMenu = () => {
    return {
        showMenu: () => store.dispatch(showProfileMenu()),
        hideMenu: () => store.dispatch(hideProfileMenu()),
    }
}

export const hideMenu = e => {
    console.log()
}