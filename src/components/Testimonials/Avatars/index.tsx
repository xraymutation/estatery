import React from "react";
import { useTestimonials } from "../../../contexts/testimonials";
import { testimonials } from "../../../assets/data/testimonials";


const Avatars = () => {
    const { currentSlide } = useTestimonials();
    return (
        <div className="flex gap-9">
            {testimonials.entries.map((entry, index) => (
                <div key={entry.name} className={`flex relative items-center justify-center p-2 bg-white border-[3px] border-solid rounded-full ${index === currentSlide ? 'border-text-accent' : 'border-transparent'}`}>
                    <img src={entry.img} alt={entry.name} width={60} height={60} className="absolute z-30 rounded-full w-[70px] h-[70px]  top-0 left-0 right-0 mt-[10px] mx-auto " />
                    <div className={`block w-[72px] h-[72px] box-content rounded-full`}/>
                    <div className={`block absolute z-20 w-[72px] h-[72px] box-content rounded-full ${index === currentSlide ? 'bg-secondary-400' : 'bg-base-300'}`}/>
                    {index === currentSlide && <div className="absolute z-10 w-[47px] h-[47px] bg-white bottom-[-3px] left-[-3px] origin-top-right animate-[rotate-180_0.3s_ease-in-out]"/>}
                    

                </div>
                
            ))}
        </div>
    )
}

export default Avatars;