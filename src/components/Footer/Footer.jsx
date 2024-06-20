import { FaMobileAlt } from "react-icons/fa"; 
import { FaLocationArrow } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from '../../assets/Logos.png'
import Banner from '../../assets/Footer/footer1.jpg'

const BarnerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Peripherals",
        link: "/peripherals",
    },
    {
        id: 3,
        title: "Equipments",
        link: "/equipements",
    },
    {
        id: 4,
        title: "Hardwares",
        link: "/hardwares",
    },
]

const Footer = () => {

    return (
        <div style={BarnerImg} className="text-white">
            <div className="container">
                <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-34 pt-5">
                    {/* company detailed */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl gap-3 sm:text-left text-justify flex mb-3 font-bold items-center">
                            <img src={Logo} alt="" className="max-w-[100px] rounded-full" />
                            {/* Open Numeric SA */}
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ea eaque, perspiciatis optio excepturi nihil.</p>
                    </div>
                    {/* Links detailed */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-2xl sm:text-left text-justify mb-3 font-bold items-center">
                                Important Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data) => (
                                        <li key={data.id} className="cursor-pointer hover:text-primary hover:translate-x-1 text-xl duration-300 text-gray-200">
                                            <span>
                                                {data.title}
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="py-8 px-4">
                            <h1 className="m:text-3xl text-2xl sm:text-left text-justify mb-3 font-bold items-center">
                                Important Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data) => (
                                        <li key={data.id} className="cursor-pointer hover:text-primary hover:translate-x-1 text-xl duration-300 text-gray-200">
                                            <span>
                                                {data.title}
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* social links */}
                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Ouagadougou, Burkina Faso</p>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <FaMobileAlt />
                                    <p>+226 61 78 03 91</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer