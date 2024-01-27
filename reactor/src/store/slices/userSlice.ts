import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface User {
    email: string | null;
    token: string | null;
    id: number;
}
const initialState: User = {
    email: null,
    token: null,
    id: 0,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeReducer(state) {
            state.email = null;
            state.token = null;
            state.id = 0;
        },
    },
});
export const { setUser, removeReducer } = userSlice.actions;
export default userSlice.reducer;
