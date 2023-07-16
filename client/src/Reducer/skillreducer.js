import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchSkills= createAsyncThunk("/", async ()=>{
    try{
      const response  = await fetch("http://localhost:4000/")
      const jsonData = await response.json()
        return jsonData
     }
     catch(err){
       console.log(err)
     }
   })

const skillSlice = createSlice({
    name: "skills",
    initialState:{
        skills: [],
        loading: false
    },
    extraReducers:{
       [fetchSkills.pending]: (state,action)=>{
        state.loading = true
       },
       [fetchSkills.fulfilled]: (state,action)=>{
        state.loading = false;
        state.skills = action.payload
       },
       [fetchSkills.rejected] : (state,action)=>{
        state.loading = false;
       },
    }
})




export default skillSlice.reducer