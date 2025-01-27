import {getAuth , createUserWithEmailAndPassword, signOut} from "firebase/auth";
import {onAuthStateChanged} from "firebase/auth";
import { app } from "./firebase";
import './App.css'
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import {useState,useEffect} from 'react'

//const provider = new GoogleAuthProvider();

const auth = getAuth(app);

function App() {
  const [user,setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user){
        //Yes ,you are logged in
        console.log("hello",user);
        setUser(user);
      }
      else {
        //User not logged in
        console.log("You are not logged in");
        setUser(null);
      }
    })
  },[]);

  if(user ===  null){
    return (
      <div>
        <Signup />
        <Signin/>
      </div>
    )
  }

  return (
    <div>
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

export default App
