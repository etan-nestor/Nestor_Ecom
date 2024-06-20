
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../../assets/hero/hero4.png'
import image2 from '../../assets/hero/hero2.png'
import image3 from '../../assets/hero/hero3.png'

const ImageList = [
    {
        id: 1,
        img: image1,
        title: "Exclusive Deals at Open-Numeric E-commerce",
        description: "Unlock unbeatable savings on top tech products today!"
    },
    {
        id: 2,
        img: image2,
        title: "Limited Time Offers at Open-Numeric E-commerce",
        description: "Hurry! Grab incredible discounts on must-have gadgets now!"
    },
    {
        id: 3,
        img: image3,
        title: "Big Savings Event at Open-Numeric E-commerce",
        description: "Don't miss out! Save big on all your tech needs this season!"
    },
]

const Hero = () => {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[800px] sm:min-h-[860px] bg-blue-200 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 pt-[6em] mb-[5em]">
            {/* Background patterns */}
            <div className="h-[850px] w-[800px] absolute bg-blue-500/80 -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

            </div>
            {/* hero section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className=" grid grid-cols-1 sm:grid-cols-2">
                                {/* text pour mon contenu grid */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h3 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-3xl sm:text-6xl lg:7xl font-bold">
                                        {data.title}
                                    </h3>
                                    <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-2xl">{data.description}</p>
                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" >
                                        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 px-4 py-4 rounded-full text-white text-xl font-semibold">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* images sections */}
                                <div className="order-1 sm:order-2">
                                    <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                                        <img className="w-[300px] h-[300px] sm:h-[550px] sm:w-[550px] sm:scale-105 lg:scale-120 object-contain mx-auto" src={data.img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </Slider>
            </div>
        </div>
    )
}

export default Hero