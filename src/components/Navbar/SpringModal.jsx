import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import Link from "./Link";
import SpLink from "./SpLink";
import image1 from "../../assets/wtf.png";
import image2 from "../../assets/nav/timeline.jpeg";
import image3 from "../../assets/nav/events.webp";
import image4 from "../../assets/nav/teams.webp";

const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur md:pt-0 md:p-8 pt-40 fixed inset-0 z-40 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={() => setIsOpen(false)}
                        className="bg-transparent from-violet-600 to-indigo-600 text-white md:p-6 rounded-lg w-full shadow-xl cursor-default relative h-full"
                    >
                        <div className="relative z-10">
                            <section className="p-4 md:p-8">
                                <div className="mx-auto max-w-5xl">
                                    <Link
                                        heading="Home"
                                        subheading="Because scrolling is overrated."
                                        imgSrc={image1}
                                        href="locate-landing"
                                        isOpen={isOpen} setIsOpen={setIsOpen}
                                    />
                                    <Link
                                        heading="Timeline"
                                        subheading="Trace our journey."
                                        imgSrc={image2}
                                        href="locate-timeline"
                                        isOpen={isOpen} setIsOpen={setIsOpen}
                                    />
                                    <Link
                                        heading="Events"
                                        subheading="Discover upcoming activities."
                                        imgSrc={image3}
                                        href="locate-events"
                                        isOpen={isOpen} setIsOpen={setIsOpen}
                                    />
                                    <SpLink
                                        heading="Teams"
                                        subheading="Meet our dedicated members."
                                        imgSrc={image4}
                                        href="https://ieeejuit.co.in/team"
                                        isOpen={isOpen} setIsOpen={setIsOpen}
                                    />
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};



export default SpringModal