import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8FQ76YQBxNssAnoTlcDiBnHEYPYl0Vlo",
  authDomain: "mybills-98474.firebaseapp.com",
  projectId: "mybills-98474",
  storageBucket: "mybills-98474.appspot.com",
  messagingSenderId: "893513124000",
  appId: "1:893513124000:web:ed57fb63db44caf66361c5",
  measurementId: "G-GQ5K22L33H",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
