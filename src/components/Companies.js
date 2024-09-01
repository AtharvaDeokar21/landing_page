// src/components/Companies.js

import React from 'react';
import profitImage from '../images/profit.png';
import apiIntegrationImage from '../images/api.png';
import convenienceImage from '../images/convenience.png';
import directSourcingImage from '../images/direct-sourcing.png';

function Companies() {
  const features = [
    {
      id: 'enhanced-profit-margins', // Unique ID for navigation
      title: 'Enhanced Profit Margins',
      description:
        'कृषिNet empowers companies to increase their profit margins by streamlining procurement processes, reducing unnecessary costs, and connecting directly with farmers for better pricing and quality.',
      image: profitImage,
    },
    {
      id: 'direct-farm-sourcing', // Unique ID for navigation
      title: 'Direct Farm-to-Business Sourcing',
      description:
        'Eliminate the middlemen and establish direct relationships with farmers. This feature ensures transparency, traceability, and higher quality standards, benefiting both companies and farmers.',
      image: directSourcingImage,
    },
    {
      id: 'trusted-api-integration', // Unique ID for navigation
      title: 'Seamless Integration with Trusted APIs',
      description:
        'Our platform provides easy integration with third-party APIs, offering valuable insights and analytics to support data-driven decisions. This helps companies stay ahead of market trends and make informed choices.',
      image: apiIntegrationImage,
    },
    {
      id: 'streamlined-operations', // Unique ID for navigation
      title: 'Streamlined Operations',
      description:
        'Experience a hassle-free process from procurement to delivery. कृषिNet simplifies operational workflows, enhancing efficiency and allowing companies to focus on their core business activities.',
      image: convenienceImage,
    },
  ];

  return (
    <section id="companies" className="bg-[#1B263B] text-[#C2CAAA] py-16">
      <div className="max-w-7xl mx-auto">
        <div className="h-[80px] bg-[#0D1B2A] flex items-center justify-center ">
          <h2 className="text-4xl font-bold text-center bg-[#0D1B2A] text-white">Why Companies Should Choose कृषिNet</h2>
        </div>
        {features.map((feature, index) => (
          <div
            key={index}
            id={feature.id} // Assign unique ID for each feature
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[450px] h-[300px] object-cover rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Companies;
