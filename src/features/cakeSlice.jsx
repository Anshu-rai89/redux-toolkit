import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    noOfCakes: 6
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        order: (state)=> {
            state.noOfCakes = state.noOfCakes - 1
        },

        addCakes: (state, action) => {
            state.noOfCakes = state.noOfCakes + Number(action.payload)
        }
    }
})


export const {order, addCakes} = cakeSlice.actions;

export default cakeSlice.reducer;