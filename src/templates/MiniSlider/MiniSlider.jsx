import React, { useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const MiniSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const arrData = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const handleNext = () => {
        if (slideIndex >= arrData.length - 1) return setSlideIndex(0)
        return setSlideIndex((e) => e + 1)
    }

    const handlePrevious = () => {
        if (slideIndex <= 0) return setSlideIndex(arrData.length - 1)
        return setSlideIndex((e) => e - 1)
    }

    return (
        <main className="min-h-[85vh] flex flex-col justify-center items-center">
            <section className="w-full h-full relative bg-black p-6 py-20">
                <section className="w-full flex overflow-hidden ">
                    <div
                        className="flex w-max gap-x-10 transition-all  duration-700"
                        style={{
                            transform: `translateX(calc(${
                                -slideIndex * 50
                            }vw +  ${2.5 * -slideIndex}rem ))`,
                        }}
                    >
                        {arrData.map((data, i) => (
                            <div
                                key={i}
                                className="w-[50vw] h-[20vh] md:h-[40vh]"
                            >
                                <img
                                    src={require(`./assets/${data}.jpeg`)}
                                    className={`w-full h-full translate-x-1/2 lg:object-fill object-center object-cover transition-all ${
                                        slideIndex == i
                                            ? "scale-110"
                                            : "scale-[.90] brightness-[.4]"
                                    } `}
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
        </main>
    )
}

export default MiniSlider
