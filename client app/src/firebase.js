import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCpQCInUHhzmzZWEKoD0xgVSdSlkTeUXvc",
    authDomain: "projectchat-85aaa.firebaseapp.com",
    projectId: "projectchat-85aaa",
    storageBucket: "projectchat-85aaa.appspot.com",
    messagingSenderId: "813822699471",
    appId: "1:813822699471:web:55d3aec753b0ecb64bd4ba"
}).auth()
