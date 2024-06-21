import { FaStar } from "react-icons/fa";
import image1 from '../../assets/autres/other46.png'
import image2 from '../../assets/autres/other48.png'
import image3 from '../../assets/autres/other47.png'
import image4 from '../../assets/autres/other57.png'
import image5 from '../../assets/autres/other58.png'
import image6 from '../../assets/autres/other59.png'
import image7 from '../../assets/autres/other39.png'
import image8 from '../../assets/autres/other6.png'
import image9 from '../../assets/hero/hero6.png'

const ProductsData = [
    {
        id: 1,
        img: image1,
        title: "Women Etnic",
        rating: 5.0,
        price: 16,
        aosDelay: 0,
    },
    {
        id: 2,
        img: image2,
        title: "Women Western",
        rating: 4.5,
        price: 16,
        aosDelay: 200,
    },
    {
        id: 3,
        img: image3,
        title: "Goggles",
        rating: 4.7,
        price: 16,
        aosDelay: 400,
    },
    {
        id: 4,
        img: image4,
        title: "Printed T-Shirt",
        rating: 4.4,
        price: 16,
        aosDelay: 600,
    },
    {
        id: 5,
        img: image5,
        title: "Fashin T-Shirt",
        rating: 4.5,
        price: 16,
        aosDelay: 800,
    },
    {
        id: 6,
        img: image6,
        title: "Fashin T-Shirt",
        rating: 4.5,
        price: 100,
        aosDelay: 800,
    },
    {
        id: 7,
        img: image7,
        title: "Fashin T-Shirt",
        rating: 4.5,
        price: 86,
        aosDelay: 800,
    },
    {
        id: 8,
        img: image8,
        title: "Fashin T-Shirt",
        rating: 4.5,
        price: 16,
        aosDelay: 800,
    },
]

const PeripheralsProducts2 = () => {
    return (
        <>
            <div className="relative overflow-hidden min-h-[750px] sm:min-h-[650px] rounded-lg bg-gray-100 drop-shadow-[5px_5px_10px_rgb(225,95,0)] dark:drop-shadow-[5px_5px_10px_rgb(225,255,245)] flex justify-center items-center dark:bg-gray-700 dark:text-white duration-200 mb-[5em]">
                <div className="flex">
                    {/* block1 */}
                    <div className="flex flex-wrap gap-3 ml-[5em]">
                        {/* Products cards section */}
                        {
                            ProductsData.slice(0, 6).map((product) => (
                                <div data-aos="fade-up"
                                data-aos-delay={product.aosDelay}
                                key={product.id}
                                className="grid gcursor-pointer min-h-[250px] min-w-[300px] rounded-2xl bg-orange-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-white hover:text-black relative shadow-xl duration-300 group">
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
                    {/* block2 */}
                    <div className="w-1/2 mr-[12em]">
                        <div className="flex flex-col gap-2">
                            {/* titre section */}
                            <div className="">
                                <h1 className="text-5xl font-bold">Monitors & Webcams</h1>
                                <p className="text-xl font-semibold text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numqua.</p>
                            </div>
                            <img className="w-[500px] h-[400px]" src={image9} alt="image9" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PeripheralsProducts2
