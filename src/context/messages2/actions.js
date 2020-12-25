export const getMessagesRequest = () => {console.log('request')}
export const getMessagesSuccess = (messages) => {console.log('success', messages)}
export const getMessagesFailure = (error) => {console.log('error',error)}


export const myAction = (messages) => {return messages}