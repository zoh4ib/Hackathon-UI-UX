import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; 

function CustomArrows() {
  return (
    <div className="slider-container">
      
      <Swiper
        spaceBetween={50} 
        slidesPerView={3} 
        navigation 
        pagination={{ clickable: true }} 
      >
      
        <SwiperSlide>
          <h3>
            <Image 
              src={'/shoes.png'} 
              alt="shoes" 
              width={200} 
              height={200} 
            />
          </h3>
        </SwiperSlide>
        
        
        <SwiperSlide>
          <h3>2</h3>
        </SwiperSlide>

     
        <SwiperSlide>
          <h3>3</h3>
        </SwiperSlide>

        
        <SwiperSlide>
          <h3>4</h3>
        </SwiperSlide>

       
        <SwiperSlide>
          <h3>5</h3>
        </SwiperSlide>

       
        <SwiperSlide>
          <h3>6</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomArrows;
