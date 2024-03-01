import { FaStar } from "react-icons/fa"; 
import React from 'react'

import image1 from '../../assets/Laptops/card_test1.png'
import image2 from '../../assets/Laptops/card_test2.png'
import image3 from '../../assets/Laptops/card_test3.png'


const ProductsData = [
    {
        id: 1,
        img: image1,
        title: "Women Etnic",
        rating: 5.0,
        color: "white",
        aosDelay: 0,
    },
    {
        id: 2,
        img: image2,
        title: "Women Western",
        rating: 4.5,
        color: "red",
        aosDelay: 200,
    },
    {
        id: 3,
        img: image3,
        title: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDelay: 400,
    },
]

const TopProducts = () => {
    return (
        <div>
            <div className="container">
                {/* header section */}
                <div className="text-left mb-24">
                    <p data-aos="fade-up" className="text-sm text-primary ">Top rated products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Best Products
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
                    </p>
                </div>
                {/* body section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-20 md:gap-5">
                    {
                        ProductsData.map((data) => (
                            <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]" key={data.id}>
                                {/* images section */}
                                <div className="h-[100px]">
                                    <img
                                        className="max-w-[140px] bock mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                        src={data.img} alt="" />
                                </div>
                                {/* details section */}
                                <div className="p-4 text-center">
                                    {/* star rating */}
                                    <div className="w-full flex items-center justify-center gap-1">
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    <h1 className="text-xl font-bold">{data.title}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                        {data.description}
                                    </p>
                                    <button className="bg-primary hover:scale-105 duration-300 px-4 py-1 rounded-full mt-4 text-white group-hover:bg-white group-hover:text-primary">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProducts