'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickSlider.css'
import React from "react";

const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (

        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        />

    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        />
    );
};

var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        }
    ]
};

export const SlickSlider = ({ children }) => {
    return (
    
            <Slider className='w-full' {...settings}>
                    {children}
            </Slider>
      
    )
}