import { configureStore } from '@reduxjs/toolkit'
import cakeSlice from '../features/cakeSlice';
import {createLogger} from 'redux-logger';
import iceCreamSlice from '../features/iceCreamSlice';
import customerSlice from '../features/customerSlice';

const logger = createLogger();

export const store = configureStore({
    reducer: {
        cake: cakeSlice,
        iceCream: iceCreamSlice,
        customer: customerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

