import { useState } from 'react'
import { app } from './Firebase';
import {collection,addDoc,getFirestore,doc ,getDoc,query,where,getDocs,updateDoc} from "firebase/firestore";
import './App.css'


const firestore = getFirestore(app);
function App() {
  
  const writeData = async() => {
    const result = await addDoc(collection(firestore,'cities'),{
      name : "Jaigaon",
      pincode : 736182,
      lat : 123,
      lon : 456,
    });
    console.log("Result" , result);
  };
   
  const makeSubCollection = async() => {
    await addDoc(collection(firestore,"cities/v8NLtFnyvc55sokeGr5t/places"),{
      name : "Tirupati Impex",
      description : "Shop",
      date : Date.now(),
    });
  };

  const getDocument = async() => {
    const ref = doc(firestore,"cities", "v8NLtFnyvc55sokeGr5t");
    const snap = await getDoc(ref);
    console.log(snap.data());
  };
  const getDocumentByQuery = async() => {
    const collectionRef = collection(firestore,"cities");
    const q = query(collectionRef,where("pincode","==",736182));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  };
  
  const update = async() => {
    const docRef = doc(firestore,"cities","Fyi50To7KYs17jujeTZK");
    await updateDoc(docRef,{
      name : "Deokota toll"
    });
  };

  return (
    <>
    <h2 style={{marginLeft : "40%"}}>
      Insert location data in FireStore Database
    </h2>
     <button onClick={writeData} style={{marginLeft : "50%" , borderRadius : "20px" , marginTop : "20px"}}>Put Data</button>
     <button onClick={makeSubCollection} style={{marginLeft : "50%" , borderRadius : "20px" , marginTop : "20px"}}>Put Sub-Data</button>
     <button onClick={getDocument}> Get Document</button>
     <button onClick={getDocumentByQuery}> Get Document By Query</button>
     <button onClick={update}>Update Document</button>
    </>
  )
}

export default App
