const redux = require('redux')
const produce = require('immer').produce // to user immer
const createStore = redux.legacy_createStore

const initialState = {
    name: "Ajmat Kathat",
    address: {
        street: "Masuda Road",
        city: 'Beawar',
        state: 'Rajasthan'
    }
}

const STREET_UPDATE = 'STREET_UPDATE';

function streetUpdate(street) // action creator , passing street as an argument
{
    return {
        type: STREET_UPDATE,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case STREET_UPDATE:
        //      return {
        //     // nested State:
        //     ...state,
        //     address: {
        //         ...state.address, // spreading state.address so that city and address remains unaffected
        //         street: action.payload
        //     }
        // }

        return produce(state, (draft) => {
            draft.address.street = action.payload
        })

        default: {
            return state
        }
    }
}

const store = createStore(reducer);
console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("Updated State", store.getState())
})
store.dispatch(streetUpdate('AjmatKaSteet'))
unsubscribe()