const configureStore = require('@reduxjs/toolkit').configureStore // to create store
const cakeReducer = require('../features/cake/cakeSlice') // importing reducer from the features
const icecreamReducer = require('../features/icecream/icecreamSlice') // importing icecream reducer from the reducer

const store = configureStore({
    // key of reducer that is an object of the reducer:
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
})

module.exports = store // exporting this module