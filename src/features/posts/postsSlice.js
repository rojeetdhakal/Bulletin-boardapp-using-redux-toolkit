import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "Learning ReduxToolkit",
    content:
      "The Redux Toolkit package is intended to be the standard way to write Redux logic.As for the redux toolkit, which is considered as the official, opinionated, batteries-included toolset for efficient Redux development, it is a simpler and better way of writing redux logic. It speeds up development because it already includes packages that are necessary for building redux apps. ",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Learning ReactJs",
    content: "React js is the javascript library for building single page application. ",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        //prepare callback--> it generates a unique ids, format the data and return the object with payload
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state,action){
        const{postId,reaction}=action.payload
        const existingPost=state.find(post=>post.id===postId)
        if(existingPost){
            existingPost.reactions[reaction]++
        }
    }
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded,reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
