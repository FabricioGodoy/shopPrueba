import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SliderStyle.css"


export const Slider = () => {

  return <div className='SliderHome'>
      <UncontrolledCarousel
  items={[
    /* {
      altText: 'Slide 1',
      caption: '',
      key: 1,
      src: 'https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/slider/slider1.webp'
    }, */
    {
      altText: 'Slide 2',
      caption: '',
      key: 2,
      src: 'https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/slider/slider2.webp'
    },
    {
      altText: 'Slide 3',
      caption: '',
      key: 3,
      src: 'https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/slider/slider3.webp'
    },
    {
      altText: 'Slide 4',
      caption: '',
      key: 4,
      src: 'https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/slider/slider4.webp'
    },
    {
      altText: 'Slide 5',
      caption: '',
      key: 5,
      src: 'https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/slider/slider5.webp'
    }
  ]}
 />
  </div>;
};
