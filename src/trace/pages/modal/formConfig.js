import {sendLoginForm, sendRegisterForm} from "./utils";

export const formConfig = {
    Login: {
        title: "Вход",
        fields: [
            'email', 'password'
        ],
        button: "Войти",
        action: data => sendLoginForm(data)
    },
    Register: {
        title: "Регистрация",
        fields: [
            'login', 'email', 'password'
        ],
        button: "Отправить",
        action: data => sendRegisterForm(data)
    }
};