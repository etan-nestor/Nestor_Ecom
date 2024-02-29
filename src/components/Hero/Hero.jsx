import React from 'react';
import image1 from '../../assets/hero/boy.png'
import image2 from '../../assets/hero/sale.png'
import image3 from '../../assets/hero/shop.png'

const ImageList = [
    {
        id:1,
        img:image1,
        titlw:"Update 50% for Men's Wear",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, provident magni! Illo distinctio culpa sed, corrupti vero voluptates magni in."
    },
    {
        id:2,
        img:image2,
        titlw:"Update 30% of on all Womwn's Wear",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, provident magni! Illo distinctio culpa sed, corrupti vero voluptates magni in."
    },
    {
        id:3,
        img:image3,
        titlw:"Update 50% of on all Products sale",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, provident magni! Illo distinctio culpa sed, corrupti vero voluptates magni in."
    },
]

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* Background patterns */}
        <div className="h-[700px] w-[700px] absolute bg-primary/40 -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

        </div>
        {/* hero section */}
        <div className="container pb-8 sm:pb-0">
            <div>
                <div className=" grid grid-cols-1 sm:grid-cols-2">
                    {/* text pour mon contenu grid */}
                    <div>
                        <h2 className="text-5xl sm:text-6xl lg:7xl font-bold">Lorem ipsum dolor sit.</h2>
                        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 px-4 py-2 rounded-full text-white">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="w-[200px] h-[200px] sm:h-[350px] sm:w-[350px] sm:scale-125 object-contain mx-auto" src={image1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero