import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  articles: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles.push(...action.payload);
    },
  },
});
export const { setArticles } = newsSlice.actions;
export default newsSlice;
