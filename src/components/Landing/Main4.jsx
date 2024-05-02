import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import "./clouds.css"
import "./fireflies.sass"
import CountDown from "./shiftingCountdown";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import logo_main_ref from "../../assets/rndlogo.png"
import ori_ref from "../../assets/landing/original.png"
import bg_ref from "../../assets/landing/background.png"
import xl_ref from "../../assets/landing/xl_mountain.png"
import lg_ref from "../../assets/landing/lg_mountain.png"
import ship_ref from "../../assets/landing/ship.png"
import sm_ref from "../../assets/landing/sm_mountain.png"
import logo_ref from "../../assets/landing/logo_landing.png"
import logo from '../../assets/navbar_logo.png'

function Main4() {

    gsap.registerPlugin(useGSAP);
    const l_container = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        function initIntro() {
            let tl = gsap.timeline({ delay: 1.2 });

            tl.from('.intro__title', {
                // x: 100,
                y: 400,
                ease: 'power4',
                duration: 3,
                delay: 3.3
            })
                .from('.intro__txt', {
                    x: -100,
                    opacity: 0,
                    ease: 'power4',
                    duration: 3,
                    delay: 3.3
                }, 0.7)

            let stl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.intro',
                    scrub: 1,
                    start: "top bottom", // position of trigger meets the scroller position
                    end: "bottom top",
                    markers: false
                }
            });

            stl.to('.intro__title', {
                x: 400,
                ease: 'power4.in',
                duration: 3,
            })
        };

        initIntro();

    }, { scope: l_container });

    return (
        <div className="hero">
            <div className='animated-bg w-full h-screen overflow-hidden relative grid place-items-center z-0' ref={l_container}>
                <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                    <MouseParallaxChild factorX={0} factorY={0}>
                        <img src={bg_ref} className='w-full absolute' />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.2} factorY={0.3}>
                        <img src={xl_ref} className='w-full absolute' />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0} factorY={0}>
                        <img src={logo_ref} className='w-full absolute z-30' />
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

                <div className='md:hidden relative w-full h-screen z-10'>
                    <img src={ori_ref} className='w-full h-screen' style={{
                        objectFit: "cover"
                    }} />
                    <img src={logo_main_ref} className="absolute top-1/4 left-0" />
                </div>
                <div className="absolute top-0 left-0 my-10 mx-16 z-30">
                    <a href="https://ieeejuit.co.in/" target="_blank">

                        <img src={logo} alt="ieeelogo" className="w-[112px] h-[42px]" />
                    </a>
                </div>

                <div className="intro__txt absolute top-1/4 left-0 w-min z-40 pointer-events-auto">
                    <div className="p-10"><a href="https://www.instagram.com/ieeejuit/" target="_blank"><InstagramIcon /></a></div>
                    <div className="px-10"><a href="https://github.com/IEEE-JUIT-SB" target="_blank"><GitHubIcon /></a></div>
                    <div className="p-10"><a href="http://www.linkedin.com/in/ieeejuitsb" target="_blank"><LinkedInIcon /></a></div>
                    <div className="px-10"><a href="https://twitter.com/ieee_juit" target="_blank"><TwitterIcon /></a></div>
                </div>


                <div className='true_overlay absolute w-full h-screen bg-black bg-opacity-0 z-10 pointer-events-none'>


                    <div>
                        <div className='absolute md:block hidden top-1/4 left-1/2'>
                            <div className="landing-content z-10">
                                <div className="intro">
                                    <div className="w-[1000px] overflow-hidden">
                                        <div className="intro__title text-2xl">IEEE JUIT SB Presents</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute md:hidden top-[15%] left-1/2 -translate-x-1/2'>
                            <div className="landing-content">
                                <div className="intro">
                                    <div className="">
                                        <div className="text-2xl w-max">IEEE JUIT SB Presents</div>
                                    </div>
                                </div>
                            </div>

                        </div>
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
                        <div className="md:flex hidden items-center w-full justify-center">
                            <div className="w-1/2 p-10">
                                <div className='w-fit m-auto'>
                                    <div className="mouse m-auto"></div>
                                    <br />
                                    <div>Scroll Down</div>
                                </div>
                            </div>
                            <div className="relative glass_section w-1/2">
                                <div className='m-auto'>
                                    <span className='absolute text-lg -top-10 right-10'>Coming Soon...</span>
                                    <CountDown />
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden glass_section w-full translate-y-[-100%] p-5">
                            <center>Coming Soon...</center>
                            <div className='m-auto pt-3'>
                                <CountDown />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sec-divider relative overflow-x-hidden">

                <svg
                    id=""
                    preserveAspectRatio="xMidYMax meet"
                    className="svg-separator bottom sep5"
                    viewBox="0 0 1600 200"
                    style={{ display: 'block' }}
                    height="200"
                >
                    <polygon
                        className=""
                        style={{ fill: '#121212' }}
                        points="1488,134 1304,100 1068,152 909.935,92.044 672,198 364,142 242,32 -4,95 -4,204 1604,204 1604,0 "
                    ></polygon>
                    <polygon
                        className=""
                        style={{ opacity: 1, fill: '#95a5a6' }}
                        points="672,198 364,142 242,32 -4,95 -4,82.333 242,32 374,136 "
                    ></polygon>
                    <polygon
                        className=""
                        style={{ opacity: 1, fill: '#95a5a6' }}
                        points="894,86 672,198 909.935,92.044 "
                    ></polygon>
                    <polygon
                        className=""
                        style={{ opacity: 1, fill: '#6c7a89' }}
                        points="1068,152 1302,86 1486,126 1604,0 1488,134 1304,100 "
                    ></polygon>
                </svg>

            </div>
        </div>
    )
}

export default Main4