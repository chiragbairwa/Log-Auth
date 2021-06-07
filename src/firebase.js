import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxkAJ1Q4MDwdti9Pl-xUJSN0yaz-NSCz8",
    authDomain: "react-auth-b261e.firebaseapp.com",
    projectId: "react-auth-b261e",
    storageBucket: "react-auth-b261e.appspot.com",
    messagingSenderId: "794144524570",
    appId: "1:794144524570:web:647637e84ba74ddea184a3"
  };

  const app = firebase.initializeApp(firebaseConfig);
// const app = firebase.initializeApp({
//     apikey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// })

export const auth = app.auth()
export default app