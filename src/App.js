import React from "react";
import Layout from "./components/Layout";

function App() {
    // const [messages, setMessages] = useState(messagesArray)
    // const [text, setText] = useState('')
    // const [chat_id, setChatId] = useState(chat_id_default)

    // const ChangeText = useCallback(e => setText(e.target.value), [])
    // const selectChat = useCallback((id) => {
    //     setChatId(id)
    // }, [])
    // const sendMessage = useCallback((e) => {
    //     e.preventDefault()
    //     if (text.trim()) {
    //         setMessages([...messages, {user_id: user_id_mine, chat_id: chat_id, text: text}])
    //         setText('')
    //     }
    // }, [messages, text, chat_id])
    // const getUser = useCallback(id => users.find(user => id === user.id), [])
    //
    // const robotAnswer = useCallback(message => {
    //     if (message.user_id !== robot_id && chat_id === chat_id_robot) {
    //         setMessages([...messages, {
    //             chat_id: chat_id,
    //             user_id: robot_id,
    //             text: "Вы написали \"" + message.text + "\""
    //         }])
    //         // setTimeout(() => {
    //         // }, 1000)
    //     }
    // }, [messages, chat_id])
    // const handleChangeMessages = useCallback(() => {
    //     const message = messages[messages.length - 1]
    //     robotAnswer(message)
    // }, [messages, robotAnswer])
    //
    // const chat_title = chats.find(chat => chat.id === chat_id).title
    //
    // const [value, setValue] = useState('')
    // const handleChange = event => {
    //     console.log(event)
    //     // setState({name: event.target.value})
    // }

    return (
        <Layout/>
    )
}

export default App;
