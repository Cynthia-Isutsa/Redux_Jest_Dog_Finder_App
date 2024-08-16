import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers : {
        addUser: (state, action) => {
            
            state.push(action.payload)
            console.log({action, state})
        }

    }
})
export const {addUser} = userSlice.actions
export default userSlice.reducer