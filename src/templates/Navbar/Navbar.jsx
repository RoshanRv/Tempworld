import React from "react"
import { FaHome } from "react-icons/fa"
import "./style.css"

const Navbar = () => {
    return (
        <header className="bg-white p-2 md:p-3 lg:p-4 lg:pb-0">
            <nav className="flex justify-between items-center">
                <h1 className="font-black text-3xl uppercase">Temporld</h1>
                <div className="flex gap-x-4">
                    <div className="text-center hover:bg-black transition-all border-b-2 border-black hover:text-white px-3  p-2 ">
                        <FaHome className="w-max mx-auto text-2xl" />
                        <h1 className="text-xs">Home</h1>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
