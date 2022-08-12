import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:"0", name:"Rojit Dhakal"},
    {id:"1", name:"Roshan Dhakal"},
    {id:"2", name:"Adeet Dahal"},
    {id:"3", name:"Dhiraj Nagarkoti"}
]


const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{

    }

})
export const selectAllUsers=(state)=>state.users
export default userSlice.reducer