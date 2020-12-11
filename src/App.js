import React, {useCallback, useState} from "react";
import {MessageField} from "./components/MessageField";
import {ChatList} from "./components/ChatList";
import {Header} from "./components/Header";

const users = [
    {id: 0, role: 'bot', name: 'MR.RO5OT'},
    {id: 1, role: 'user', name: 'Иван'},
    {id: 2, role: 'user', name: 'I am'},
]
const chats = [
    {id: 0, title: 'chat with bot'},
    {id: 1, title: 'messenger'},
    {id: 2, title: 'test'},
]
const messagesArray = [
    {user_id: 0, chat_id: 0, text: 'Привет'},
    {user_id: 1, chat_id: 1, text: 'Привет всем!'},
    {user_id: 1, chat_id: 1, text: 'Как дела?'},
    {
        user_id: 1,
        chat_id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, deleniti nisi nobis odio sunt.'
    },
    {
        user_id: 2,
        chat_id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, deleniti nisi nobis odio sunt.'
    },
];
const user_id_mine = 2
const robot_id = 0
const chat_id_robot = 0
const chat_id_default = 2

function App() {
    const [messages, setMessages] = useState(messagesArray)
    const [text, setText] = useState('')
    const [chat_id, setChatId] = useState(chat_id_default)

    const ChangeText = useCallback(e => setText(e.target.value), [])
    const selectChat = useCallback((id) => {
        setChatId(id)
    }, [])
    const sendMessage = useCallback((e) => {
        e.preventDefault()
        if (text.trim()) {
            setMessages([...messages, {user_id: user_id_mine, chat_id: chat_id, text: text}])
            setText('')
        }
    }, [messages, text, chat_id])
    const getUser = useCallback(id => users.find(user => id === user.id), [])

    const robotAnswer = useCallback(message => {
        if (message.user_id !== robot_id && chat_id === chat_id_robot) {
            setMessages([...messages, {
                chat_id: chat_id,
                user_id: robot_id,
                text: "Вы написали \"" + message.text + "\""
            }])
            // setTimeout(() => {
            // }, 1000)
        }
    }, [messages, chat_id])
    const handleChangeMessages = useCallback(() => {
        const message = messages[messages.length - 1]
        robotAnswer(message)
    }, [messages, robotAnswer])

    const chat_title = chats.find(chat => chat.id === chat_id).title

    return (
        <form className="container border border-primary form mt-3 rounded" onSubmit={sendMessage}>
            {/* по заданию здесь должен открываться компонент Header*/}
            <Header chat_title={chat_title}/>
            <div className="form-group d-flex mb-2">
                <ChatList chats={chats} chat_id={chat_id} selectChat={selectChat}/>
                <div className="w-100">
                    <MessageField messages={messages}
                                  getUser={getUser}
                                  handleChangeMessages={handleChangeMessages}
                                  user_id_mine={user_id_mine}
                                  chat_id={chat_id}/>

                    <div className="form-group d-flex mt-2">
                        <input type="text" className="form-control flex-grow-1 border border-primary"
                               value={text} placeholder="Введите сообщение..."
                               onChange={ChangeText}
                        />
                        <input type="submit" className="btn btn-primary ml-3 control-btn"
                               aria-pressed="true" value="Отправить"
                        />
                    </div>
                </div>
            </div>
            {/* по заданию здесь должен закрываться компонент Header*/}
        </form>
    );
}

export default App;
