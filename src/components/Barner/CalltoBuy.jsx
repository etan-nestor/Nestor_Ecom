
import image1 from '../../assets/autres/other43.png';
import image2 from '../../assets/autres/other69.png';
import image3 from '../../assets/autres/other70.png';


const CalltoBuy = () => {
    return (
        <div>
            <div className="py-5 bg-orange-300 dark:bg-gray-800">
                <div className="container m-auto px-6 space-y-8 text-gray-500 dark:text-white md:px-12 lg:px-20">
                    <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
                        <div className="order-last mb-6 space-y-6 md:mb-0 md:w-4/12 lg:w-6/12">
                            <h1 className="text-4xl text-white dark:text-white font-bold md:text-5xl">Buy now and benefit up to <span className="text-blue-700 dark:text-orange-500">30% off</span> </h1>
                            <p className="text-xl">Be part of millions people around the world using tailus in modern User Interfaces.</p>
                            <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                                <button type="button" title="Start buying" className="w-full py-3 px-8 text-center rounded-xl transition dark:bg-orange-500 bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                                    <span className="block text-xl text-white font-semibold">
                                        Start buying
                                    </span>
                                </button>
                                <button type="button" title="more about" className="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
                                    <span className="text-xl block text-gray-600 font-semibold">
                                        More about
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                            <div className="col-span-2 row-span-4">
                                <img src={image1} width="640" height="960" alt="shoes" loading="lazy" />
                            </div>
                            <div className="col-span-2 row-span-2">
                                <img src={image2} className="w-full h-full" width="640" height="640" alt="shoe" loading="lazy" />
                            </div>
                            <div className="col-span-3 row-span-3">
                                <img src={image3} className="w-full h-full" width="640" height="427" alt="shoes" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalltoBuy
