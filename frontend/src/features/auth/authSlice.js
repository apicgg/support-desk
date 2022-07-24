import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Create the global initial state for authentication
const initialState = {
  user: null,
  isError: null,
  isSuccess: null,
  isLoading: false,
  message: '',
}

// Create the function to connect with backend api with createAsyncThunk to register new user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    console.log(user)
  }
)

// To login a user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log(user)
})

// Main slice function to create the reducer function
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer
