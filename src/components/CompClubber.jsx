import React from 'react'

import Landing from './Landing/Main4'
import TimeLine from './TimeLine/Main'
import Events from './Events/Main'
import About from './About/Main'
import Navbar from './Navbar/Main'
import Sponser from './Sponsers/Main'
import Footer from './Footer/Main'
import Preloader from '../Preloader/Preloader'
// import Dummy from './dummyExp'
import Spline from '@splinetool/react-spline';
import { Link } from 'react-scroll'

import "./Footer/wave_ani.css"
import map from "../assets/map.png"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import img1 from '../assets/events/1.jpeg';
import img2 from '../assets/events/2.jpeg';
import img3 from '../assets/events/3.jpeg';
import img4 from '../assets/events/4.jpeg';
import img5 from '../assets/events/5.jpeg';
import img6 from '../assets/events/6.jpeg';
import img7 from '../assets/events/7.jpeg';
import img8 from '../assets/events/8.jpeg';
import img9 from '../assets/events/9.jpeg';
import img10 from '../assets/events/10.jpeg';
import img11 from '../assets/events/11.jpeg';
import img12 from '../assets/events/12.jpeg';

const CompClubber = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();
    const container_2 = useRef();

    useGSAP(() => {
        const section = document.querySelector('.target_section');
        const img = document.querySelector('.bgimg');

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: `top+=${document.querySelector(".s1").offsetHeight}px center`, // Animation starts when the top of the section hits the center of the viewport
                end: `bottom+=${document.querySelector(".s1").offsetHeight}px center`, // Animation ends when the bottom of the section hits the center of the viewport
                scrub: true, // Smoothly scrub through the animation as the user scrolls
                markers: false
            }
        });

        // Animation to set opacity to 1 at the start of the section
        tl2.to(img, { opacity: 0.2 });

        // Animation to set opacity back to 0 at the end of the section
        tl2.to(img, { opacity: 0 });

    }, { scope: container_2 });

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray("section"),
            getMaxWidth = () => sections.reduce((val, section) => val + section.offsetWidth, 0),
            maxWidth = getMaxWidth(),
            scrollSpeed = 4,
            tl = gsap.timeline();

        tl.to(sections, {
            x: () => window.innerWidth - maxWidth,
            duration: 1,
            ease: "none"
        });

        ScrollTrigger.create({
            animation: tl,
            trigger: ".wrapper",
            pin: true,
            scrub: 1,
            snap: { snapTo: directionalSnap(tl), duration: 0.5 },
            start: `top+=${document.querySelector(".s1").offsetHeight}px bottom`,
            end: () => "+=" + maxWidth / scrollSpeed,
            invalidateOnRefresh: true,

            markers: false
        });




        function init() {
            gsap.set(sections, { x: 0 });
            maxWidth = getMaxWidth();
            let position = 0,
                distance = maxWidth - window.innerWidth;

            tl.add("label0", 0);
            sections.forEach((section, i) => {
                position += section.offsetWidth / distance;
                tl.add("label" + (i + 1), position);
            });
        }

        init();
        ScrollTrigger.addEventListener("refreshInit", init); // on resize, things must be recalculated


        function directionalSnap(timeline) {
            return (value, st) => {
                let a = [],
                    labels = timeline.labels,
                    duration = timeline.duration(),
                    p, i;
                for (p in labels) {
                    a.push(labels[p] / duration);
                }
                a.sort((a, b) => a - b);
                if (st.direction > 0) {
                    for (i = 0; i < a.length; i++) {
                        if (a[i] >= value) {
                            return a[i];
                        }
                    }
                    return a.pop();
                } else {
                    i = a.length;
                    while (i--) {
                        if (a[i] <= value) {
                            return a[i];
                        }
                    }
                }
                return a[0];
            };
        }



        let stl = gsap.timeline({
            scrollTrigger: {
                trigger: '.events',
                scrub: 1,
                start: `top+=${document.querySelector(".s1").offsetHeight}px center`, // position of trigger meets the scroller position
                end: `top+=${document.querySelector(".s1").offsetHeight + 100}px center`,

                // markers: false
            }
        });

        stl.to('.events', {
            y: 80,
            ease: "none",
            duration: 3,
            delay: 1
        })

        // .to('.intro__txt', {
        //     y: 100,
        //     ease: 'power4.in',
        //     duration: 3,
        // }, 0);

    }, { scope: container });

    return (
        <div className="overflow-x-hidden font-Oldest">
            <div id="locate-landing"></div>
            <Navbar />

            {/* <Dummy /> */}


            {/* <Preloader /> */}
            <Landing />


            {/* <h1 className="font-Bagel text-8xl w-10/12 mx-auto">
                About Us
            </h1> */}
            <div id="locate-about"></div>
            <About />
            <div ref={container} className="overflow-hidden font-Oldest">
                <div className="wrapper flex flex-nowrap items-start w-[200vw]">
                    <section className="section md:w-[90%] w-full s1">
                        <div className="md:h-[100vh] h-[90vh] md:flex">
                            <div className='md:w-1/2 w-full md:relative'>
                                <img src={map} className="-left-32 md:absolute" alt="" />
                            </div>
                            <div className='md:w-1/2 w-full mx-auto my-32'>
                                <div className='text-center font-Caribbean text-7xl'>Explore</div>
                                <div className='flex w-full justify-around mt-20'>
                                    <Link to="locate-timeline"
                                        smooth={true}
                                        offset={50}
                                        duration={1000} className="cursor-pointer hover:text-[#ac9473]">Timeline</Link>
                                    <Link
                                        to="locate-events"
                                        smooth={true}
                                        offset={50}
                                        duration={1000} className='cursor-pointer hover:text-[#ac9473]'
                                    >Events</Link>
                                    <Link
                                        to="locate-sponsers"
                                        smooth={true}
                                        offset={50}
                                        duration={2000}
                                        className='cursor-pointer hover:text-[#ac9473]'
                                    >Sponsers</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section w-[100%]">
                        <div className="events-container overflow-y-hidden">
                            <div id="locate-timeline"></div>
                            <h1 className="hidden md:block events font-Caribbean md:text-8xl text-6xl md:w-10/12 mx-auto my-20 md:-translate-y-[200px]">
                                Time-Line
                            </h1>
                            <h1 className="block md:hidden font-Caribbean md:text-8xl text-6xl w-10/12 mx-auto my-20">
                                Time-Line
                            </h1>
                            <TimeLine images={images} />
                        </div>
                    </section>
                </div>
            </div>
            <div id="locate-events"></div>
            <h1 className="font-Caribbean md:text-8xl text-6xl w-10/12 mx-auto my-20">
                Events
            </h1>
            <div ref={container_2}>
                <div className="target_section">
                    <Events images={images} />
                </div>
            </div>

            <h1 className="font-Caribbean md:text-8xl text-6xl w-10/12 mx-auto my-20">
                Register Now
            </h1>
            <div className='md:flex'>
                <section className="md:w-1/2 h-full w-full">
                    <Spline scene="https://prod.spline.design/oEjhzrKWPcNVKogz/scene.splinecode" />
                </section>

                <div className='md:w-1/2 w-full flex items-center justify-center md:p-10'>
                    <div className='text-justify p-10 md:p-0'>
                        Scan the QR code to register via Google Form instantly. <br />
                        <br />
                        If the QR code isn't visible, please <a className="text-[#ac9473] underline" target="_blank" href="https://raw.githubusercontent.com/Duisternis/r-dExpo24/main/src/assets/events/reg.png">click here</a>.
                    </div>
                </div>
            </div>

            <div className="locate-sponsers"></div>
            <h1 className="font-Caribbean md:text-8xl text-6xl w-10/12 mx-auto my-36">
                Sponsors
            </h1>
            <Sponser />
            <div className="hero_area">
                <svg className="waves -z-10" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#000" />
                    </g>
                </svg>
            </div>

            <Footer />
        </div>
    )
}

export default CompClubber


