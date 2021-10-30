import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../src/firebase1";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
