import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACZdkIwzI6nTgK2m5ZdUS2La2bTXYVV3w",
  authDomain: "meowear-db.firebaseapp.com",
  projectId: "meowear-db",
  storageBucket: "meowear-db.appspot.com",
  messagingSenderId: "1054457996667",
  appId: "1:1054457996667:web:279f210f0b276048d689de",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;