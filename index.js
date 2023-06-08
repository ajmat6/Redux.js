const redux = require('redux') // importing the redux library
const createStore = redux.legacy_createStore // to create store

const BUY_CAKE = 'BUT_CAKE';

function buyCake () // action creator function that returns an action
{
    return {
            type: BUY_CAKE, // this is an action of type BUY_CAKE
            info: 'First Redux action',
            quantity: 1
        }     
}

// Implementing Reducers:

// Defining initial state according to the first principle of Redux:
const initialState = {
    noOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state, // specifying that if there are more than one properties in the initailState than make a copy of the other properties that you are not changing and just change some of them that you are specifying
            noOfCakes: state.noOfCakes - 1
        }

        default: return state
    }
}

// Stores in redux:

const store = createStore(reducer); // creating a store which accepts a reducer as its parameter  -> this is 1st responsibility of the redux store (to hold the application state (doing indirectly by accepting a reducer as a parameter))

console.log("Initial State", store.getState()); // Allowing access to the state via getState() function (2nd responsibility of the redux store)

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState())) // Resgistering listeners via subscribe (4th responsibility of the redux store)

store.dispatch(buyCake()) // Updating the state via dispatch which accepts an action as a parameter (3rd responsibility of the redux store)
store.dispatch(buyCake()) // Updating the state three times
store.dispatch(buyCake())

unsubscribe(); // 5th responsibility of the redux store
