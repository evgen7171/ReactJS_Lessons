import React from 'react'
import {Form} from "../pages/modal/Form";
import {formConfig} from "../pages/modal/formConfig";
import {SideBarWrapper} from "./SideBarWrapper";

export const SidebarLogin = () => {

    return <SideBarWrapper>
        <Form fields={formConfig.Login.fields}
              action={formConfig.Login.action}
              button={formConfig.Login.button}/>
    </SideBarWrapper>
}