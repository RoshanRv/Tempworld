import React, { useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const arrData = [1, 2, 3]

    const handleNext = () => {
        if (slideIndex >= arrData.length - 1) return setSlideIndex(0)
        return setSlideIndex((e) => e + 1)
    }

    const handlePrevious = () => {
        if (slideIndex <= 0) return setSlideIndex(arrData.length - 1)
        return setSlideIndex((e) => e - 1)
    }

    return (
        <section className="w-full h-full relative">
            <section className="w-full flex overflow-hidden ">
                <div
                    className="flex w-max  transition-all duration-700"
                    style={{ transform: `translateX(${-slideIndex * 100}vw)` }}
                >
                    {arrData.map((data, i) => (
                        <div key={i} className="w-screen h-[80vh] md:h-[60vh]">
                            <img
                                src={require(`./assets/${data}.jpeg`)}
                                className="w-full h-full lg:object-fill object-center object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>
            {/* left */}
            <button
                className="z-50 absolute top-1/2  -translate-y-1/2 md:left-10 left-4  outline-none"
                onClick={() => handlePrevious()}
            >
                <FaAngleLeft className="w-12 text-white h-12 rounded-full bg-black/20 p-2 z-50 px-2  " />
            </button>
            {/* right */}
            <button
                className="z-50 absolute top-1/2 -translate-y-1/2 md:right-10 right-4 outline-none"
                onClick={() => handleNext()}
            >
                <FaAngleRight className="w-12 text-white h-12 rounded-full bg-black/20 p-2 z-50 px-2  " />
            </button>
        </section>
    )
}

export default Slider
