import React from 'react'

import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { Link } from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BiCopyright} from 'react-icons/bi';






function Mobilefooter(){
    return (
    <div className='container mt-2 sm:inline md:hidden lg:hidden'>
    <div className='flex flex-row border-2 border-black bg-black'>
        <div className='basis-1/2 flex flex-col items-center list-none text-white  '>
        <li className='flex p-2 items-center '>TRY THE STUFFS!!!</li>
        <Link to='/'><li className='flex p-3 items-center '><RiShoppingBag3Line/>OFFERS</li></Link>
        <Link to='/delivery'><li className='flex p-3 items-center '><RiShoppingBag3Line/>DELIVERY</li></Link>
        <Link to='/dining'><li className='flex p-3 items-center '><IoFastFoodOutline/>DINING OUT</li></Link>
        <Link to='/night'><li className='flex p-3 items-center '><BiDrink/>NIGHTLIFE</li></Link>
        <Link to='/nutrition'><li className='flex p-3 items-center '><IoNutritionOutline/>NUTRITION</li></Link>
            
        </div>
        <div className='basis-1/2 flex flex-col items-center place-content-center text-white list-none'>
        <li className='flex p-2 items-center '>CONTACT US</li> 
        <span></span>
        <Link to='/'><li className='flex p-3 items-center '><div className='p-4'><BsInstagram/></div><div  className='p-4'><BsWhatsapp/></div><div className='p-4'><BsFacebook/></div><div className='p-4'><BsTwitter/></div></li></Link>
        <li className='flex items-center list-none'><BiCopyright className='mr-2'/>2022 COPYRIGHTS ZOMATOCLONE.INC </li>
        </div>

    </div></div>)
}

function Desktopfooter(){
    return (
        <div className=' mt-8  sm:hidden md:hidden lg:block'>
    <div className=' flex flex-row border-2 border-black bg-black '>
    <div className='basis-1/2 flex flex-col items-center list-none text-white'>
        <li className='flex p-2 items-center '>TRY THE STUFFS!!!</li>
        <Link to='/'><li className='flex p-3 items-center '><RiShoppingBag3Line/>OFFERS</li></Link>
        <Link to='/delivery'><li className='flex p-3 items-center '><RiShoppingBag3Line/>DELIVERY</li></Link>
        <Link to='/dining'><li className='flex p-3 items-center '><IoFastFoodOutline/>DINING OUT</li></Link>
        <Link to='/night'><li className='flex p-3 items-center '><BiDrink/>NIGHTLIFE</li></Link>
        <Link to='/nutrition'><li className='flex p-3 items-center '><IoNutritionOutline/>NUTRITION</li></Link>
        </div> 
    <div className='basis-1/2 flex flex-col items-center place-content-center text-white list none'>
        <li className='flex p-2 items-center '>CONTACT US</li> 
        <span></span>
        <Link to='/'><li className='flex p-3 items-center '><div className='p-4'><BsInstagram/></div><div  className='p-4'><BsWhatsapp/></div><div className='p-4'><BsFacebook/></div><div className='p-4'><BsTwitter/></div></li></Link>
        <li className='flex items-center list-none'><BiCopyright className='mr-2'/>2022 COPYRIGHTS ZOMATOCLONE.INC </li>
        
    </div>

</div></div>)
}

function Footer() {
    return (
        <footer>
            <Mobilefooter/>
            <Desktopfooter/>
        </footer>
    )
}

export default Footer;
