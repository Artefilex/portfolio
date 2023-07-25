import React, { useState } from "react";
import { handleChange } from "../../formUtils";
function PortfolyCreate({ onSuccess}) {
  
    const [form, setForm] = useState({
        header : "",
        content  : "",
        projecturl: "",
    })

    const handleSubmit = async (e)=>{
        e.preventDefault()
    const response = await fetch(`${process.env.REACT_APP_HOST_URL}/admin/panel/portfoly/create`,{
        method: "POST",
        headers: {"Content-Type": "application/Json"},
        body: JSON.stringify({form:form})
      })
      if(response.ok){
        setForm({
            header : "",
            content  : "",
            projecturl: "",
        })
      }
      onSuccess()
      
    }
  
    return <form onSubmit={handleSubmit}>
    <div>
        <h4> Header</h4>
        <input type="text" name="header" value={form.header} onChange={(e) => handleChange(e, form , setForm)} />
    </div>
    <div>
        <h4> Content</h4>
        <textarea name="content" id="" cols="30" rows="10" value={form.content} onChange={(e) => handleChange(e, form , setForm)}></textarea>
    </div>
    <div>
        <h4> Project Url</h4>
        <input type="text"  name="projecturl" value={form.projecturl} onChange={(e) => handleChange(e, form , setForm)}/>
    </div>
    <div>
       <button type="submit"> Submit </button>
    </div>
    </form>;
}

export default PortfolyCreate;
