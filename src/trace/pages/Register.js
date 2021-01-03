import React from "react";
import {Form} from "./modal/Form";
import {formConfig} from "./modal/formConfig";

const Register = () => {
    const registerConfig = formConfig.login;
    return <div className="form">
        <Form fields={registerConfig.fields}
              action={registerConfig.action}
              button={registerConfig.button}/>
    </div>
}

export default Register