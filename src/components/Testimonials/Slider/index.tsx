import React from "react";
import { testimonials } from "../../../assets/data/testimonials";
import Slider from "react-slick";
import { useTestimonials } from "../../../contexts/testimonials";
const { entries } = testimonials;

const TestimonialsSlider = () => {
    const { setCurrentSlide } = useTestimonials();
    const sliderConfig = {
        arrows: false,
        fade: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipe:true,
        afterChange: (index: number) => {
            setCurrentSlide(index);
        }
      };

  return (
    <div className="w-full flex justify-center items-center">
        <div className="slider-container">
            <Slider {...sliderConfig}>
        {entries.map((entry) => {
            const { name, text, position } = entry;
            return (
                <div key={name} className="slider-item">                
                    <p className="text-body-md text-base-1000">{text}</p>
                    <div className="block w-full mt-8">
                        {name}, <span className="text-base-600">{position}</span>
                    </div>
                </div>
            )
            })}
        </Slider>
        </div>
    </div>
  );
};

export default TestimonialsSlider;