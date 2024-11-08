'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickSlider.css'
import React, { useEffect, useRef } from "react";

const NextArrow = (props) => {
    const { className, style, onClick, index, extras } = props;

    const mergeClasses = `${className} ${extras}`;

    return (
        <div
            key={index}
            className={mergeClasses}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick, index, extras } = props;

    const mergeClasses = `${className} ${extras}`;

    return (
        <div
            key={index}
            className={mergeClasses}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

export const SlickSlider = ({ children, activeIndex, index, onSlideChange }) => {
    const sliderRef = useRef(null);

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
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
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
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
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
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
                }
            },
            {
                breakpoint: 768,
                settings: {
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    variableWidth: false,
                    dots: false,
                    arrows: false // Disable arrows for this breakpoint
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
                    dots: false,
                    swipe: false, // Disable swipe globally
                    draggable: false, // Disable drag globally
                    arrows: false // Disable arrows for this breakpoint
                }
            }
        ],
        beforeChange: (oldIndex, newIndex) => {
            if (onSlideChange) {
                onSlideChange(oldIndex, newIndex);  // Call the callback with previous and current indices
            }
        }
    };


    // Move to the activeIndex whenever it updates
    useEffect(() => {
        if (sliderRef.current && typeof activeIndex === 'number') {
            sliderRef.current.slickGoTo(activeIndex);
        }
    }, [activeIndex]);

    return (

        <Slider ref={sliderRef} className='w-full h-full' key={index} {...settings}>
            {children}
        </Slider>

    )
}

export const NewHomeSlider = ({ children, index, sliderRef, onSlideChange }) => {

    const newHomePageSettings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        variableWidth: false,
        nextArrow: <NextArrow extras="arrow-new-home !w-8 !h-8 !bg-transparent !border-2 !border-solid !text-black !rounded-full" />,
        prevArrow: <PrevArrow extras="arrow-new-home !w-8 !h-8 !bg-transparent !border-2 !border-solid !text-black !rounded-full" />,
        beforeChange: (oldIndex, newIndex) => {
            onSlideChange(oldIndex, newIndex); // Update active index when slide changes
        },
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    speed: 400,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    variableWidth: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    variableWidth: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    variableWidth: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    variableWidth: false,
                    dots: true,
                    arrows: false // Disable arrows for this breakpoint
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
                    dots: true,
                    arrows: false // Disable arrows for this breakpoint
                }
            }
        ]
    };

    return (

        <Slider className='w-full !flex justify-center  new-home-slider' key={index} ref={sliderRef} {...newHomePageSettings}>
            {children}
        </Slider>

    )
}