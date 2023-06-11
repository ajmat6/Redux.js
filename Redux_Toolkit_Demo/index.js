const store = require('./app/store') // importing the store
const cakeActions = require('./features/cake/cakeSlice').cakeActions // importing actions from features
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions // importing actions from icecream feature

// Same like without of Redux Toolkit:
console.log("Initial State ", store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("Updated State ", store.getState());
})

store.dispatch(cakeActions.ordered()); 
store.dispatch(cakeActions.ordered()); 
store.dispatch(cakeActions.ordered()); 
store.dispatch(cakeActions.restocked(3)); // passing argument in the restocked action which will act as payload

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(5));

unsubscribe();