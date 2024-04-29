import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import "./clouds.css"
import "./fireflies.sass"
import CountDown from "./shiftingCountdown";

import bg_ref from "../../assets/landing/background.png"
import xl_ref from "../../assets/landing/xl_mountain.png"
import lg_ref from "../../assets/landing/lg_mountain.png"
import ship_ref from "../../assets/landing/ship.png"
import sm_ref from "../../assets/landing/sm_mountain.png"
import logo_ref from "../../assets/landing/logo_landing.png"
import logo from '../../assets/navbar_logo.png'

function Main4() {
    return (
        <div className="hero-section">
            <div className='animated-bg w-full h-screen overflow-hidden relative grid place-items-center z-0'>
                <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                    <MouseParallaxChild factorX={0} factorY={0}>
                        <img src={bg_ref} className='w-full absolute' />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.2} factorY={0.3}>
                        <img src={xl_ref} className='w-full absolute' />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0} factorY={0}>
                        <img src={logo_ref} className='w-full absolute' />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.4} factorY={0.5}>
                        <img src={lg_ref} className='w-full absolute' />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.6} factorY={0.8}>
                        <img src={ship_ref} className='w-full absolute' />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.7} factorY={0.9}>
                        <img src={sm_ref} />
                    </MouseParallaxChild>
                </MouseParallaxContainer>
                <div className='true_overlay absolute w-full h-screen bg-black bg-opacity-0 z-10 pointer-events-none'>
                    <div className="absolute my-10 mx-16 z-10">
                        <img src={logo} alt="ieeelogo" className="w-[112px] h-[42px]" />
                    </div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className="firefly"></div>
                    <div className='flex flex-col items-end justify-end h-full z-20'>
                        <div className="flex items-center w-full justify-center">
                            <div className="w-1/2 p-10">
                                <div className='w-fit m-auto'>
                                    <div className="mouse m-auto"></div>
                                    <br />
                                    <div>Scroll Down</div>
                                </div>
                            </div>
                            <div className=" glass_section w-1/2">
                                <div className='m-auto'>
                                    <CountDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main4