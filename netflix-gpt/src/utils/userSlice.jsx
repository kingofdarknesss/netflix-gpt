import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        userdetail:null,
        
    },
    reducers:{
        addUser: (state,action)=>{
            state.userdetail= action.payload
        },
        removeUser: (state)=>{
            state.userdetail= null

        },
    },
})
export const {addUser,removeUser} =userSlice.actions;

export default userSlice.reducer;