import React from 'react';
import { useSelector } from 'react-redux';

function Icecream(props) {

    const noOfIceCreams = useSelector((state)=> {
        return state.iceCream.noOfIceCreams
    });

    return (
        <div>
            <h3> No of Icecreams: {noOfIceCreams} </h3>
        </div>
    );
}

export default Icecream;