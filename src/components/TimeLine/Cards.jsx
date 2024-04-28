import React from 'react'
import Rd from '../../assets/R&dexpo.png';

const Cards = (props) => {
    return (
        <div className="flex rounded-lg shadow-secondary-1 text-surface bg-surface-dark text-white flex-row my-10 mx-auto w-3/4 h-48">
            <img
                className="rounded-s-lg hidden md:block"
                src={Rd}
                alt="" />
            <div className="flex flex-col justify-start md:p-6">
                <h5 className="mb-2 text-xl font-medium">{props.content.event}</h5>
                <p className="mb-4 text-[12px]">
                    <span className="text-[#90caf9]">Timings:</span> {props.content.start_time} - {props.content.end_time}<br />
                    <span className="text-[#90caf9]">Venue:</span> {props.content.location} <br />
                    <span className="text-[#90caf9]">Description:</span> {props.content.description} <br />
                </p>
                <p className="text-xs text-surface/75 dark:text-neutral-300">
                    {props.content.event}
                </p>
            </div>
        </div>
    )
}

export default Cards