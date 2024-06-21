import image from '../../assets/autres/other65.png';

const EmailingPeripherals = () => {
    return (
        <div className="mt-[4em] mb-[3em]" >
            <div className="h-[400px] bg-blue-200 dark:bg-gray-800 flex justify-center items-center gap-20">
                <div className="">
                    {/* section text */}
                    <div className="">
                        <h2 className="text-3xl font-bold font-display text-black dark:text-white sm:text-5xl">
                            We&#x27;ve got more coming...
                        </h2>
                        <p className="mt-2 max-w-xl text-xl text-black">
                            Want to hear from us when we add new components? Sign up for our newsletter and we&#x27;ll email you every time we release a new batch of components.
                        </p>
                    </div>
                    <form>
                        <div className="mt-6 sm:flex jusitfy-start">
                            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                <div className=" relative ">
                                    <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" placeholder="Email" />
                                </div>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-orange-600 rounded-lg shadow-md hover:bg-orangele-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-200" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </form>
                </div>
                <div className="">
                    <img className="w-[500px] h-[400px]" src={image} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default EmailingPeripherals
