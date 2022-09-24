import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

const Modal = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        console.log("hll")
        setShowModal(false)
    }

    return (
        <>
            <div className="h-[85vh] flex items-center jusify-center">
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-black text-white w-max px-10 mx-auto rounded-full py-3 font-bold mt-4"
                >
                    Show Modal
                </button>
            </div>
            {/* // modal Template... */}
            <main
                className={`fixed bg-black/70 w-full h-full  left-0 z-30 flex flex-col justify-center items-center transition-all ${
                    showModal ? "top-0" : "hidden"
                }`}
            >
                <section
                    className={`bg-white rounded-lg p-10 shadow-lg shadow-black/80 relative transition-all duration-1000 ${
                        showModal ? "scale-100" : "scale-0"
                    } `}
                >
                    {/*      close btn    */}
                    <button
                        onClick={handleClose}
                        className="outline-0 absolute -top-3 -right-3"
                    >
                        <AiOutlineClose className="font-bold p-2 text-4xl rounded-full bg-black text-white" />
                    </button>
                    {/*         box content      */}
                    <h1 className="text-2xl font-bold text-center">
                        Close Modal ?
                    </h1>
                    <button
                        onClick={handleClose}
                        className="bg-black text-white w-full rounded-full py-2 font-bold mt-4"
                    >
                        Yes
                    </button>
                </section>
            </main>
        </>
    )
}

export default Modal
