// Preloader.js

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './Preloader'

const Wrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000); // Change the time according to your needs

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (

                <motion.div
                    className="fixed top-0 left-0 w-full h-full flex bg-black z-[100]"
                    initial={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.5 }}
                >
                    <Preloader />
                </motion.div>

            )}
        </AnimatePresence>
    );
};

export default Wrapper;
