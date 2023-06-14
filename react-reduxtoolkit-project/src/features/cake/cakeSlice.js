const createSlice = require('@reduxjs/toolkit').createSlice // imorting the createSlice function

// Initial State:
const initialState = {
    noOfCakes: 10
}

const cakeSlice = createSlice({ // invoking createSlice function and assigning it to the cakeSlice variable. It accepts an object.
    name: 'cake', 
    // initialState: initialState ,
    initialState, // above and this both are same
    reducers: {
        // reducer functions
        ordered: (state, action) => {
            // we dont have to return ...state that we were not changing and we can directly mutate the state and the createSlice is indirectly using immer library that you have seen in redux
            state.noOfCakes--
        },

        restocked: (state, action) => {
            state.noOfCakes = state.noOfCakes + action.payload // payload will come when you will pass it as a argument when you will call the dispatch function of the store
        }

        // createSlice automatically creates action creators with same name as reducer functions so we don't have to make them
    }
}); 

module.exports = cakeSlice.reducer // exporting the reducers
module.exports.cakeActions = cakeSlice.actions // exporting the action creators made by cakeSlice reducer