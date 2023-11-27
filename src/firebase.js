// Import the functions you need from the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoF7Q6EH1Wh89vZFj550SGa65kC_M_Sno",
  authDomain: "charlotte-e2a79.firebaseapp.com",
  projectId: "charlotte-e2a79",
  storageBucket: "charlotte-e2a79.appspot.com",
  messagingSenderId: "897084488658",
  appId: "1:897084488658:web:e6f34de9265320e63de60b",
  measurementId: "G-MTXGNLDFFR",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
