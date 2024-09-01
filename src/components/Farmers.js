// src/components/Farmers.js

import React from 'react';
import partialContractImage from '../images/contract.png';
import multiLanguageImage from '../images/language.png';
import stableIncomeImage from '../images/stableincome.png';
import contractExplainerImage from '../images/readaloud.png';

function Farmers() {
  const features = [
    {
      id: 'flexible-contract-options', // Unique ID for navigation
      title: 'Flexible Contract Options',
      description:
        'कृषिNet offers farmers the ability to engage in flexible, partial contracts that allow phased deliveries and payments. This feature provides security and adaptability to meet individual farming needs.',
      image: partialContractImage,
    },
    {
      id: 'multi-language-accessibility', // Unique ID for navigation
      title: 'Multi-language Accessibility',
      description:
        'Our platform supports multiple languages, ensuring that farmers from different regions can easily navigate and use कृषिNet. This enhances communication and accessibility, breaking language barriers.',
      image: multiLanguageImage,
    },
    {
      id: 'guaranteed-stable-income', // Unique ID for navigation
      title: 'Guaranteed Stable Income',
      description:
        'कृषिNet helps secure consistent and stable income by connecting farmers with trusted buyers through assured contracts. This feature minimizes the risks associated with fluctuating market prices.',
      image: stableIncomeImage,
    },
    {
      id: 'easy-to-understand-contracts', // Unique ID for navigation
      title: 'Easy-to-Understand Contracts',
      description:
        'To make contract details clearer, कृषिNet offers a feature that reads out contract terms in simple language. This helps farmers understand their agreements without any confusion.',
      image: contractExplainerImage,
    },
  ];

  return (
    <section id="farmers" className="bg-[#1B263B] text-[#C2CAAA] py-16">
      <div className="max-w-7xl mx-auto">
        <div className="h-[80px] bg-[#0D1B2A] flex items-center justify-center ">
            <h2 className="text-4xl font-bold text-center  bg-[#0D1B2A] text-white ">Why Farmers Should Choose कृषिNet</h2>
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
                className="w-full h-full object-cover rounded-lg shadow-lg"
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

export default Farmers;
