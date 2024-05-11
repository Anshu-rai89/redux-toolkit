import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    noOfIceCreams: 10
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        order: (state)=> {
            state.noOfIceCreams = state.noOfIceCreams - 1
        },

        addICeCream: (state, action) => {
            state.noOfIceCreams = state.noOfIceCreams + Number(action.payload)
        }
    }
})


export const {order, addICeCream} = iceCreamSlice.actions;

export default iceCreamSlice.reducer;