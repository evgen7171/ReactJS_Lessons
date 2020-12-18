import React from "react";

export const ControlPanel = ({text, changeText}) => {

    return <div className="form-group d-flex mt-0 mb-0">
        <input type="text" className="form-control flex-grow-1 border border-primary"
               value={text} placeholder="Введите сообщение..."
               onChange={changeText}/>
        <input type="submit" className="btn btn-primary ml-3 control-btn"
               aria-pressed="true" value="Отправить"/>
    </div>
}