import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

// redux actions
import { getRestaurant } from "../redux/reducers/restaurant/restaurant.action";


// components
import Offer from "../Components/Offers";
import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import NightLife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';


function HomePage() {
    const {type} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant());
    }, []);
    return (
        <>
            <div className=''>{type === 'offer' && <Offer/>}</div>
            <div className=''>{type === 'delivery' && <Delivery/>}</div>
            <div className=''>{type === 'dining' && <Dining/>}</div>
            <div className=''>{type === 'night' && <NightLife/>}</div>
            <div className=''>{type === 'nutrition' && <Nutrition/>}</div>
        </>
    )
}

export default HomePage;
