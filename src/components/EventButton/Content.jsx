import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { twMerge } from "tailwind-merge";

import DummyImage from "../../assets/dummyEvnt.webp";
import "./paper-header.css";
import "./custom-letter.css"

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const RevealBento = (props) => {
    return (
        <div className="min-h-screen px-4 py-4 text-zinc-50">
            <Logo title={props.content.title} />
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid grid-flow-dense grid-cols-12 gap-4 justify-center items-center"
            >
                <HeaderBlock rlink={props.content.registration_form} />
                <SocialsBlock content={props.content} />
                <AboutBlock desc={props.content.description} />
            </motion.div>
        </div>
    );
};

const Block = ({ className, ...rest }) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "col-span-4",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = (props) => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <div className="flex items-center justify-center">
            <TiltCard />
            <ButtonWrapper rlink={props.rlink} />
        </div>
    </Block>
);

const SocialsBlock = (props) => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="c-letter col-span-6 md:col-span-3 h-48"
        >
            <div className="grid h-full place-content-center gap-y-4 text-center text-lg text-black">
                <div className="text-3xl font-bold text-amber-700">Timings</div>
                <div>
                    {props.content.date}
                    <br />
                    {props.content.timing}
                </div>
            </div>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="c-letter col-span-6 md:col-span-3 h-48"
        >
            <div className="grid h-full place-content-center gap-y-4 text-center text-lg text-black">
                <div className="text-3xl font-bold text-blue-400">Venue</div>
                <div>{props.content.venue}</div>
            </div>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="c-letter col-span-6 md:col-span-3 h-48"
        >
            <div className="grid h-full place-content-center gap-y-4 text-center text-lg text-black">
                <div className="text-3xl font-bold text-red-700">Fee</div>
                <div>{props.content.fee}</div>
            </div>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="c-letter col-span-6 md:col-span-3 h-48"
        >
            <div className="grid h-full place-content-center gap-y-4 text-center text-lg text-black">
                <div className="text-3xl font-bold text-green-700">Prizes</div>
                <div>{props.content.prize}</div>
            </div>
        </Block>
    </>
);

const AboutBlock = (props) => (
    <Block className="col-span-12 leading-snug py-10">
        <p>
            <h2 className="text-red-800 font-bold text-5xl pb-8"> Description </h2>
            <p className="text-black text-lg">
                {props.desc}
            </p>
        </p>
    </Block>
);

const Logo = (props) => {
    // Temp logo from https://logoipsum.com/
    return (
        <div className="ml-auto mr-0 mb-12 text-black w-fit">
            <div class="paper pink">
                <div class="tape-section"></div>
                <p> {props.title} </p>
                <div class="tape-section"></div>
            </div>
        </div>
    );
};

const TiltCard = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative grow h-96 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                    backgroundImage: `url(${DummyImage})`,
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-cover bg-center shadow-lg"
            >
            </div>
        </motion.div>
    );
};

const ButtonWrapper = (props) => {
    return (
        <div className="flex relative items-center justify-center -rotate-90 w-32">
            <button className="absolute rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black text-xl transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none w-96 h-24">
                REGISTRATION LINK
            </button>
        </div>
    );
};

export default RevealBento;