import React from "react"
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa"
import "./style.css"

const Footer = () => {
    // .beat{
    //     animation-name: heart;
    //     animation-duration: 1000ms;
    //     animation-iteration-count: infinite;
    // }

    // @keyframes heart{
    //     0%{
    //         transform: scale(1);
    //     }

    //     90%{
    //         transform: scale(0.7);
    //     }

    // }

    return (
        <footer className="mb-16 md:mb-0 w-full font-rale bg-gradient-to-r from-gray-800 to-gray-600  text-white border-t-2  border-white txt-sha text-md  p-2 md:flex items-center justify-around text-center font-disp">
            <h1 className="text-">
                Made With&nbsp;{" "}
                <FaHeart className="text-red-500 beat inline-block text-md beat -z-10" />{" "}
                &#38; &#129504; &nbsp; By Roshan Kumar{" "}
            </h1>
            <h1>
                Reach Me On{" "}
                <a
                    href="https://twitter.com/RoshanK18328680"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaTwitter className="text-sky-400 inline-block  text-xl mx-1" />
                </a>{" "}
                <a
                    href="https://github.com/RoshanRv"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaGithub className="text-xl inline-block  mx-1 bg-white text-black rounded-full " />
                </a>{" "}
                <a
                    href="https://www.linkedin.com/in/roshan-kumar-5a5020220/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {" "}
                    <FaLinkedin className="text-xl inline-block mx-1 text-blue-700 bg-white " />
                </a>
            </h1>
        </footer>
    )
}

export default Footer
