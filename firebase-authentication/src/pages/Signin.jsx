import React from 'react'
import { useState } from 'react'
import { getAuth,signInWithEmailAndPassword} from "firebase/auth"
import { app } from '../firebase'

const auth = getAuth(app);

const Signin = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth , email,password)
    .then((userCredentials) => {
      // Signed in 
      const user = userCredentials.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
  };
  return (
    <div>
      <h1>
        Sign- In Page
      </h1>
      <div>
        <label>Email</label>
        <input type='email' required placeholder='Enter your email here' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label>Password</label>
        <input type='password' required placeholder='Enter your password here' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signin