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
    <section id="home" className="min-h-screen bg-[#1B263B] text-[#C2CAAA] pt-16 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo and Slogan Section */}
        <div className="flex-1 flex flex-col items-start justify-center bg-[#0D1B2A] p-10 rounded-lg">
          <img src={logo} alt="Logo" className="w-32 h-32 rounded-full mb-4" />
          <p className="text-lg text-white">Empowering Farmers with Secure Contract Farming</p>
        </div>

        {/* Swiper Carousel Section */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className="bg-[#C2CAAA] p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img src={farmerImage} alt="Farmers" className="w-32 h-32 object-cover rounded-full mb-4" />
                <h3 className="text-xl font-bold">Farmers</h3>
                <p className="text-center mt-2">Access better market opportunities and secure income through our platform.</p>
                <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">Explore</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#C2CAAA] p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img src={govtImage} alt="Government" className="w-32 h-32 object-cover rounded-full mb-4" />
                <h3 className="text-xl font-bold">Government</h3>
                <p className="text-center mt-2">Facilitate and monitor contract farming agreements efficiently.</p>
                <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">Explore</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#C2CAAA] p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img src={companyImage} alt="Companies" className="w-32 h-32 object-cover rounded-full mb-4" />
                <h3 className="text-xl font-bold">Companies</h3>
                <p className="text-center mt-2">Secure contracts with farmers for consistent and quality crop supplies.</p>
                <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">Explore</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Hero;
