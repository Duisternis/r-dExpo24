import React from 'react'

import EventButton from '../EventButton/Main'
import imported_content from '../../content/cEvents'
import image from './dummyEvnt.webp'
import './styles.css'

const Main = () => {
    return (
        <div className="h-[200vh]">
            These are the events HOLALLLALA

            <img src={image} alt="something" className='w-[300px] imageMask' />
            <EventButton content={imported_content[1]} />
            <EventButton content={imported_content[0]} />
        </div>

    )
}

export default Main

