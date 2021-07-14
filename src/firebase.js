import firebase from "firebase";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAxf633TdvTzJ-9i2nEU3GNMFUIvh6RkcU",
    authDomain: "pwitter-9ce31.firebaseapp.com",
    projectId: "pwitter-9ce31",
    storageBucket: "pwitter-9ce31.appspot.com",
    messagingSenderId: "323934622013",
    appId: "1:323934622013:web:a9b6056a3ab349d905f554",
    measurementId: "G-MBJZK59YHV"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
export const auth = firebaseApp.auth()


export default db;
