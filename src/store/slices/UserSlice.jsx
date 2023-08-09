import { createSlice } from "@reduxjs/toolkit";
//all the methods are key of userSlice.action
//copy of store
//********************************************************** */
//instead of this file i used SliceThunk.js
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    //now going to define reducers , reducers arew pure functions that specify how the application state should
    //change in response to actions
    //they take current state and action as input and return new state
    addUser: (state, action) => {
      //state initialstate key ki value ko point karta hai imp
      console.log("object");
      state.push(action.payload);
    },

    removeAllUser: (state, action) => {
      state.splice(0, state.length); // here return will not work
      // return []; return is liye ki returning a new array
      // you can not directly assign a value to state like state=[] it will give error
    },
    deleteUser: (state, action) => {
      state.splice(action.payload, 1); // you cannot use return here
      console.log(action); //{type: 'user/deleteUser', payload: 1}
      // return state.filter((elm, ind) => ind !== action.payload);
      //when you will modify array (state) return will not be used but when you will create a brand new array you will have to return that array
      //return state// it is automatically done in case of modification if you will enable here it will not create a problem in case of splice
    },
  },
});
console.log("value of userSlice.actions");
console.log(userSlice.actions);
//an object of above methods

export default userSlice.reducer;
//https://chat.openai.com/share/d3ad883a-2d9f-4fd3-8717-308319573b1c
//in redux toolkit action creator are created automatically we can get them by dot actions method and they can be used with dispatch
export const { addUser, deleteUser, removeAllUser } = userSlice.actions;
/*
const useSlice = createSlice({
  name:user,
  initialState:[],
  reducers:{
    adduser:(state,action)=>{
      state.push(action.value)
    }
  }
})
export default userSlice.reducer
const [adduser,deleteuser]=userSlice.actions
*/
