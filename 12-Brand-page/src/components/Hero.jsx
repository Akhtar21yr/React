import React from 'react'
import {amazon,flipkart,shoe_image} from '../assets'
function Hero() {
    return (
        <main className='flex max-w-[1280px] m-auto items-center h-[100vh]' >
            <div className='w-[1000px] flex-col space-y-[36px] '>
                <h1 className='font-bold text-[108px] leading-[102px]' style={{fontWeight:800}} >YOUR FEET DESERVE THE BEST</h1>
                <p className='font-bold text-gray-600 max-w-[460px]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='flex gap-[40px] '>
                    <button className='px-[16px]  h-[41px] text-[24px]  text-white from-neutral-200 bg-[#D01C28]'>Shop Now</button>
                    <button className='px-[16px]  h-[41px] text-[24px]  bg-transparent border border-[#5A5959] text-[#5A5959]'>Category</button>
                </div>
                <div>
                    <p className='text-[14px] mb-[8px] '>Also Available On</p>
                    <div className='flex gap-[16px]'>
                        <img src={flipkart} alt="flipkart" />
                        <img src={amazon} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-[550.06px] w-[630px]'>
                <img src={shoe_image} alt="shoe_image" />
            </div>
        </main>
    )
}

export default Hero
