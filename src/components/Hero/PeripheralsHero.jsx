import image1 from '../../assets/autres/other10.png';
import image2 from '../../assets/autres/other15.png';
import image3 from '../../assets/autres/other17.png';

const PeripheralsHero = () => {
    return (
        <div className="flex justify-center items-center gap-20">
            {/* My product image */}
            <div className="product">
                <img className="h-[200px] w-[300px]" src={image1} alt="" />
            </div>
            {/* My text part */}
            <div className="text-center flex flex-col gap-2 w-[750px]">
                <h1 className="dark:text-primary text-center text-5xl font-bold ">Pheripherals Party</h1>
                <h4 className="text-3xl font-semibold">Lorem ipsum dolor sit amet consectetur.</h4>
                <p className="text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusamus amet quis commodi nulla! Iste consequatur debitis quis quam exercitationem vel eum dignissimos veritatis quia!
                </p>
                <div className="mt-8">
                    <button className="bg-primary outline-none border-none text-white font-bold px-8 py-4 text-xl rounded-xl hover:bg-gray-200 hover:text-black transition-all duration-300">
                        Order now
                    </button>
                </div>
            </div>
            {/* my impression image */}
            <div className="impressi">
                <img className="h-[600px] w-[400px]" src={image2} alt="" />
            </div>
            <div className="absolute -bottom-[7em]">
                <img className="h-[200px] w-[200px]" src={image3} alt="" />
            </div>
        </div>
    )
}

export default PeripheralsHero
