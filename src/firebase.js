import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLk2YB6cgYudrmwxdzkGHA1w0eWb5_I2s",
  authDomain: "eshop-fd427.firebaseapp.com",
  projectId: "eshop-fd427",
  storageBucket: "eshop-fd427.appspot.com",
  messagingSenderId: "946936942455",
  appId: "1:946936942455:web:9a116fdd6ef1d2ecac9b72",
  measurementId: "G-323FXJ5KMJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
