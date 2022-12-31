
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQ-ZzKIrGVTsDK1ZFkqv_o7YZYDO2NFAk",
  authDomain: "tp-react-coderhouse-b34bf.firebaseapp.com",
  projectId: "tp-react-coderhouse-b34bf",
  storageBucket: "tp-react-coderhouse-b34bf.appspot.com",
  messagingSenderId: "157447956874",
  appId: "1:157447956874:web:fc11bcf577b92180d3c073"
};

const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}