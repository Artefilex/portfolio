import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
function DeleteSkill({id,onSuccess}) {
 const deleteHandle = async () =>{
    await fetch(`${process.env.REACT_APP_HOST_URL}/admin/panel/skill/delete/${id}`,{
        method:"POST",
        headers: { "Content-Type": "application/Json" },
        body: JSON.stringify({ id :id}),
    })
    onSuccess()
 }
    


  return <button onClick={deleteHandle}><AiOutlineDelete/></button>;
}

export default DeleteSkill;
