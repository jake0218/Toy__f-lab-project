import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IBasicState {
  name: string;
}

const initialState: IBasicState = {
  name: '',
}


const basicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    setBasic(state, action: PayloadAction<IBasicState>) {
    }
  }

})

export const { setBasic } = basicSlice.actions;
export const basicReducer = basicSlice.reducer