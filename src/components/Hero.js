// src/components/Hero.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import logo from '../images/logo.png';
import blockchainImage from '../images/blockchain.png';
import apiImage from '../images/api.png';
import partialContractsImage from '../images/contract.png';
import multiLanguageImage from '../images/language.png';
import contractExplainerImage from '../images/readaloud.png';

function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#1B263B] text-[#C2CAAA] pt-16 flex">
      {/* Logo Section */}
      <div
        className="relative flex flex-col items-center justify-center p-10"
        style={{
          width: '25vw',
          height: '100vh',
          backgroundColor: '#0D1B2A',
          clipPath: 'ellipse(100% 50% at 0% 50%)',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center pt-10">
          <img src={logo} alt="Logo" className="w-32 h-32 rounded-full mb-4" />
          <p className="text-lg text-white text-center">Empowering Farmers with</p>
          <p className="text-lg text-white text-center">Secure Contract Farming</p>
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
          {/* Blockchain Card */}
          <SwiperSlide>
            <div className="bg-[#C2CAAA] w-80 h-72 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={blockchainImage} alt="Blockchain" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-black text-center">Blockchain Technology</h3>
              <p className="text-center mt-2 text-black text-sm">Ensure secure and transparent transactions with blockchain technology.</p>
              <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">
                <a href="">Know more</a>
              </button>
            </div>
          </SwiperSlide>

          {/* Third-Party APIs Card */}
          <SwiperSlide>
            <div className="bg-[#C2CAAA] w-80 h-72 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={apiImage} alt="Third-Party APIs" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-black text-center">Third-Party API Integration</h3>
              <p className="text-center mt-2 text-black text-sm">Leverage data from trusted sources for better decision-making.</p>
              <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">
                <a href="#trusted-api-integration">Explore</a>
              </button>
            </div>
          </SwiperSlide>

          {/* Partial Contracts Card */}
          <SwiperSlide>
            <div className="bg-[#C2CAAA] w-80 h-72 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={partialContractsImage} alt="Partial Contracts" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-black text-center">Flexible Contract Options</h3>
              <p className="text-center mt-2 text-black text-sm">Engage in partial contracts for better control and security.</p>
              <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">
                <a href="#flexible-contract-options">Explore</a>
              </button>
            </div>
          </SwiperSlide>

          {/* Multi-language Support Card */}
          <SwiperSlide>
            <div className="bg-[#C2CAAA] w-80 h-72 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={multiLanguageImage} alt="Multi-language Support" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-black text-center">Multi-language Support</h3>
              <p className="text-center mt-2 text-black text-sm">Navigate the platform in your preferred language.</p>
              <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">
                <a href="#multi-language-accessibility">Explore</a>
              </button>
            </div>
          </SwiperSlide>

          {/* Contract Explainer Card */}
          <SwiperSlide>
            <div className="bg-[#C2CAAA] w-80 h-72 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={contractExplainerImage} alt="Contract Explainer" className="w-24 h-24 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-black text-center">Contract Explainer</h3>
              <p className="text-center mt-2 text-black text-sm">Understand contract details in simple language.</p>
              <button className="bg-[#4E6762] text-white px-4 py-2 rounded mt-4">
                <a href="#easy-to-understand-contracts">Explore</a>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
