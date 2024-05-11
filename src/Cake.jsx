import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { order, addCakes } from './features/cakeSlice';


function Cake() {
      const noOfCakes =  useSelector((state)=> {
        console.log("State", state);
        return state.cake.noOfCakes;
      })
      const dispatch = useDispatch();

      const [cakeQuantity, updateCakeQuantity] = useState(0);
    return (
        <div>
            <h3>No of cakes : {noOfCakes}</h3>
            <button 
            onClick={()=> {
              dispatch(order());
            }}
            > 
                Order
            </button>
            <div>
                <input 
                    value ={cakeQuantity}
                    onChange={(e)=> {updateCakeQuantity(e.target.value)}}
                />
                 <button onClick={()=> {
                    dispatch(addCakes(cakeQuantity))
                 }}>Add cake</button>
            </div>

        </div>
    );
}

export default Cake;