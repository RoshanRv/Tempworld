import React from "react"
import { FaEnvelope, FaLock } from "react-icons/fa"

const Login = () => {
    return (
        <main className="bg-gray-800 w-full min-h-screen flex justify-center items-center">
            {/*     box     */}
            <form className="md:p-10 p-6 bg-emerald-500 w-11/12 md:w-8/12 lg:w-6/12 text-left clip text-white text-lg">
                <h1 className="text-2xl font-bold mt-24">LOGIN</h1>
                <div className="mt-8 flex flex-col gap-y-8">
                    {/*     Email    */}
                    <div className="relative">
                        <FaEnvelope className="absolute bottom-1/2 translate-y-1/2" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border-b-2 border-white bg-transparent p-3 pl-10 placeholder:text-white/80 outline-none"
                        />
                    </div>
                    {/*     Password    */}
                    <div className="relative">
                        <FaLock className="absolute bottom-1/2 translate-y-1/2" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-b-2 border-white bg-transparent p-3 pl-10 placeholder:text-white/80 outline-none"
                        />
                    </div>
                    {/*     Login Button  */}
                    <div className="flex mt-6 justify-between items-center">
                        <button className="px-8 md:px-20 py-2 bg-yellow-400 text-emerald-800 font-bold">
                            LOGIN
                        </button>
                        <h1 className="text-white/70 italic hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer">
                            Forgot Password?
                        </h1>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Login
