import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// createAsyncThunk takes two arguement name in string form a call back that will be called by createAsyncThunk we have not to call that
// you can say it is a manual action creater , now rather than
// using addname (action creater that was automatically  created by reduxtoolkit) i will use this 
export const fetchName = createAsyncThunk(
    "fetchUserName",
    //this name will be used in extraReducer
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        // console.log(data)
        const randomIndx = Math.floor(Math.random() * 10)
        return data[randomIndx].name
        // whaty ever you will return wiil be accessible in action as payload action.payload se access kar sakte ho
    }
)

const initialState = {
    name: [],
    loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.name.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.name.splice(action.payload, 1)
        }
        ,
        removeAllUser: (state, action) => {
            alert("remove all")
            // state.name.splice(0, state.name.length)

            //immutable way 
            return { ...state, name: [] }//
        }
    },//main reducer block ended here now define extra reducer
    extraReducers: {
        [fetchName.fulfilled]: (state, action) => {
            state.name.push(action.payload)
            state.loading = false
        },
        [fetchName.pending]: (state, action) => {

            //alert("loading")
            state.loading = true
        },
        [fetchName.rejected]: (state, action) => {
            //state.push(action.payload)
            alert(" check your internet ")
            state.loading = false
            return state
        }
    }
})
export const { addUser, deleteUser, removeAllUser } = userSlice.actions;
export default userSlice.reducer