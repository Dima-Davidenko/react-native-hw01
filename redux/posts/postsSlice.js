import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    postList: [],
  },
  reducers: {
    createPost: (state, action) => {
      const newPostList = [...state.postList];
      newPostList.push(action.payload);
      return { postList: newPostList };
    },
  },
});

export const { createPost } = postsSlice.actions;
