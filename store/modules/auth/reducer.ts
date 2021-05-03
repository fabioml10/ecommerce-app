import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../../dtos/User';

const authSlice = createSlice({
  name: 'auth',
  initialState: { loggedUser: null as User },
  reducers: {
    // seta user logado
    setLoggedUser(state, action: PayloadAction<User>) {
      state.loggedUser = action.payload;
    },
    // limpa user logado
    clearLoggedUser(state) {
      state.loggedUser = null;
    },
  }
})

export const { setLoggedUser, clearLoggedUser } = authSlice.actions;
export default authSlice.reducer;
