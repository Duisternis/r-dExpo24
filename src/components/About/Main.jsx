import React from 'react'

import rndlogo from "../../assets/wtf.png"

const Main = () => {
    return (
        <div>
            <div className="sm:flex items-center max-w-screen-xl shadow-[0px_-19px_109px_-7px_rgba(0,0,0,0.85)]">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src={rndlogo} />
                    </div>
                </div>
                <div className="sm:w-1/2 p-10">
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-[#AC9473]">IEEE JUIT SB</span>
                        </h2>
                        <p className="text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                            doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                            voluptatum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main