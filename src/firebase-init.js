
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAegWsazy9pgGT0LS8xmTir23huLe0tzRs",
  authDomain: "clone-8f18b.firebaseapp.com",
  projectId: "clone-8f18b",
  storageBucket: "clone-8f18b.appspot.com",
  messagingSenderId: "1012869565039",
  appId: "1:1012869565039:web:9c047023440646798fdb9a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }