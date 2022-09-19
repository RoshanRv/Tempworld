import React, { useState } from "react"
import { FaHome, FaPhoneAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs"
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
        <header className="bg-gradient-to-br from-gray-900 to-gray-700 p-3 md:p-3 lg:p-3  border-b border-gray-500">
            <nav className="flex justify-between items-center px-4">
                <Link to={"/"}>
                    <h1 className="font-black text-center text-3xl uppercase text-white">
                        Temporld
                    </h1>
                </Link>

                {/*        Nav For Tab , PC       */}
                <div className="md:flex gap-x-8 text-white hidden ">
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

                        {/*       ME  Dropdown        */}
                        <div
                            className={`p-5 border text-left rounded-lg absolute translate-y-full -bottom-5 bg-gradient-to-br from-gray-900 to-gray-700 left-0 -translate-x-3/4 transition-all  shadow-xl shadow-black ${
                                dropdown?.tab == "me" ? "scale-100" : "scale-0"
                            } origin-top z-50`}
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
                {/*     END NAV FOR TAB,PC         */}

                {/*     NAV FOR MOB         */}
                <div className="fixed block md:hidden bottom-0 p-3 border-t-2 z-50 bg-white w-full left-0  bg-gradient-to-b from-gray-900 to-gray-700 ">
                    <div className="flex items-center text-white justify-around text-2x ">
                        {/*         Home Button      */}
                        <Link to={"/"}>
                            <div className="relative ">
                                <FaHome className="text-xl mx-auto" />
                                <h1 className="text-xs mt-1">Home</h1>
                                <div
                                    className={`bg-red-700 ${
                                        path == "/" ? "w-full" : "w-0"
                                    } -bottom-3 left-0 absolute transition-all h-1`}
                                ></div>
                            </div>
                        </Link>
                        {/*         Contact  */}
                        <Link to={"/"}>
                            <div className="relative">
                                <FaPhoneAlt className="text-xl mx-auto" />
                                <h1 className="text-xs mt-1">Contact</h1>

                                <div
                                    className={`bg-red-700 ${
                                        path.includes("contact")
                                            ? "w-full"
                                            : "w-0"
                                    } -bottom-3 left-0 absolute transition-all h-1`}
                                ></div>
                            </div>
                        </Link>
                        {/*         Me  */}
                        <div
                            className="relative "
                            onClick={() =>
                                dropdown.show
                                    ? handleDropdownHide()
                                    : handleDropdownShow("me")
                            }
                        >
                            <FaUser className="text-xl mx-auto" />
                            <h1 className="text-xs mt-1">You</h1>

                            <div
                                className={`bg-red-700 ${
                                    path.includes("me") ? "w-full" : "w-0"
                                } -bottom-3 left-0 absolute transition-all h-1`}
                            ></div>

                            {/*       ME  Dropdown        */}
                            <div
                                className={`p-5 border text-left rounded-lg absolute  bg-gradient-to-br from-gray-900 to-gray-700 -top-full left-full -translate-x-3/4 -translate-y-full transition-all shadow-lg shadow-black ${
                                    dropdown?.tab == "me"
                                        ? "scale-100"
                                        : "scale-0"
                                } origin-bottom z-50`}
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
                        {/*       More Options/Menu  */}
                        <div
                            className="relative"
                            onClick={() =>
                                dropdown.show
                                    ? handleDropdownHide()
                                    : handleDropdownShow("opt")
                            }
                        >
                            <BsThreeDotsVertical className="text-xl mx-auto" />
                            <h1 className="text-xs mt-1">Menu</h1>

                            {/*       ME  Dropdown        */}
                            <div
                                className={`p-5 border text-left rounded-lg absolute  bg-gradient-to-br from-gray-900 to-gray-700 -top-full left-full -translate-x-3/4 -translate-y-full transition-all shadow-lg shadow-black ${
                                    dropdown?.tab == "opt"
                                        ? "scale-100"
                                        : "scale-0"
                                } origin-bottom z-50`}
                            >
                                <div className="flex flex-col gap-y-8">
                                    <FaHome className="text-xl" />
                                    <FaUser className="text-xl" />
                                    <FaPhoneAlt className="text-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
