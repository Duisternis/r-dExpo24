import React, { useRef, useEffect } from 'react';
import { TweenLite } from 'gsap';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./clouds.scss"

function Main3() {
    const containerRef = useRef(null);
    const rectRef = useRef(null);
    const mouseRef = useRef({ x: 0, moved: false });

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        rectRef.current = rect;

        const handleMouseMove = (e) => {
            const mouse = mouseRef.current;
            mouse.moved = true;
            mouse.x = e.clientX - rect.left;
        };

        const handleResizeScroll = () => {
            rectRef.current = container.getBoundingClientRect();
        };

        window.addEventListener('resize', handleResizeScroll);
        window.addEventListener('scroll', handleResizeScroll);
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResizeScroll);
            window.removeEventListener('scroll', handleResizeScroll);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, { scope: containerRef });

    useGSAP(() => {
        const container = containerRef.current;

        const parallaxIt = (target, movement) => {
            const rect = rectRef.current;
            TweenLite.to(target, 0.5, {
                x: (mouseRef.current.x - rect.width / 2) / rect.width * movement
            });
        };

        const ticker = () => {
            if (mouseRef.current.moved) {
                parallaxIt(".bg-mnts", 0);
                parallaxIt(".xl-mnts", -20);
                parallaxIt(".lg-mnts", -30);
                parallaxIt(".ship-mnts", -60);
                parallaxIt(".sm-mnts", -80);
            }
            mouseRef.current.moved = false;
            requestAnimationFrame(ticker);
        };

        ticker();
    }, { scope: containerRef });

    return (
        <div className="hero-section">
            <div className="clouds z-10">
                <div className="clouds-1" />
                <div className="clouds-2" />
                <div className="clouds-3" />
            </div>
            <div ref={containerRef} className='animated-bg w-full h-screen overflow-hidden relative grid place-items-center z-0'>
                <div
                    className='absolute inset-0 bg-mnts'
                    style={{
                        backgroundImage: `url(src/assets/landing/background.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        transform: 'translateZ(0)', // Ensure hardware acceleration for smoother performance
                    }}
                />
                <div
                    className='absolute inset-0 xl-mnts'
                    style={{
                        backgroundImage: `url(src/assets/landing/xl_mountain.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        transform: 'translateZ(0)', // Ensure hardware acceleration for smoother performance
                    }}
                />
                <div
                    className='absolute inset-0 lg-mnts'
                    style={{
                        backgroundImage: `url(src/assets/landing/lg_mountain.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        transform: 'translateZ(0)', // Ensure hardware acceleration for smoother performance
                    }}
                />
                <div
                    className='absolute inset-0 ship-mnts'
                    style={{
                        backgroundImage: `url(src/assets/landing/ship.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        transform: 'translateZ(0)', // Ensure hardware acceleration for smoother performance
                    }}
                />
                <div
                    className='absolute inset-0 sm-mnts'
                    style={{
                        backgroundImage: `url(src/assets/landing/sm_mountain.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        transform: 'translateZ(0)', // Ensure hardware acceleration for smoother performance
                    }}
                />
                <div className='content-section absolute inset-0 z-10 text-white'>
                    asfasfasfasf
                </div>
            </div>
        </div>
    );
}

export default Main3;
