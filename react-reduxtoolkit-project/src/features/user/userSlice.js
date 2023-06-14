import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// CreateAsyncThunk generates pending, fulfilled and rejected action types:
// createAsyncThunk takes an action type as its first argument:
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/userss')
    .then((response) => response.data.map((user) => user.id))
})

const userSlice = createSlice({
    name: 'user', 
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer