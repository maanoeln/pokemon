import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITheme {
  theme: 'dark' | 'light';
}

const initialState: ITheme = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: {
      reducer: (state, action: PayloadAction<ITheme>) => {
        state.theme = action.payload.theme;
      },
      prepare: (theme) => ({
        payload: {
          theme,
        } as ITheme,
      }),
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
