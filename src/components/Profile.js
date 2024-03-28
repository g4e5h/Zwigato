import React, { useState, useEffect } from 'react'

function Profile(props) {
  const [value1, setValue1]=useState(0);
  const [value2, setValue2]=useState(0);
  
  function increment(){
    setValue1((value)=>value+1);
    setValue2((value)=>value+2);
  }

  useEffect(()=>{
    console.log("console.log from UseEffect Called no dependency array😎")

    return ()=>{
      console.log("console.log from UseEffect return no----------- dependency array")
    }
  });


  return (
    <div>
    {console.log("console.log from functional render")}
      <h1>Profile Functional Component 😉</h1>
      <h2>Props = {JSON.stringify(props)}</h2>
      <h2>Value1 = {value1}</h2>
        <h2>Value2 = {value2}</h2>
        <button onClick={increment}> Increase value 1 by 1 and value 2 by 2</button>
    </div>
  )
}



export default Profile;
