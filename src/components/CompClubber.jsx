import React from 'react'

import Landing from './Landing/Main'
import TimeLine from './TimeLine/Main'
import Events from './Events/Main'
import Navbar from './Navbar/Main'
import Dummy from './dummyExp'
import Spline from '@splinetool/react-spline';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const CompClubber = () => {

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();

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

                markers: true
            }
        });

        stl.to('.events', {
            x: document.querySelector(".events").offsetWidth / 2 - 150,
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
        <div>
            <Navbar />

            {/* <Dummy /> */}

            {/* <section className="w-3/2 h-3/2 border">
                <Spline scene="https://prod.spline.design/oEjhzrKWPcNVKogz/scene.splinecode" />
            </section> */}

            <Landing />


            <h1 className="font-Bagel text-8xl w-10/12 mx-auto">
                Time-Line
            </h1>
            <div ref={container} className="overflow-x-hidden">
                <div className="wrapper flex flex-nowrap items-start w-[200vw]">
                    <section className="section w-[100%] h-fit s1">
                        <TimeLine />
                    </section>
                    <section className="section w-[100%]">
                        <div className="events-container">
                            <h1 className="events font-Bagel text-8xl w-10/12 mx-auto my-20">
                                Events
                            </h1>
                            <Events />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CompClubber


