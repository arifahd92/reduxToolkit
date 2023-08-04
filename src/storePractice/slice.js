import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:user,
    initialState:[],

    reducer:{
       addUser(state,action){
        state.pusu(action.payload)
       },
       removeUser(state,action){
        //logic
       }

    }
})
export const {addUser,removeUser}=user.actions
//above export will be used where these method will be needed with dispatch (dispatch(addUser(data))) 
//and dispatch is useDispatch() of rect-redux
// and whatever parameter will be sent will be accessed using action.anyThing
export default userSlice// this will be used in store only