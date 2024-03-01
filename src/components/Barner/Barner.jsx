import { FaShippingFast } from "react-icons/fa"; 
import { MdLocalOffer } from "react-icons/md"; 
import { GiFoodTruck } from "react-icons/gi"; 
import { GrSecure } from "react-icons/gr"; 
import React from 'react'
import BarnerImg from '../../assets/Barner/barner.jpg'

const Barner = () => {
    return (
        <div className="min-h-[550px] items-center flex justify-center py-12 sm:py-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    {/* image section */}
                    <div data-aos="zoom-in" >
                        <img src={BarnerImg} alt="" className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" />
                    </div>
                    {/* text section */}
                    <div className="flex flex-col justify-center gap-6 sm:pt-0">
                        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                            Winter Sale upto 50% off
                        </h1>
                        <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam quaerat molestias expedita repellat, nisi facilis obcaecati.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div data-aos="fade-up" className="flex items-center gap-4">
                                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" className="flex items-center gap-4">
                                <FaShippingFast className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                                <p>Fast Delevery</p>
                            </div>
                            <div data-aos="fade-up" className="flex items-center gap-4">
                                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                                <p>Easy payment method</p>
                            </div>
                            <div data-aos="fade-up" className="flex items-center gap-4">
                                <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                                <p>Get Offers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Barner