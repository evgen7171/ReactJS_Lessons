import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const messages = ['Привет', 'Как дела?']

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    const [messages, setMessage] = useState(['Привет', 'Как дела?']);
    const addMessage = text => {
        setMessage([...messages, text])
    }
    return (
        <div>
            {messages.map((message, key) =>
                <MessageComponent text={message} key={key}/>
            )}
            <input type="button" value="Добавить" onClick={() => addMessage('Нормально')}/>
        </div>
    )
}

ReactDOM.render(
    <MessageField/>,
    document.getElementById('root'),
);
