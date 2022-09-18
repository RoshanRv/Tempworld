import React, { useState } from "react"
import { FaHome, FaPhoneAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { AiFillCaretDown } from "react-icons/ai"
import { Link, useLocation } from "react-router-dom"
import "./style.css"

const Navbar = () => {
    const { pathname: path } = useLocation()
    const [dropdown, setDropdown] = useState({ tab: "", show: false })

    const handleDropdownShow = (tab) => {
        setDropdown({
            tab,
            show: true,
        })
    }

    const handleDropdownHide = () => {
        setDropdown({
            tab: "",
            show: false,
        })
    }

    return (
        <header className="bg-gradient-to-br from-gray-900 to-gray-700 p-2 md:p-3 lg:p-3  border-b border-gray-500">
            <nav className="flex justify-between items-center">
                <Link to={"/"}>
                    <h1 className="font-black text-3xl uppercase text-white">
                        Temporld
                    </h1>
                </Link>
                <div className="flex gap-x-8 text-white">
                    <Link to={"/"}>
                        <div className="text-center w-full hover:bg-white rounded-lg transition-all hover:text-black px-3 relative p-2 ">
                            <FaHome className="w-max mx-auto text-2xl" />
                            <h1 className="text-xs mt-1">Home</h1>
                            <div
                                className={`bg-red-700 ${
                                    path == "/" ? "w-full" : "w-0"
                                } bottom-0 left-0 absolute origin-right center transition-all h-1`}
                            ></div>
                        </div>
                    </Link>
                    <Link to={"/"}>
                        <div className="text-center w-full hover:bg-white rounded-lg transition-all hover:text-black px-3 relative p-2 ">
                            <FaPhoneAlt className="w-max mx-auto text-2xl" />
                            <h1 className="text-xs mt-1">Contact</h1>
                            <div
                                className={`bg-red-700 ${
                                    path.includes("contact") ? "w-full" : "w-0"
                                } bottom-0 left-0 absolute origin-right center transition-all h-1`}
                            ></div>
                        </div>
                    </Link>
                    {/* <Link to={"/login"}> */}
                    <div
                        className="text-center w-full hover:bg-white rounded-lg transition-all hover:text-black px-3 relative p-2 cursor-pointer"
                        onClick={() =>
                            dropdown.show
                                ? handleDropdownHide()
                                : handleDropdownShow("me")
                        }
                    >
                        <FaUser className="w-max mx-auto text-2xl" />
                        <div className="flex items-end text-xs gap-x-1 ">
                            <h1 className="mt-1">Me</h1>
                            <AiFillCaretDown
                                className={` transition-transform ${
                                    dropdown.tab == "me"
                                        ? "rotate-180"
                                        : "rotate-0"
                                } `}
                            />
                        </div>
                        <div
                            className={`bg-red-700 ${
                                path.includes("me") ? "w-full" : "w-0"
                            } bottom-0 left-0 absolute origin-right center transition-all h-1`}
                        ></div>

                        {/*         Dropdown        */}
                        <div
                            className={`p-5 border text-left rounded-lg absolute translate-y-full -bottom-3 bg-gradient-to-br from-gray-900 to-gray-700 left-0 -translate-x-3/4 transition-all  shadow-xl shadow-black ${
                                dropdown?.tab == "me" ? "scale-100" : "scale-0"
                            } origin-top`}
                        >
                            <button className="px-16 py-1 w-full rounded-full border-2 bg-white text-black ">
                                Profile
                            </button>
                            <hr className="mt-3 border-gray-400 " />
                            {/*         Account      */}
                            <div className="text-gray-400 flex flex-col gap-y-2">
                                <h1 className="text-xl font-bold text-white mt-2">
                                    Accounts
                                </h1>
                                <h1 className="hover:text-white transition-all cursor-pointer">
                                    Accounts 1
                                </h1>
                                <h1 className="hover:text-white transition-all cursor-pointer">
                                    Accounts 2
                                </h1>
                            </div>

                            <hr className="mt-3 border-gray-400 " />
                            {/*         Manage      */}
                            <div className="text-gray-400 flex flex-col gap-y-2">
                                <h1 className="text-xl font-bold text-white mt-2">
                                    Manage
                                </h1>
                                <h1 className="hover:text-white transition-all cursor-pointer">
                                    Manage 1
                                </h1>
                                <h1 className="hover:text-white transition-all cursor-pointer">
                                    Manage 2
                                </h1>
                            </div>
                            <hr className="mt-3 border-gray-400 " />
                            {/*         Logout      */}
                            <div className="text-gray-400 flex items-center mt-2 gap-x-2 hover:text-white cursor-pointer">
                                <h1 className=" font-bold text-hite ">
                                    Logout
                                </h1>
                                <FaSignOutAlt />
                            </div>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
