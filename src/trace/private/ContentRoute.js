import React from "react";
import {Route} from "react-router-dom";
import {store} from "../../index";
import {addMessage, addStoreChat, removeMessage, removeStoreChat} from "../../redux/actions";
import {connect} from "react-redux";

const ContentRoute = ({path, ContentComponent, RightBarComponent, exact, ttt}) => {
    console.log(RightBarComponent)
    return <Route path={path} exact={exact}>
        {
            RightBarComponent !== undefined ?
                <>
                    <main className="overflow-auto content p-2"><ContentComponent/></main>
                    <aside className="col-3 border p-0 overflow-auto mt-4"><RightBarComponent/></aside>
                </> :
                <main className="overflow-auto content-wide p-2 border"><ContentComponent/></main>
        }
    </Route>
}

export function mapDispatchToChat() {
    return {
        addChat: (chatKeyString) => store.dispatch(addStoreChat(chatKeyString)),
        removeChat: (chatKeyString) => store.dispatch(removeStoreChat(chatKeyString)),
        showChats: () => console.log(store.getState().chatKeys),
        getChats: () => store.getState().chatKeys,
        showMessages: () => console.log(store.getState().messages),
        getMessages: () => store.getState().messages,
        addMessage: (text, userID, chatID) => store.dispatch(addMessage(text, userID, chatID)),
        removeMessage: (messageID) => store.dispatch(removeMessage(messageID)),
    }
}

export default connect(mapDispatchToChat)(ContentRoute)