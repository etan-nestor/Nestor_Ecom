import { FaStar } from "react-icons/fa"; 
import image1 from '../../assets/autres/other1.png'
import image2 from '../../assets/autres/other7.png'
import image3 from '../../assets/autres/other3.png'


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
            <div className="container mb-[12em]">
                {/* header section */}
                <div className="text-left mb-[5em]">
                    <p data-aos="fade-up" className="text-2xl font-bold text-primary ">Top rated products for you</p>
                    <h1 data-aos="fade-up" className="text-5xl font-bold">
                        Best Products
                    </h1>
                    <p data-aos="fade-up" className="text-xl text-gray-400 font-semibold">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
                    </p>
                </div>
                {/* body section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-20 md:gap-5">
                    {
                        ProductsData.map((data) => (
                            <div data-aos="zoom-in" className="min-h-[350px] min-w-[400px] rounded-2xl bg-blue-200 dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group" key={data.id}>
                                {/* images section */}
                                <div className="h-[200px]">
                                    <img
                                        className="max-w-[220px] bock mx-auto transform -translate-y-0 group-hover:scale-105 duration-300 drop-shadow-md"
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