import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBCVEJ6FqTdaYbeqQnUlbWVWMTZbflHvQk",
    authDomain: "whatsapp-clone-1ebeb.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-1ebeb.firebaseio.com",
    projectId: "whatsapp-clone-1ebeb",
    storageBucket: "whatsapp-clone-1ebeb.appspot.com",
    messagingSenderId: "81483470399",
    appId: "1:81483470399:web:2123718393cb8cc9b5ca8a",
    measurementId: "G-LZJMFEJN53"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}; 
export default db;