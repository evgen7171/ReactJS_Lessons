import React, {useState} from "react";
import {MessageField} from "./components/MessageField";

/*
3. На каждое отправленное сообщение должен отвечать робот
(используйте componentDidUpdate).
4. Добавить автора к сообщениям и отображать его в интерфейсе.
Переделать логику ответа от робота в соответствии с этим.
*/
const users = [
    {id: 1, role: 'user', name: 'Иван'},
    {id: 2, role: 'bot', name: 'MR.RO5OT'},
    {id: 3, role: 'user', name: 'I am'},
]
const messagesArray = [
    {user_id: 1, text: 'Привет всем!'},
    {user_id: 2, text: 'Привет'},
];
const user_id_mine = 3
const robot_id = 2

function App() {
    const [messages, setMessages] = useState(messagesArray)
    const [text, setText] = useState('')
    const sendMessage = () => {
        setMessages([...messages, {user_id: user_id_mine, text: text}])
        setText('')
    }
    const getUser = id => users.find(user => id === user.id)
    const robotAnswer = message => {
        if (message.user_id !== robot_id) {
            setMessages([...messages, {
                user_id: robot_id,
                text: "Вы написали \"" + message.text + "\""
            }])
        }
    }
    const handleChangeMessages = () => {
        const message = messages[messages.length - 1]
        robotAnswer(message)
    }
    return (
        <form className="container border border-primary form mt-3 rounded">
            <label className="mb-3 mt-2 text-center w-100 h4">Messenger</label>
            <div className="form-control form-group bg-white messages-field border-primary">
                <MessageField messages={messages}
                              getUser={getUser}
                              handleChangeMessages={handleChangeMessages}
                              user_id_mine={user_id_mine}/>
            </div>

            <div className="form-group d-flex mt-3">
                <input type="text" className="form-control flex-grow-1 border border-primary" value={text}
                       placeholder="Введите сообщение..." onChange={e => setText(e.target.value)}/>
                <input type="button" className="btn btn-primary ml-3 control-btn"
                       aria-pressed="true" value="Отправить"
                       onClick={() => {
                           sendMessage()
                       }}/>
            </div>
        </form>
    );
}

export default App;
