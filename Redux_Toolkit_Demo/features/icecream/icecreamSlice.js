const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    noOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream', // name of slice
    initialState, // initial state

    reducers: {
        // Reducers
        ordered: (state, actions) => {
            state.noOfIcecreams--
        },

        restocked: (state, actions) => {
            state.noOfIcecreams = state.noOfIcecreams + actions.payload
        }
    }
})

module.exports = icecreamSlice.reducer // exporting reducers
module.exports.icecreamActions = icecreamSlice.actions // exporting actions as icecreamActions