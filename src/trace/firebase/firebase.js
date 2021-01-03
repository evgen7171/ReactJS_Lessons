import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyChTA1XrcKEI4rU8XcGtwSLWObZ2KI0Ry0",
    authDomain: "reactnetdb.firebaseapp.com",
    databaseURL: "https://reactnetdb-default-rtdb.firebaseio.com",
    projectId: "reactnetdb",
    storageBucket: "reactnetdb.appspot.com",
    messagingSenderId: "447017808308",
    appId: "1:447017808308:web:af12029a7c5d27f79dc2e1",
    measurementId: "G-05R2RXR2XM"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();

export function signup(email, password){
    console.log(email, password);
    return auth().createUserWithEmailAndPassword(email, password);
}
export function signin(email, password){
    return auth().signInWithEmailAndPassword(email, password);
}
// const config = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
// };
// firebase.initializeApp(config);
// const signIn = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     const promise = firebase.auth().signInWithRedirect(provider)
//
//     promise.then(result => {
//
//         const user = result.user;
//
//         firebase.database().ref('users/' + user.uid).set({
//             email: user.email,
//             name: user.displayName
//         })
//
//     }).catch(e => {
//         //handle errors
//
//     });
// }