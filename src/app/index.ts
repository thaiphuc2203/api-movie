
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