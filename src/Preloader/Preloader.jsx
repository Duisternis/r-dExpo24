import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip"

import './styles.css'

const Preloader = () => {

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(Flip);

    const container = useRef();

    useGSAP(() => {
        let layouts = ["plain", "columns", "final"],
            container = document.querySelector(".container"),
            curLayout = 0,  // index of the current layout
            totalLayouts = layouts.length;

        function nextState() {
            if (curLayout === totalLayouts - 1) return;

            const state = Flip.getState(".letter, .for, .gsap", { props: "color,backgroundColor", simple: true }); // capture current state

            container.classList.remove(layouts[curLayout]); // remove old class
            curLayout = curLayout + 1;   // increment (loop back to the start if at the end)
            container.classList.add(layouts[curLayout]);    // add the new class

            Flip.from(state, { // animate from the previous state
                absolute: true,
                stagger: 0.07,
                duration: 0.7,
                ease: "power2.inOut",
                spin: curLayout === 0, // only spin when going to the "final" layout
                simple: true,
                onEnter: (elements, animation) => gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, delay: animation.duration() - 0.1 }),
                onLeave: elements => gsap.to(elements, { opacity: 0 })
            });

            gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
        }

        gsap.delayedCall(1, nextState);
    }, { scope: container });

    return (
        <div ref={container} className="fixed top-0 h-[100vh] w-[100%]">
            <div className=" container plain">
                <div className="letter F text-7xl">I</div>
                <div className="letter l text-7xl">E</div>
                <div className="letter i text-7xl">E</div>
                <div className="letter p text-7xl">E</div>
                <div className="text-span">
                    <div className="for text-4xl">JUIT SB</div>
                    <div className="gsap text-xl">Presents</div>
                </div>
            </div>
        </div>
    )
}

export default Preloader