export function increment() {
    return {
        type: INCREMENT,
        state:
    }
}

// export function someStrangeAction() {
//     return async function(dispatch, getState) {
//         if(getState().counterState % 2) {
//             dispatch({
//                 type: 'ADD',
//             })
//         }
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         dispatch({
//             type: 'TOGGLE_TODO',
//             id: 1
//         })
//     }
// }