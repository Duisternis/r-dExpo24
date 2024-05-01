import Slider from 'react-infinite-logo-slider'

import logo from "../../assets/ieee_main.png"
import './scrolls.css'

function LogoCarousel() {

    return (
        <div className='pb-64 md:w-[90%] m-auto'>
            <Slider
                width="250px"
                duration={20}
                pauseOnHover={true}
                blurBorders={true}
                blurBoderColor={'#121212'}
            >
                <Slider.Slide>
                    <img src={logo} alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo} alt="any2" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo} alt="any3" className='w-36' />
                </Slider.Slide>
            </Slider>
        </div >
    );
}

export default LogoCarousel;
