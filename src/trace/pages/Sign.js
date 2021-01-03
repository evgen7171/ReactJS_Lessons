import React from "react";
import {Form} from "./modal/Form";

const Sign = ({config}) => {
    return <div className="form">
        <header className="form-header">{config.title}</header>
        <main className="form-main">
            <Form fields={config.fields}
                  action={config.action}
                  button={config.button}/>
        </main>
    </div>
}

export default Sign