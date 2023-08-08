import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB-ciIYzQ9W-N797b--E_4i_dDseoUxRGE",
  authDomain: "typescript-a84d7.firebaseapp.com",
  projectId: "typescript-a84d7",
  storageBucket: "typescript-a84d7.appspot.com",
  messagingSenderId: "278529870760",
  appId: "1:278529870760:web:130eb50d538d5cccd0ab9d",
  measurementId: "G-X327JEZVHR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
