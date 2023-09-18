import type { FC, PropsWithChildren } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import ArrowButton from './ArrowButton';

const defaultSettings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    draggable: true,
    pauseOnHover: true,
    swipe: true,
    autoplaySpeed: 5000,
    prevArrow: <ArrowButton position='left'/>,
    nextArrow: <ArrowButton position='right'/>,
    responsive: [
		{
			breakpoint: 1246,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  infinite: true,
			}
		  },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 640,        
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
            breakpoint: 280,        
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
      ]
};

interface Props {
    settings?: Settings;
}

const Slider: FC<PropsWithChildren<Props>> = ({ children, settings = defaultSettings }) => {

    return (
        <SlickSlider {...settings} className='relative '>
            {children}
        </SlickSlider>
    );
};

export default Slider;