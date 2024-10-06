// import { create } from "@mui/material/styles/createTransitions";
import { createContext, useContext } from "react";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBDW-uU9llqmCAw5yf207WZ4IcIIa5Fekw",
    authDomain: "fir-auth-69b4c.firebaseapp.com",
    projectId: "fir-auth-69b4c",
    storageBucket: "fir-auth-69b4c.appspot.com",
    messagingSenderId: "462936464600",
    appId: "1:462936464600:web:af0ddd26b87f78d5be8bad",
     
};
const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider =(props) =>{
    
  
    return(

        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}

