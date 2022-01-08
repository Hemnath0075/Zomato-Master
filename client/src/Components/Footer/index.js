import React from 'react'







function Mobilefooter(){
    return (<div className='flex flex-row border-2 border-black '>
        <div className='basis-1/2 flex flex-col items-center'>
            <li>row1</li>
            <li>row2</li>
            <li>row3</li>
        </div>
        <div className='basis-1/2 flex flex-col items-center'> Row 2</div>

    </div>)
}

function Desktopfooter(){
    return (<div></div>)
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
