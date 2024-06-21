
import image1 from '../../assets/autres/other22.png';
import image2 from '../../assets/autres/other67.jpg';
import image3 from '../../assets/autres/other25.png';


const EquipmentsHero = () => {
    return (
        <div>
            <div className="bg-white rounded-lg dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
                <div className="w-[700px] ml-[14em] py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="font-bold text-black dark:text-white sm:text-4xl">
                        <span className="text-5xl block">
                            Your Equipments In Open Numeric
                        </span>
                    </h2>
                    <p className="w-[500px] text-2xl mt-4 text-gray-400">
                        The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-8  bg-orange-500 hover:bg-blue-700 focus:ring-orange-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mr-[3em] flex items-center gap-8 p-6 lg:p-24">
                    <img src={image2} className="w-[400px] rounded-lg" alt="one" />
                    <div>
                        <img src={image3} className="w-[100px] mb-8 rounded-lg" alt="Tree" />
                        <img src={image1} className="w-[100px] rounded-lg" alt="Tree" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EquipmentsHero
