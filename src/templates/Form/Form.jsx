import React, { useState } from "react"
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaUser,
    FaPhoneAlt,
} from "react-icons/fa"
import Spinner from "../Spinner"
import "./style.css"

const Login = ({ showLogin, setShowLogin }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [respMsg, setRespMsg] = useState({
        msg: "",
        err: true,
    })

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleLogin}
            className={` absolute top-1/2 left-1/2 -translate-x-1/2  md:p-10 ${
                showLogin ? "z-10" : "z-0 "
            } transition-all p-4 bg-gradient-to-tr from-lPri to-dPri w-11/12 md:w-8/12 lg:w-6/12 text-left clip-login text-white text-lg`}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none input"
                        spellCheck={false}
                        required
                    />
                </div>
                {/*     Password    */}
                <div className="relative">
                    <FaLock className="absolute bottom-1/2 translate-y-1/2" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none input"
                        minLength={5}
                        maxLength={20}
                        title="Must Contain Atleast 5 Characters"
                        required
                    />
                    {/*         Show & Hide Password Button */}
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

                {/* Error Msg && Loading */}
                {respMsg.msg && (
                    <div
                        className={`p-1 text-center font-bold ${
                            respMsg.err ? "bg-red-500" : "bg-green-400"
                        }`}
                    >
                        <h1>{respMsg.msg}</h1>
                    </div>
                )}
                {isLoading && <Spinner />}

                {/*   Submit  Login Button  */}
                <div className="flex mt-4 justify-between items-center">
                    <input
                        type={"submit"}
                        value="LOGIN"
                        className="px-8 md:px-20 py-2 bg-gradient-to-br from-dSec to-lSec text-dPri font-bold cursor-pointer"
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
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [respMsg, setRespMsg] = useState({
        msg: "",
        err: false,
    })

    const handleRegister = (e) => {
        if (password !== confirmPassword) {
            e.preventDefault()
            setRespMsg({ msg: "Password Doesn't Match", err: true })
            setTimeout(() => {
                setRespMsg({ msg: "", err: false })
            }, 2000)
        } else {
            e.preventDefault()
        }
    }
    return (
        <form
            onSubmit={handleRegister}
            className={` absolute top-1/2 left-1/2 -translate-x-1/2 z-0 md:p-10 ${
                !showLogin ? "z-20 " : "z-0  "
            } transition-all p-4 bg-gradient-to-tl from-lSec to-dSec w-11/12 md:w-8/12 lg:w-6/12 text-left clip-register text-white text-lg`}
        >
            <h1
                onClick={() => setShowLogin(false)}
                className="cursor-pointer text-2xl font-bold mt-16 text-right"
            >
                REGISTER
            </h1>
            <div className="mt-10 flex flex-col gap-y-6">
                {/*     Username    */}
                <div className="relative ">
                    <FaUser className="absolute bottom-1/2 translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none input"
                        spellCheck={false}
                        minLength={3}
                        required
                    />
                </div>
                {/*     Email    */}
                <div className="relative ">
                    <FaEnvelope className="absolute bottom-1/2 translate-y-1/2" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none input"
                        spellCheck={false}
                        required
                    />
                </div>
                {/*     Password    */}
                {!showLogin && (
                    <>
                        <div className="relative">
                            <FaLock className="absolute bottom-1/2 translate-y-1/2" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none input"
                                minLength={5}
                                maxLength={20}
                                title="Must Contain Atleast 5 Characters"
                                required
                            />
                            {/*         Show & Hide Password Button */}
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

                        {/*    Confirm Password    */}
                        <div className="relative">
                            <FaLock className="absolute bottom-1/2 translate-y-1/2" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none input"
                                minLength={5}
                                maxLength={20}
                                title="Must Contain Atleast 5 Characters"
                                required
                            />
                            {/*         Show & Hide Password Button */}
                            {showConfirmPassword ? (
                                <FaEyeSlash
                                    onClick={() =>
                                        setShowConfirmPassword(false)
                                    }
                                    className={`absolute bottom-1/2 translate-y-1/2 right-0 cursor-pointer`}
                                />
                            ) : (
                                <FaEye
                                    onClick={() => setShowConfirmPassword(true)}
                                    className={`absolute bottom-1/2 translate-y-1/2 right-0 cursor-pointer`}
                                />
                            )}
                        </div>

                        {/*     Phone    */}
                        <div className="relative">
                            <FaPhoneAlt className="absolute bottom-1/2 translate-y-1/2" />
                            <input
                                type="tel"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full border-b-2 border-white bg-transparent p-1 pl-10 placeholder:text-white/80 outline-none input"
                                required
                            />
                        </div>
                    </>
                )}
                {/* Error Msg && Loading */}
                {respMsg.msg && (
                    <div
                        className={`p-1 text-center font-bold ${
                            respMsg.err ? "bg-red-500" : "bg-green-400"
                        }`}
                    >
                        <h1>{respMsg.msg}</h1>
                    </div>
                )}
                {isLoading && <Spinner />}

                {/*   Submit  Login Button  */}
                <div className="flex mt-4 justify-end items-center">
                    <input
                        type={"submit"}
                        value="REGISTER"
                        className="px-8 md:px-20 py-2 bg-gradient-to-bl from-dPri to-lPri text-dSec font-bold cursor-pointer"
                    />
                </div>
            </div>
        </form>
    )
}

const Form = () => {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <main className="bg-gradient-to-br from-gray-900 to-gray-700  min-h-[94.7vh] py-28">
            {/*     box     */}
            <div className="flex justify-center items-center relative w-full ">
                <Login showLogin={showLogin} setShowLogin={setShowLogin} />
                <Register showLogin={showLogin} setShowLogin={setShowLogin} />
            </div>
        </main>
    )
}

export default Form
