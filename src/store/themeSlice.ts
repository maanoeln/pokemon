import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ITheme = 'dark' | 'light';

const initialState = 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState as ITheme,
  reducers: {
    changeTheme: (_state, action: PayloadAction<ITheme>) => {
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
