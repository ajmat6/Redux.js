// File for demonstrating async actions

const redux = require('redux')
const axios = require('axios') // importing axios
const thunkMiddleware = require('redux-thunk').default // importing redux-thunk middleware
const createStore = redux.legacy_createStore
const applyMiddleware =redux.applyMiddleware // to apply middleware

// Initial state:
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Defining type of actions is generally a string constraint
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEDED = 'FETCH_USERS_SUCCEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';


// Defining action creators
const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSucceded = (users) => {
    return {
        type: FETCH_USERS_SUCCEDED,
        payload: users
    }
}

const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}


// Defining Reducer:
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED: return {
            ...state,
            loading: true
        }

        case FETCH_USERS_SUCCEDED: return {
            loading: false,
            users: action.payload,
            error: ''
        }

        case FETCH_USERS_FAILED: return {
            loading: false,
            users: [],
            error: action.payload
        }

        default: return state
    }
}

// action creator
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequested()) // dispatching fetch user request

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data is the array of user object in json of above link
            const users = response.data.map((user) => user.id)

            dispatch(fetchUsersSucceded(users)) // dispatching fetch users success
        })
        .catch((error) => {
            // console.log(error.message) // printing the error message

            dispatch(fetchUsersFailed(error.message)) // dispatching fetch users failed
        })
    }
}


// Defining Store:
const store = createStore(reducer, applyMiddleware(thunkMiddleware)) // passing thunk middleware using apply middleware

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchUsers());

// unsubscribe();