const redux = require('redux') // importing the redux library
const createStore = redux.legacy_createStore // to create store

// Type of the action is generally a string constraint:
const BUY_CAKE = 'BUT_CAKE';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

// Implementing Action Creators:

function buyCake () // action creator function that returns an action
{
    return {
            type: BUY_CAKE, // this is an action of type BUY_CAKE
            info: 'First Redux action',
            quantity: 1
        }     
}

function restockCake(qty=1)
{
    return {
        type: CAKE_RESTOCKED,
        info: 'Action of cake restocking',
        quantity: qty
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

        case CAKE_RESTOCKED: return {
            ...state,
            noOfCakes: state.noOfCakes + action.quantity // it means you are stocking as much cakes as you pass in the quantity
        }

        default: return state
    }
}

// Stores in redux:

const store = createStore(reducer); // creating a store which accepts a reducer as its parameter  -> this is 1st responsibility of the redux store (to hold the application state (doing indirectly by accepting a reducer as a parameter))

console.log("Initial State", store.getState()); // Allowing access to the state via getState() function (2nd responsibility of the redux store)

const unsubscribe = store.subscribe(() => // Resgistering listeners via subscribe (4th responsibility of the redux store)
    console.log('Updated state', store.getState())
) 

store.dispatch(buyCake()) // Updating the state via dispatch which accepts an action as a parameter (3rd responsibility of the redux store)
store.dispatch(buyCake()) // Updating the state three times
store.dispatch(buyCake())

store.dispatch(restockCake(3)); // restocking the cakes by 3

unsubscribe(); // 5th responsibility of the redux store (unsubsribe to any changes in the store and after this if you change any values in the state it will not be listened)

// store.dispatch(buyCake()) // This will not work as you have already unsubscribed to the changes in the store

