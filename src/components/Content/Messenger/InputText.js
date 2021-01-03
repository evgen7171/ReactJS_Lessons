import React, {useState} from "react";

export const InputText = () => {
    const [text, setText] = useState('');
    const submit = e => {
        e.preventDefault();
        if (text.trim()) {
            console.log(text);
            setText('');
        }
    };
    return <form className="d-flex justify-content-between"
                 onSubmit={submit}>
        <input type="text" name="text" value={text}
               onChange={e => setText(e.target.value)} placeholder="Напишите сообщение..."/>
        <input type="submit" value="Ок"/>
    </form>;
}