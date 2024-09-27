import React from 'react'
import logo from '../assets/brand_logo.png'
function Header() {
    return (
        <div>
            <nav className='flex justify-between items-center max-w-[1280px] m-auto h-[72px] '>
                <div className='logo'>
                    <img src={logo} width='100px' height='100px' alt="logo" />
                </div>
                <ul className='flex gap-[24px] font-bold'>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button className='px-[1rem] h-[32px] py-[0.3rem] text-white from-neutral-200 bg-[#D01C28]' >Login</button>
            </nav>
        </div>
    )
}

export default Header
