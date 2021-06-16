import Rebase from "re-base";
import firebase from "firebase/app";
import "@firebase/database";

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyAU9DzZ2UJ8jLHw2vVg-K6zBpuMx6AwHko",
    authDomain: "catch-of-the-day-mayank-fabef.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-mayank-fabef-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-mayank-fabef",
    storageBucket: "catch-of-the-day-mayank-fabef.appspot.com",
    messagingSenderId: "788222186854",
    appId: "1:788222186854:web:cc000ada948be56bbf24a7",
    measurementId: "G-EF51HT760C"
        
});

const base = Rebase.createClass(firebaseApp.database());
// this is named export
export {firebaseApp};


//this is default export
export default base;
