import {formConfig} from "./formConfig";

export const getTitleFormByComponentName = componentName => {
    // const matches = componentName.matchAll(/\(([a-zA-Z]+)\)/g);
    // return [...matches][0][1];
    return formConfig[componentName];
}

function verifyDataKey(data, key) {
    if (!data[key].trim()) {
        return {[key]: 'empty'};
    }
    switch (key) {
        default:
            return false;
    }
}

function verifyData(data) {
    const res = [];
    Object.keys(data).forEach(key => {
        const verification = verifyDataKey(data, key)
        if(verification){
            res.push(verification);
        }
    })
    return res;
}

export const sendLoginForm = data => {
    console.log(verifyData(data))
    // firebase.auth().getRedirectResult().then(result => {
    //     const user = result.user;
    //     if (user) {
    //         console.log(user)
    //     }
    // }).catch(e => {
    //     console.log(e)
    // });
}
export const sendRegisterForm = data => {
    console.log('register', data)
}
