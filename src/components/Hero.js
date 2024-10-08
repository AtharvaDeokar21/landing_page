// src/components/Hero.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import images directly
import logo from '../images/logo.png';
import farmerImage from '../images/farmer.jpg';
import govtImage from '../images/govt.png';
import companyImage from '../images/company.jpg';

function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#1B263B] text-[#C2CAAA] pt-16 flex">
      {/* Logo Section */}
      <div className="w-1/3 bg-[#0D1B2A] flex flex-col items-center justify-center p-10 relative">
        {/* Apply the clipPath to create the cut-off effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0D1B2A] rounded-br-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%)' }}></div>
        <div className="relative z-10 flex flex-col items-center justify-center p-10">
          <img src={logo} alt="Logo" className="w-32 h-32 rounded-full mb-4" />
          <p className="text-lg text-white text-center">Empowering Farmers with Secure Contract Farming</p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-2/3 relative flex items-center justify-center">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="swiper-container"
        >
          {/* Farmer Card */}
          <SwiperSlide>
            <div className="bg-[#C2CAAA] w-80 h-72 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={farmerImage} alt="Farmers" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-black text-center">Farmers</h3>
              <p className="text-center mt-2 text-black text-sm">Access better market opportunities and secure income through our platform.</p>
              <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">Explore</button>
            </div>
          </SwiperSlide>
          
          {/* Government Card */}
          <SwiperSlide>
            <div className="bg-[#C2CAAA] w-80 h-72 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={govtImage} alt="Government" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-black text-center">Government</h3>
              <p className="text-center mt-2 text-black text-sm">Facilitate and monitor contract farming agreements efficiently.</p>
              <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">Explore</button>
            </div>
          </SwiperSlide>

          {/* Companies Card */}
          <SwiperSlide>
            <div className="bg-[#C2CAAA] w-80 h-72 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={companyImage} alt="Companies" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-black text-center">Companies</h3>
              <p className="text-center mt-2 text-black text-sm">Secure contracts with farmers for consistent and quality crop supplies.</p>
              <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">Explore</button>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
          <div className="swiper-button-prev bg-[#4E6762] text-white p-2 rounded-full">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next bg-[#4E6762] text-white p-2 rounded-full">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
