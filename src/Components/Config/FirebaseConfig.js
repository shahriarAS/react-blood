import firebase from "firebase/app";
import "firebase/auth"
import "firebase/database";

const config = {
    apiKey: "AIzaSyCtgPgyqjkE0Lj0wlMzoGDKOsI6h6qS5U0",
    authDomain: "test-auth-c2927.firebaseapp.com",
    databaseURL: "https://test-auth-c2927.firebaseio.com",
    projectId: "test-auth-c2927",
    storageBucket: "test-auth-c2927.appspot.com",
    messagingSenderId: "777276554830",
    appId: "1:777276554830:web:de38b3dd958903d2790d1f",
    measurementId: "G-PVPFCNKV6X"
};

firebase.initializeApp(config);

export default firebase;