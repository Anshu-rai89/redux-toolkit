import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from './features/customerSlice';

function Customer(props) {
    const {loading, customers} = useSelector((state)=> {
        console.log("state customer", state);
        return state.customer;
    });

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchCustomers())
    }, []);

    return (
        <div>
            {loading ? <h3> Loading....</h3> : <div>
                <h3>Customers Details</h3> 
                {customers.map((customer)=> <li key={customer}>{customer}</li>)}
                </div>}
            
        </div>
    );
}

export default Customer;