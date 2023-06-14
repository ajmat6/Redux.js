import { configureStore } from '@reduxjs/toolkit'; // importing configureStore 
import logger from 'logger'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit'; // get defatult Middleware contains a list of default middlewares int the configureStore
import userReducer from '../features/user/userSlice'

// const logger = logger.createLogger();

const store = configureStore({
    // key of reducer that is an object of the reducer: it is like combineReducer function in redux
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },

    // middleware recieves getDefaultMiddleware as an argument which is a list of default middleware in the configureStore function and we are concatinating logger middleware into that list.
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store