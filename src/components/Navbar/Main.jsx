import React from 'react'
import { useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

import EncryptButton from './EncryptButton';
import AnimatedHamburgerButton from './AnimatedHamburgerButton';
import SpringModal from './SpringModal';


function Main() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="fixed top-10 right-36 z-50">
                <EncryptButton />
            </div>
            <div className="fixed top-4 right-10 z-50">
                <AnimatedHamburgerButton active={isOpen} setActive={setIsOpen} />
            </div>

            <img src="https://i.pinimg.com/originals/fe/ed/ef/feedefcf233050080c1abd8efc91a08f.jpg" className="bgimg fixed opacity-0 top-0 left-0 -z-50 w-screen h-screen" />

            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Main
