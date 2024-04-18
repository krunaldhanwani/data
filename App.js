import Category from './Category';
import Restaurent from './Restaurent';
import React, {useRef, useState, useEffect} from "react";
import './App.css';
const selctor = require('./Category.json');
 
function App() {
const [type, setType] = useState("All")
useEffect(()=>{
  console.log(type);
})
  return (
    <>
      {
        selctor.map(function (data) {
          return <Category typeNames={data.typeName} type={type} setType={setType} />
        })

      }

<div className="ms-4"  style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
  <Restaurent type={type}/>  
    </div>
    </>
  );
}

export default App;
