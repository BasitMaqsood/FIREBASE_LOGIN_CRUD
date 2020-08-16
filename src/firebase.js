import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCq_XcQrHDhUU5hUFcqMF_Q9_zcc8SnATU",
  authDomain: "fireact-c667f.firebaseapp.com",
  databaseURL: "https://fireact-c667f.firebaseio.com",
  projectId: "fireact-c667f",
  storageBucket: "fireact-c667f.appspot.com",
  messagingSenderId: "270148785150",
  appId: "1:270148785150:web:8762621e7256469a03e6af",
};
// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);
const firebaseRef = fireDB.database().ref();

export default {
  firebase: firebaseRef,
  fireDB: fireDB,
};
