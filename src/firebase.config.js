// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOybYnyNyy0Hs4hPztoLUD-CrMQqG5Y8E",
  authDomain: "the-moments-8ffec.firebaseapp.com",
  projectId: "the-moments-8ffec",
  storageBucket: "the-moments-8ffec.appspot.com",
  messagingSenderId: "917301753291",
  appId: "1:917301753291:web:87e39cc3836b0d58f3b24e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)