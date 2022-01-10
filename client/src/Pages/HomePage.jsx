import React from 'react';
import {useParams} from 'react-router-dom';
import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import NightLife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';


function HomePage() {
    const {type} = useParams();
    return (
        <>
            <div className=''>{type === 'delivery' && <Delivery/>}</div>
            <div className=''>{type === 'dining' && <Dining/>}</div>
            <div className=''>{type === 'night' && <NightLife/>}</div>
            <div className=''>{type === 'nutrition' && <Nutrition/>}</div>
        </>
    )
}

export default HomePage;
