// src/components/OurProducts.js

import React from 'react';
import farmerAppImage from '../images/farmer.jpg';
import wholesalerAppImage from '../images/wholesaler.png';
import industryWebsiteImage from '../images/company.jpg';
import governmentWebsiteImage from '../images/government.png';

function OurProducts() {
  const products = [
    {
      title: 'Farmer App',
      description:
        'A dedicated app for farmers to easily check and apply for various requirements listed by companies and government entities. It provides a user-friendly interface tailored to the needs of the farming community.',
      image: farmerAppImage,
    },
    {
      title: 'Wholesaler App',
      description:
        'This app enables wholesalers to manage their orders, connect with farmers directly, and streamline their logistics operations. It helps improve supply chain efficiency and provides real-time updates on product availability.',
      image: wholesalerAppImage,
    },
    {
      title: 'Industry Dashboard',
      description:
        'A comprehensive dashboard for industries to list their requirements, view detailed farmer profiles, and track contract statuses. This platform enhances transparency and facilitates seamless interactions between companies and farmers.',
      image: industryWebsiteImage,
    },
    {
      title: 'Government Portal',
      description:
        'Provides an overview of all contracts and ongoing initiatives. It includes detailed insights into contract statuses and allows government officials to monitor and evaluate the impact of various farming schemes.',
      image: governmentWebsiteImage,
    },
  ];

  return (
    <section id="our-products" className="bg-[#1B263B] text-[#C2CAAA] py-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="h-[80px] bg-[#0D1B2A] flex items-center justify-center mb-4">
          <h2 className="text-4xl font-bold text-center bg-[#0D1B2A] text-white">Our Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
          {products.map((product, index) => (
            <div key={index} className="bg-[#0D1B2A] rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
