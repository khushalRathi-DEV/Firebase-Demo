import { createContext } from "react";
import {initializeApp} from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase ,set ,ref} from 'firebase/database';
import { useContext } from "react";

const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_STORAGE_BUCKET>",
  messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
  appId: "<YOUR_APP_ID>",
  databaseUrl: "<YOUR_DATABASE_URL>"
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => { 
  const signupUserWithEmalAndPassword = (email,password) => {
    createUserWithEmailAndPassword(firebaseAuth , email ,password)
  };
  const putData = (key,data) => {
    set(ref(database,key),data);
  }

  return (
    <FirebaseContext.Provider value={{signupUserWithEmalAndPassword ,putData}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}