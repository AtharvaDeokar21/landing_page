import React from 'react';
// Replace the paths below with the actual paths to your selected images
import stableMarketImage from '../images/feature1.png';
import partialContractImage from '../images/feature2.png';
import regulatoryIntegrationImage from '../images/feature3.png';

function Features() {
  return (
    <section id="features" className="min-h-screen bg-[#1B263B] text-[#C2CAAA] py-16">
      <div className="container mx-auto">
      <div className="h-[80px] bg-[#0D1B2A] flex items-center justify-center ">
        <h2 className="text-4xl font-bold text-center  bg-[#0D1B2A] text-white ">Key Features</h2>
      </div>

        {/* Feature 1: Stable Market & Transparent Pricing */}
        <div className="flex flex-col md:flex-row pt-10 px-10 items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 px-4">
            <img src={stableMarketImage} alt="Stable Market" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 px-4">
            <h3 className="text-2xl font-bold text-white mb-4">Stable Market & Transparent Pricing</h3>
            <p className="text-[#C2CAAA]">
              A blockchain-based system ensuring stable markets and transparent pricing by eliminating middlemen and reducing exploitation. This feature empowers farmers by providing a stable income and protecting them from market volatility.
            </p>
          </div>
        </div>

        {/* Feature 2: Partial Contracts for Small Farmers */}
        <div className="flex flex-col md:flex-row-reverse px-10 items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 px-4">
            <img src={partialContractImage} alt="Partial Contracts" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 px-4">
            <h3 className="text-2xl font-bold text-white mb-4">Partial Contracts for Small Farmers</h3>
            <p className="text-[#C2CAAA]">
              Allows small farmers to engage effectively in the market by participating in partial contracts, competing with larger producers. This feature provides an inclusive platform for farmers of all scales to benefit from assured contracts.
            </p>
          </div>
        </div>

        {/* Feature 3: Integrated with Regulatory Entities */}
        <div className="flex flex-col md:flex-row px-10 items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 px-4">
            <img src={regulatoryIntegrationImage} alt="Regulatory Integration" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 px-4">
            <h3 className="text-2xl font-bold text-white mb-4">Integrated with Regulatory Entities</h3>
            <p className="text-[#C2CAAA]">
              Seamlessly integrates with existing government structures for dispute resolution and disaster insurance, enhancing operational efficiency. This feature ensures compliance with regulations while streamlining administrative tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
