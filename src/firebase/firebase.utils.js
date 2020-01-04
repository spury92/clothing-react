import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKaPTnzcfSJKAwfwPK3VhDiRk1F3sfvaU",
    authDomain: "clothing-5c598.firebaseapp.com",
    databaseURL: "https://clothing-5c598.firebaseio.com",
    projectId: "clothing-5c598",
    storageBucket: "clothing-5c598.appspot.com",
    messagingSenderId: "962290028836",
    appId: "1:962290028836:web:37b406cc399dda328d23b1",
    measurementId: "G-ER10XWRHTQ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
