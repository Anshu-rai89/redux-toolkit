import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    loading: true,
    customers: []
}


export const fetchCustomers = createAsyncThunk('customer/fetchCustomers', async()=> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data.map((user)=> user.name);
    return users;
})

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCustomers.fulfilled, (state, action)=> {
            state.loading = false;
            state.customers = [...state.customers, ...action.payload]
        })

         builder.addCase(fetchCustomers.rejected, (state)=> {
            state.loading = true;
            state.customers = []
        })
    } 
})


export const {addCutomers} = customerSlice.actions;

export default customerSlice.reducer;