import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers : {
        addUser: (state, action) => {
            
            state.push(action.payload)
            console.log({action, state})
        },
        updateUser: (state, action) => {
            const { id, name, email} = action.payload
            const updatedUser = state.find((user: any) => user.id == id)

            if (updatedUser) {

                updatedUser.name = name
                updatedUser.email = email

            }

        }

    }
})
export const {addUser} = userSlice.actions
export const {updateUser} = userSlice.actions
export default userSlice.reducer