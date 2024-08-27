import React from 'react';

function About() {
  return (
    <section id="about" className="min-h-screen bg-[#1B263B] text-[#C2CAAA] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About कृषिNet</h2>

        {/* Overview Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-[#C2CAAA]">
            कृषिNet is committed to empowering farmers by providing a blockchain-based marketplace that ensures a stable market, transparency, and secure income by eliminating middlemen. Our mission is to create a decentralized platform that brings together farmers and large-scale buyers directly, ensuring fair pricing and protecting farmers from market exploitation.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose कृषिNet?</h3>
            <ul className="list-disc list-inside text-[#C2CAAA]">
              <li className="mb-2">
                <strong>Transparent Pricing:</strong> Blockchain ensures that all transactions are transparent, giving farmers and buyers complete visibility over the pricing.
              </li>
              <li className="mb-2">
                <strong>Secure Income:</strong> Our platform locks in payments through smart contracts, ensuring that farmers receive their due payments without delay.
              </li>
              <li className="mb-2">
                <strong>Empowerment for Small Farmers:</strong> With partial contracts, small farmers can compete with larger producers, gaining better market access.
              </li>
              <li className="mb-2">
                <strong>Direct Market Access:</strong> Eliminate middlemen and connect directly with large-scale buyers, ensuring fair deals.
              </li>
              <li className="mb-2">
                <strong>Regulatory Compliance:</strong> Integrated with existing government structures for dispute resolution and insurance, ensuring smooth operations.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-[#C2CAAA]">
              We envision a future where every farmer, regardless of scale, has direct access to markets, secure income, and a stable economic environment. By leveraging blockchain technology, कृषिNet aims to revolutionize the agricultural sector, making it more efficient, transparent, and fair for everyone involved. We believe that by removing barriers, we can create a more sustainable and prosperous future for farmers across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
