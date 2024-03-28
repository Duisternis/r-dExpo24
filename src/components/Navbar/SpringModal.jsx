import { motion, AnimatePresence } from "framer-motion";
import React from "react";

import Link from "./Link";
import image1 from "../../assets/wtf.png";

const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-40 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-transparent from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full shadow-xl cursor-default relative h-full"
                    >
                        <div className="relative z-10">
                            <section className="p-4 md:p-8">
                                <div className="mx-auto max-w-5xl">
                                    <Link
                                        heading="Home"
                                        subheading="Because scrolling is overrated."
                                        imgSrc={image1}
                                        href="#"
                                    />
                                    <Link
                                        heading="Timeline"
                                        subheading="Trace our journey."
                                        imgSrc={image1}
                                        href="#"
                                    />
                                    <Link
                                        heading="Events"
                                        subheading="Discover upcoming activities."
                                        imgSrc={image1}
                                        href="#"
                                    />
                                    <Link
                                        heading="Teams"
                                        subheading="Meet our dedicated members."
                                        imgSrc={image1}
                                        href="#"
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