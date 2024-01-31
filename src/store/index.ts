//@redux-toolkit
import { configureStore } from "@reduxjs/toolkit";
//@import reducer
import { basicReducer, setBasic } from "./slice/basicSlice";


const store = configureStore({
  reducer: {
    //...
    basic: basicReducer
  }
})
export { store,
//reducer
setBasic
}

