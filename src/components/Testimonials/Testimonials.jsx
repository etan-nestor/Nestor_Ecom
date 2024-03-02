import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../../assets/Testimonials/test.jpg'

const CustomersData = [
    {
        id: 1,
        name: "Leandre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptas saepe laborum illum sunt assumenda!",
        img: image1,
    },
    {
        id: 2,
        name: "Leandre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptas saepe laborum illum sunt assumenda!",
        img: image1,
    },
    {
        id: 3,
        name: "Leandre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptas saepe laborum illum sunt assumenda!",
        img: image1,
    },
    {
        id: 4,
        name: "Leandre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptas saepe laborum illum sunt assumenda!",
        img: image1,
    },
    {
        id: 5,
        name: "Leandre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptas saepe laborum illum sunt assumenda!",
        img: image1,
    },
]

const Testimonials = () => {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary ">
                        What our customers are saying
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
                    </p>
                </div>
            </div>
            {/* testimonials section */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {CustomersData.map((data) => (
                        <div key={data.id} className="my-6">
                            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                <div className="mb-4">
                                    <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                                </div>
                                <div className="flex fles-col items-center gap-4">
                                    <div className="space-y-3">
                                        <p className="text-xs text-gray-500">
                                            {data.text}
                                        </p>
                                        <h1 className="text-xl text-black/80 font-bold dark:text-light">
                                            {data.name}
                                        </h1>
                                    </div>
                                </div>
                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                    "
                                </p>
                            </div>
                        </div>
                    ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials