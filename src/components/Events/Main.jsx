import React, { useState } from "react";

import EmblaCarousel from './js/EmblaCarousel'
import DragCloseDrawer from './EventButton/DragCloseDrawer'
import treasure from "../../assets/treasure.svg";
import Content from "./EventButton/Content"
import imported_content from '../../content/cEvents'
import d_image from "../../assets/dummyEvnt.webp"
import './css/base.css'
import './css/embla.css'

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

import './styles.css'

const Main = (props) => {

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(0);

    const setDrawerState = (state) => {
        setOpen(state);
    }

    return (
        <div>
            <EmblaCarousel images={props.images} slides={SLIDES} options={OPTIONS} toggler={setDrawerState} setContent={setContent} />
            {/* <EventButton content={imported_content[1]} /> */}
            <DragCloseDrawer open={open} setOpen={setOpen}>
                <div className="mx-auto max-w-4xl space-y-4 text-neutral-400">
                    <img src={treasure} className="absolute -z-10 top-0 -left-24 w-[40rem]" />
                    <Content content={imported_content.find(item => item.id === content)} d_image={props.images[content - 1]} />
                </div>
            </DragCloseDrawer>
        </div>

    )
}

export default Main

