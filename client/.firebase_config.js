import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

export const firebaseConfig = {
    apiKey: "AIzaSyAEiLxahflvk-npAB0_vBC1snEA0707rk0",
    authDomain: "domicare-tunisia.firebaseapp.com",
    projectId: "domicare-tunisia",
    storageBucket: "domicare-tunisia.appspot.com",
    messagingSenderId: "999266006343",
    appId: "1:999266006343:web:9dcfca52a9d8b9e7954862",
    measurementId: "G-B4Y10CG3KS"
  };
 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

export { auth,provider,storage};
export default db;
