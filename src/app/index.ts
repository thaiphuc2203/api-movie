
import userReducer from '../features/Auth/userSlice';
import movieReducer from '../features/Movie/movieSlice';
const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    movie: movieReducer,
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch