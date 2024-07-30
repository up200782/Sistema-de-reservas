import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './CardSlider.css';

const CardSlider = (props) => {
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    // Verificar si props.slides existe y es un array
    const slides = Array.isArray(props.slides) ? props.slides : [];

    return (
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
            <div id="slider">
                { 
                    slides.map((slide, index) => {
                        return (
                            <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                                <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
        </div>
    )
}

export default CardSlider;
