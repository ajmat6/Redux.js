const redux = require('redux') // importing the redux library
const createStore = redux.legacy_createStore // to create store
const bindActionCreators = redux.bindActionCreators // For binding the action creators into an object of action creators which will be used in store.dispatch function
const combineReducers = redux.combineReducers // to combine reducers

const reduxLogger = require('redux-logger') // import rudux logger middleware
const logger = reduxLogger.createLogger(); // creates a logger middleware
const applyMiddleware = redux.applyMiddleware; // helps to apply a middleware

// Type of the action is generally a string constraint:
const BUY_CAKE = 'BUY_CAKE';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const BUY_ICECREAM = 'BUY_ICECREAM';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// Implementing Action Creators:

function buyCake () // action creator function that returns an action
{
    return {
            type: BUY_CAKE, // this is an action of type BUY_CAKE
            payload: 1
        }     
}

function restockCake(qty=1)
{
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function buyIcecream () // action creator function that returns an action
{
    return {
            type: BUY_ICECREAM, // this is an action of type BUY_CAKE
            payload: 1
        }     
}

function restockIcecream(qty=1)
{
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// Implementing Reducers:

// Defining initial state according to the first principle of Redux:
// const initialState = {
//     noOfCakes: 10,
//     noOfIcecreams: 20
// }

const initialCakeState = {
    noOfCakes: 10
}

const initialIcecreamState = {
    noOfIcecream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state, // specifying that if there are more than one properties in the initailState than make a copy of the other properties that you are not changing and just change some of them that you are specifying
            noOfCakes: state.noOfCakes - 1
        }

        case CAKE_RESTOCKED: return {
            ...state,
            noOfCakes: state.noOfCakes + action.payload // it means you are stocking as much cakes as you pass in the quantity
        }

        // Below code is when you were handling more than one initial state properties in one reducer
        // case BUY_ICECREAM: return {
        //     ...state, 
        //     noOfIcecreams: state.noOfIcecreams - 1
        // }

        // case ICECREAM_RESTOCKED: return {
        //     ...state,
        //     noOfIcecreams: state.noOfIcecreams + action.payload
        // } 

        default: return state
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            noOfIcecream: state.noOfIcecream - 1
        }

        case ICECREAM_RESTOCKED: return {
            ...state,
            noOfIcecream: state.noOfIcecream + action.payload
        }

        case BUY_CAKE: return {
            ...state,
            noOfIcecream: state.noOfIcecream - 1 // now icecreamReducer will also respond to the buycake action
        }

        default: return state
    }
}

// combining Reducers:
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
})

// Stores in redux:

const store = createStore(rootReducer, applyMiddleware(logger)); // creating a store which accepts a reducer as its parameter  -> this is 1st responsibility of the redux store (to hold the application state (doing indirectly by accepting a reducer as a parameter))  --> second parameter is our logger middleware that helps us to get all the logs of our application

console.log("Initial State", store.getState()); // Allowing access to the state via getState() function (2nd responsibility of the redux store)

const unsubscribe = store.subscribe(() => {// Resgistering listeners via subscribe (4th responsibility of the redux store)
    // console.log('Updated state', store.getState()) // when we are using logger middleware we don't have any need to specify this log
}) 

// store.dispatch(buyCake()) // Updating the state via dispatch which accepts an action as a parameter (3rd responsibility of the redux store)
// store.dispatch(buyCake()) // Updating the state three times
// store.dispatch(buyCake())

// store.dispatch(restockCake(3)); // restocking the cakes by 3

// using bind action creators to update the store(it is same as above):
const actions = bindActionCreators({buyCake, restockCake, buyIcecream, restockIcecream}, store.dispatch);
actions.buyCake();
actions.buyCake();
actions.buyCake();
actions.restockCake(3);

actions.buyIcecream();
actions.restockIcecream(5);

unsubscribe(); // 5th responsibility of the redux store (unsubsribe to any changes in the store and after this if you change any values in the state it will not be listened)

// store.dispatch(buyCake()) // This will not work as you have already unsubscribed to the changes in the store

