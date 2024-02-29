import { FaCaretDown } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import React from 'react'
import Logo from '../../assets/e_logo.png'
import DarkMode from "./DarkMode";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services"
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#"
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#"
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#"
    },
];

const DropDownLinks = [
    {
        id: 1,
        name: "Trending Items",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    },
];

const Navbar = () => {

    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* upper nav */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <a className="font-bold text-2xl sm:text-3xl flex gap-2" href="#">
                            <img src={Logo} alt="logo"
                                className="w-[8rem] uppercase"
                            />
                            {/* Slogan for nestor ecom-site */}
                        </a>
                    </div>

                    {/* search bar */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder='e-Search'
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-grey-300 px-2 py-1 focus:outlined-none focus:border-1 focus:border-primary dark:bg-gray-800" 
                            />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>
                    </div>

                    {/* button for the order */}
                    <button
                        onClick={() => {
                            alert("Ce button n'est pas encore implementer")
                        }}
                        className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                    >
                        <span
                            className="group-hover:block hidden transition-all duration-200"
                        >order
                        </span>
                        <BsFillCartFill
                            className="text-xl text-white drop-shadow-sm cursor-pointer"
                        />
                    </button>

                    {/* Dark mode Switch */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
            {/* lower nav */}
            <div className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-4">
                    {
                        Menu.map((data) => (
                            <li key={data.id} >
                                <a href={data.link} className="inline-block px-4 hover:text-primary duration-200">{data.name}
                                </a>
                            </li>
                        ))
                    }
                    {/* menus deroulants et links */}
                    <li className="group relative cursor-pointer">
                        <a href="" className="flex items-center gap-[2px] py-2">
                            Trending Products
                            <span>
                                <FaCaretDown
                                    className="transition-all duration-200 group-hover:rotate-180"
                                />
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black dark:text-black">
                            <ul>
                                {
                                    DropDownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a className="inline-block w-full rounded-md p-2 hover:bg-primary/20" href={data.link}>
                                                {data.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar