import React from 'react'







function Mobilefooter(){
    return (
    <div className='container mt-2 sm:inline md:hidden lg:hidden'>
    <div className='flex flex-row border-2 border-black '>
        <div className='basis-1/2 flex flex-col items-center'>
            <li>row1</li>
            <li>row2</li>
            <li>row3</li>
            
        </div>
        <div className='basis-1/2 flex flex-col items-center'> Row 2</div>

    </div></div>)
}

function Desktopfooter(){
    return (
        <div className='container mt-8 mx-auto sm:hidden md:hidden lg:block'>
    <div className=' flex flex-row border-2 border-black '>
    <div className='basis-1/2 flex flex-col items-center'>
        <li>row1</li>
        <li>row2</li>
        <li>row3</li>
        <li>row4</li>
        <li>row5</li>
        <li>row6</li>
        </div> 
    <div className='basis-1/2 flex flex-col items-center'> Row 2</div>

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
