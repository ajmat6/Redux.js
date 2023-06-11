const configureStore = require('@reduxjs/toolkit').configureStore // to create store
// const reduxLogger = require('redux-logger') // importing redux logger
const cakeReducer = require('../features/cake/cakeSlice') // importing reducer from the features
const icecreamReducer = require('../features/icecream/icecreamSlice'); // importing icecream reducer from the reducer
const { getDefaultMiddleware } = require('@reduxjs/toolkit');

// const logger = reduxLogger.createLogger();

const store = configureStore({
    // key of reducer that is an object of the reducer: it is like combineReducer function in redux
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },

    // middleware recieves getDefaultMiddleware as an argument which is a list of default middleware in the configureStore function and we are concatinating logger middleware into that list.
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store // exporting this module