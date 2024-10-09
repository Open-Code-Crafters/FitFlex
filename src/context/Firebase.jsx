import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDx_19T2NadPO43rrqZWKt6i7I2Ssbkmq8",
    authDomain: "fitflex-78e15.firebaseapp.com",
    projectId: "fitflex-78e15",
    storageBucket: "fitflex-78e15.appspot.com",
    messagingSenderId: "220563280186",
    appId: "1:220563280186:web:63f6fe15b152eaedcf8003"
  };
  ;
const firebaseApp = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);