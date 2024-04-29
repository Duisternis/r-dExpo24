import React, { useState } from "react";

import DragCloseDrawer from "./DragCloseDrawer";
import Content from "./Content";
import treasure from "../../assets/treasure.svg";

const DragCloseDrawerExample = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <button
                onClick={() => setOpen(true)}
                className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
            >
                Open drawer
            </button>

            <DragCloseDrawer open={open} setOpen={setOpen}>
                <div className="mx-auto max-w-4xl space-y-4 text-neutral-400">
                    <img src={treasure} className="absolute -z-10 top-0 -left-24 w-[40rem]" />
                    <Content content={props.content} />
                </div>
            </DragCloseDrawer>
        </div>
    );
};


export default DragCloseDrawerExample;