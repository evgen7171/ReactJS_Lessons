import firebase from "firebase";
import {store} from "../index";
import {login, logout} from "../redux/actions";

const config = {
    apiKey: "AIzaSyChTA1XrcKEI4rU8XcGtwSLWObZ2KI0Ry0",
    authDomain: "reactnetdb.firebaseapp.com",
    databaseURL: "https://reactnetdb-default-rtdb.firebaseio.com",
    projectId: "reactnetdb",
    storageBucket: "reactnetdb.appspot.com",
    messagingSenderId: "447017808308",
    appId: "1:447017808308:web:af12029a7c5d27f79dc2e1",
    measurementId: "G-05R2RXR2XM"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth;
export const db = firebase.database();

export function signUp(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function logOut() {
    return auth().signOut()
}

export function authorize() {
    auth().onAuthStateChanged(user => {
        if (user) {
            store.dispatch(login(user));
        } else {
            store.dispatch(logout());
        }
    })
}