
import userReducer from '../features/Auth/userSlice';
import movieReducer from '../features/Movie/movieSlice';
const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    user: userReducer,
    movie: movieReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store