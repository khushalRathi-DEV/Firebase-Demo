import { useState } from 'react'
import { useFirebase } from './context/Firebase';
import './App.css'

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const firebase = useFirebase();
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
      <button onClick={() => {firebase.signupUserWithEmalAndPassword(email,password)
      firebase.putData("users/" + "test", { email,password});
      }}>Submit</button>
    </div>
  )
}

export default App
