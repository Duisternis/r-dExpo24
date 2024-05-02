import Slider from 'react-infinite-logo-slider'

import logo from "../../assets/ieee_main.png"
import './scrolls.css'

function LogoCarousel() {

    const n = 5; // Number of times to repeat the section

    // Create an array of size n filled with any value (null in this case)
    const repeatedSections = Array.from({ length: n }, (_, index) => (
        <Slider.Slide>
            <img src={`/src/assets/sponsers/${index + 1}.png`} alt={index} className='w-36' />
        </Slider.Slide>
    ));

    return (
        <div className='pb-64 md:w-[90%] m-auto'>
            <Slider
                width="250px"
                duration={20}
                pauseOnHover={false}
                blurBorders={true}
                blurBoderColor={'#121212'}
            >
                {repeatedSections}
            </Slider>
        </div >
    );
}

export default LogoCarousel;
