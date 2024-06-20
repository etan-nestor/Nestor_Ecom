import { FaStar } from "react-icons/fa";
import image1 from '../../assets/autres/other3.png'
import image3 from '../../assets/autres/other4.png'
import image2 from '../../assets/autres/other5.png'
import image5 from '../../assets/autres/other7.png'
import image4 from '../../assets/autres/other8.png'

const ProductsData = [
    {
        id: 1,
        img: image1,
        title: "Women Etnic",
        rating: 5.0,
        price:16,
        aosDelay: 0,
    },
    {
        id: 2,
        img: image2,
        title: "Women Western",
        rating: 4.5,
        price:16,
        aosDelay: 200,
    },
    {
        id: 3,
        img: image3,
        title: "Goggles",
        rating: 4.7,
        price:16,
        aosDelay: 400,
    },
    {
        id: 4,
        img: image4,
        title: "Printed T-Shirt",
        rating: 4.4,
        price:16,
        aosDelay: 600,
    },
    {
        id: 5,
        img: image5,
        title: "Fashin T-Shirt",
        rating: 4.5,
        price:16,
        aosDelay: 800,
    },
    {
        id: 6,
        img: image4,
        title: "Fashin T-Shirt",
        rating: 4.5,
        price:100,
        aosDelay: 800,
    },
    {
        id: 7,
        img: image3,
        title: "Fashin T-Shirt",
        rating: 4.5,
        price:86,
        aosDelay: 800,
    },
    {
        id: 8,
        img: image5,
        title: "Fashin T-Shirt",
        rating: 4.5,
        price:16,
        aosDelay: 800,
    },
]

const Products = () => {
    return (
        <div className="mb-12 mt-14">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-2xl font-bold text-primary ">Top selling products for you</p>
                    <h1 data-aos="fade-up" className="text-5xl font-bold">Products</h1>
                    <p data-aos="fade-up" className="text-xl font-semibold text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
                    </p>
                </div>
                {/* body sections */}
                <div>
                    <div className="flex flex-wrap gap-20 justify-center items-center">
                        {/* Products cards section */}
                        {
                            ProductsData.map((product) => (
                                <div data-aos="fade-up" data-aos-delay={product.aosDelay} key={product.id} className="cursor-pointer min-h-[250px] min-w-[300px] rounded-2xl bg-blue-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-white hover:text-black relative shadow-xl duration-300 group">
                                    <img className="max-w-[150px] bock mx-auto transform translate-y-3 group-hover:scale-105 duration-300 drop-shadow-md" src={product.img} alt="products" />
                                    <div className="flex flex-col justify-center items-center gap-1 mt-4">
                                        <h3 className="font-bold">{product.title}</h3>
                                        <p className="cursor-pointer text-xl text-orange-500 font-semibold">{product.price}$</p>
                                        <div className="flex items-center gap-2">
                                            <FaStar className="text-yellow-400" />
                                            <span className="text-sm font-bold">{product.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* button section */}
                    <div data-aos="fad-up" className="flex justify-center">
                        <button className="text-center text-2xl mt-14 transition-all duration-300 bg-primary hover:bg-gray-200 hover:text-orange-500 cursor-pointer py-3 font-bold px-5 rounded-md text-white drop-shadow-md">
                            View all products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products