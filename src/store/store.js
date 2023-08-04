import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
//saare slice laao reducer banao unka
const store = configureStore({
    reducer: {
        users: userSlice
    //  subscribers:subscriberSlice
    }
})
export default store
// agar hame store se kahin pe users ki data chahiye to useSlector k andar state.users return karenge 
//ex const data = useSelector((state)=>state.users) 