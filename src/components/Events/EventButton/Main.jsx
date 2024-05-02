import React, { useState } from "react";

import DragCloseDrawer from "./DragCloseDrawer";
import InfoIcon from '@mui/icons-material/Info';
import Content from "./Content";


const Main = (props) => {
    const [open, setOpen] = useState(false);

    const open_handler = () => {
        setOpen(true);
        props.toggler(true);
        props.setContent(props.content);
    }

    return (
        <div className="">
            <button
                onClick={open_handler}
                className="rounded bg-[#5D532F] px-2 py-2 text-white transition-colors hover:bg-[#000]"
            >
                <InfoIcon />
            </button>
        </div>
    );
};


export default Main;