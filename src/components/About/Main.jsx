import React from 'react'

import rndlogo from "../../assets/rndlogo.png"
import main from "../../assets/ieee_main.png"
import sight from "../../assets/ieee_sight.png"
import wie from "../../assets/ieee_wie.png"

const Main = () => {
    return (
        <div>
            <div className="sm:flex items-center mx-auto max-w-screen-xl my-20">
                <div className="sm:w-1/2 p-10">
                    <div className="text">
                        <h2 className="my-4 font-bold md:text-3xl text-5xl ">About <span className="text-[#AC9473]">R&D Expo 24</span>
                        </h2>
                        <p className="text-gray-200 text-justify">
                            Join us at IEEE Student Branch JUIT's R&D Expo, the premier tech event at the university! From Hack-Expo to Gaming Nights and Movie Nights, we have a packed schedule of exciting activities for everyone. Don't miss out on Coding Premier League, BGMI Gaming Night, Pixel Clash, Web Ahoy, and more. Mark your calendars and register now for a weekend filled with tech, fun, and unforgettable memories!
                        </p>
                        <ul className="mt-6 space-y-4 text-sm flex flex-wrap justify-around items-center">
                            <li>
                                <img src={main} className="md:w-[120px] w-[100px]" />
                            </li>

                            <li>
                                <img src={wie} className="md:w-[120px] w-[100px]" />
                            </li>

                            <li>
                                <img src={sight} className="md:w-[120px] w-[100px]" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sm:w-1/2 p-5 lg:p-5">
                    <div className="image object-center text-center">
                        <img src={rndlogo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main