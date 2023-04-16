import { createSlice } from '@reduxjs/toolkit';
interface IInitialState {
  photo: string
}

const initialState: IInitialState = {
  photo: ''
}

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    applyViewOption: (state, { payload }) => {
      state.photo = ''
    },
  }
})

export default login.reducer