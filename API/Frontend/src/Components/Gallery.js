import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@mui/material';

const Gallery = () => {
  const settings = {
    dots: true, 
    infinite: true, //Carrusel infinito
    speed: 1500, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    '/assets/Img/hotel3.jpeg',
    '/assets/Img/hotel2.jpeg',
    '/assets/Img/hotel1.jpeg',
    '/assets/Img/hotel1.jpeg',
    '/assets/Img/hotel2.jpeg',
  ];

  return (
    <div style={{ margin: '0 auto', padding: '40px 0', maxWidth: '1200px' }}>
        <Typography variant="h4" gutterBottom>
        Galería
        </Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
