import React, { useEffect, useState } from "react";
import Nav from "./Nav"

function Home() {
  const [obj, setObj] = useState({})


useEffect(()=>{
 const data = async()=>{
  try{
   const response  = await fetch("http://localhost:4000/")
   const jsonData = await response.json()
   setObj(jsonData)  
  }
  catch(err){
    console.log(err)
  }
 }
 data()
}, [])
  return <>
   <Nav/>
   {obj.name}
  </>;
}

export default Home;
