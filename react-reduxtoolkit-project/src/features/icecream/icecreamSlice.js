import { createSlice } from '@reduxjs/toolkit';
// const cakeAction = require('../cake/cakeSlice').cakeActions // importing cake actions
import {ordered as cakeOrdered} from '../cake/cakeSlice'

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
    },

    // extraReducers: {
    //     ['cake/ordered']: (state, action) => {
    //         state.noOfIcecreams--
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.noOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer // exporting reducers
export const { ordered, restocked } = icecreamSlice.actions // exporting actions as icecreamActions