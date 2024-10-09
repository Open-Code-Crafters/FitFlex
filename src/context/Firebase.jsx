import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBDW-uU9llqmCAw5yf207WZ4IcIIa5Fekw",
    authDomain: "fir-auth-69b4c.firebaseapp.com",
    projectId: "fir-auth-69b4c",
    storageBucket: "fir-auth-69b4c.appspot.com",
    messagingSenderId: "462936464600",
    appId: "1:462936464600:web:af0ddd26b87f78d5be8bad",
  };
  
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