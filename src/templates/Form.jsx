import React, { useState } from "react"
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaEyeDropper,
} from "react-icons/fa"

const Login = ({ showLogin, setShowLogin }) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <form
            className={` absolute  md:p-10 ${
                showLogin ? "z-10" : "z-0 top-0"
            } transition-all p-6 bg-gradient-to-tr from-emerald-300 to-emerald-700 w-11/12 md:w-8/12 lg:w-6/12 text-left clip-login text-white text-lg`}
        >
            <h1
                onClick={() => setShowLogin(true)}
                className="cursor-pointer text-2xl font-bold mt-16"
            >
                LOGIN
            </h1>
            <div className="mt-10 flex flex-col gap-y-6">
                {/*     Email    */}
                <div className="relative ">
                    <FaEnvelope className="absolute bottom-1/2 translate-y-1/2" />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none input"
                        required
                    />
                </div>
                {/*     Password    */}
                <div className="relative">
                    <FaLock className="absolute bottom-1/2 translate-y-1/2" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none input"
                        // pattern="[.]{8,20}"
                        minLength={5}
                        maxLength={20}
                        title="Must Contain Atleast 8 Characters"
                        required
                    />
                    {showPassword ? (
                        <FaEyeSlash
                            onClick={() => setShowPassword(false)}
                            className={`absolute bottom-1/2 translate-y-1/2 right-0 cursor-pointer`}
                        />
                    ) : (
                        <FaEye
                            onClick={() => setShowPassword(true)}
                            className={`absolute bottom-1/2 translate-y-1/2 right-0 cursor-pointer`}
                        />
                    )}
                </div>
                {/*     Login Button  */}
                <div className="flex mt-6 justify-between items-center">
                    <input
                        type={"submit"}
                        value="LOGIN"
                        className="px-8 md:px-20 py-2 bg-yellow-400 text-emerald-800 font-bold"
                    />

                    <h1 className="text-white/70 italic hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer">
                        Forgot Password?
                    </h1>
                </div>
            </div>
        </form>
    )
}

const Register = ({ showLogin, setShowLogin }) => {
    return (
        <form
            className={`  z-0 md:p-10 ${
                !showLogin ? "z-10 " : "z-0  "
            } transition-all p-6 bg-gradient-to-tl from-yellow-300 to-yellow-700 w-11/12 md:w-8/12 lg:w-6/12 text-left clip-register text-white text-lg`}
        >
            <h1
                onClick={() => setShowLogin(false)}
                className="cursor-pointer text-2xl font-bold mt-16 text-right"
            >
                REGISTER
            </h1>
            <div className="mt-10 flex flex-col gap-y-6">
                {/*     Email    */}
                <div className="relative">
                    <FaEnvelope className="absolute bottom-1/2 translate-y-1/2" />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none"
                    />
                </div>
                {/*     Password    */}
                <div className="relative">
                    <FaLock className="absolute bottom-1/2 translate-y-1/2" />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none"
                    />
                </div>
                {/*     Register Button  */}
                <div className="flex mt-6 justify-end  items-center">
                    <button className="px-8 md:px-20 py-2 bg-emerald-500 text-yellow-900 font-bold">
                        REGISTER
                    </button>
                    {/* <h1 className="text-white/70 italic hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer">
                            Forgot Password?
                        </h1> */}
                </div>
            </div>
        </form>
    )
}

const Form = () => {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <main className="bg-gray-800 w-full min-h-screen  py-28">
            {/*     box     */}
            <div className="flex justify-center items-center relative w-full ">
                <Login showLogin={showLogin} setShowLogin={setShowLogin} />
                <Register showLogin={showLogin} setShowLogin={setShowLogin} />
                {/*     box     */}
            </div>
        </main>
    )
}

export default Form
