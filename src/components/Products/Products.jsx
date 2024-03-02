import { FaStar } from "react-icons/fa";
import React from 'react'
import image1 from '../../assets/Laptops/card_test1.png'
import image2 from '../../assets/Laptops/card_test2.png'
import image3 from '../../assets/Laptops/card_test3.png'
import image4 from '../../assets/Laptops/card_test4.png'
import image5 from '../../assets/Laptops/card_test5.png'

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
    {
        id: 4,
        img: image4,
        title: "Printed T-Shirt",
        rating: 4.4,
        color: "yellow",
        aosDelay: 600,
    },
    {
        id: 5,
        img: image5,
        title: "Fashin T-Shirt",
        rating: 4.5,
        color: "pink",
        aosDelay: 800,
    },
]

const Products = () => {
    return (
        <div className="mb-12 mt-14">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary ">Top selling products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
                    </p>
                </div>
                {/* body sections */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* Products cards section */}
                        {
                            ProductsData.map((product) => (
                                <div data-aos="fade-up" data-aos-delay={product.aosDelay} key={product.id} className="space-y-3">
                                    <img className="h-[220px] w-[150px] object-cover rounded-md" src={product.img} alt="" />
                                    <div>
                                        <h3 className="font-semibold">{product.title}</h3>
                                        <p className="text-sm text-gray-600">{product.color}</p>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-400" />
                                            <span>{product.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* button section */}
                    <div data-aos="fad-up" className="flex justify-center">
                        <button className="text-center mt-10 bg-primary cursor-pointer py-1 px-5 rounded-md text-white">
                            View all products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products