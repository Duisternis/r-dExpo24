import Slider from 'react-infinite-logo-slider'

import logo from "../../assets/ieee_main.png"
import './scrolls.css'

import s1 from '../../assets/sponsers/1.png';
import s2 from '../../assets/sponsers/2.png';
import s3 from '../../assets/sponsers/3.png';
import s4 from '../../assets/sponsers/4.png';
import s5 from '../../assets/sponsers/5.png';


function LogoCarousel() {

    const n = 5; // Number of times to repeat the section

    const sps = [s1, s2, s3, s4, s5];

    // Create an array of size n filled with any value (null in this case)
    const repeatedSections = Array.from({ length: n }, (_, index) => (
        <Slider.Slide>
            <img src={sps[index]} alt={index} className='w-36' />
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
