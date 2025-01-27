import React from 'react'
import { useState } from 'react'
import {getAuth , createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { app } from '../firebase'

const auth = getAuth(app);
const googleProvider = new  GoogleAuthProvider()

const Signup = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth , email , password).then(value => alert("success!!"));
  };
  const signupwithGoogle = () => {
    signInWithPopup(auth,googleProvider);
  }

  return (
    <div style={{alignItems : 'center', marginLeft : "50%"} }>
      <div> 
        <h1>
          Sign-Up Page
        </h1>
        <label>Email</label>
        <input type='email' required placeholder='Enter your email here' onChange={(e) => setEmail(e.target.value)} value={email}/>
      </div>
      <div>
        <label>Password</label>
        <input type='password' required placeholder='Enter your password here' onChange={(e) => setPassword(e.target.value) } value={password}/>
      </div>
      <button onClick={createUser}>Submit</button>
      <button onClick={signupwithGoogle}>Sign-Up With Google</button>
    </div>
  )
}

export default Signup