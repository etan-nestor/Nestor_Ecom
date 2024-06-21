import { BiUserPin } from "react-icons/bi";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";


const Statistic1 = () => {
    return (
        <div>
            <div className="flex items-center dark:bg-gray-500 bg-gray-200 text-gray-800">
                <div className="p-4 w-full">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row dark:bg-gray-800 bg-white shadow-sm rounded p-4">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                    <BiUserPin />
                                </div>
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-xl font-bold dark:text-white text-gray-500">Users</div>
                                    <div className="font-bold text-lg dark:text-white">1259</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row dark:bg-gray-800 bg-white shadow-sm rounded p-4">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                                    <MdOutlineBookmarkBorder />
                                </div>
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-xl text-gray-500 font-bold dark:text-white">Orders</div>
                                    <div className="font-bold text-lg dark:text-white">230</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-white dark:bg-gray-800 shadow-sm rounded p-4">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                                    <AiOutlineUser />
                                </div>
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-xl text-gray-500 dark:text-white font-bold">New Clients</div>
                                    <div className="font-bold text-lg dark:text-white">190</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="flex flex-row bg-white dark:bg-gray-800 shadow-sm rounded p-4">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                                    <GiTakeMyMoney />
                                </div>
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="text-xl dark:text-white font-bold text-gray-500">Revenue</div>
                                    <div className="font-bold text-lg dark:text-white">$ 32k</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic1
