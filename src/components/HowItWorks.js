import React from 'react';

function HowItWorks() {
  return (
    <section id="how-it-works" className="min-h-screen bg-[#1B263B] text-[#C2CAAA] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">How It Works</h2>

        {/* Step-by-step process */}
        <div className="space-y-12"> 
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"> 
            <div className="text-3xl font-bold text-white md:w-1/6 md:text-right md:pr-4"> 
              Step 1:
            </div>
            <div className="md:w-5/6">
              <h3 className="text-2xl font-bold text-white mb-2">Registration</h3>
              <p>
                Farmers and buyers register on the <strong>कृषिNet</strong> platform. Farmers provide their personal information and details about their crops. Buyers sign up with their business credentials and purchasing requirements.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"> 
            <div className="text-3xl font-bold text-white md:w-1/6 md:text-right md:pr-4">
              Step 2:
            </div>
            <div className="md:w-5/6">
              <h3 className="text-2xl font-bold text-white mb-2">Explore and Bid on Contracts</h3>
              <p>
                Farmers can browse through available contracts offered by buyers and government agencies. They can bid on these contracts, specifying their price and terms. Buyers can also post new contracts detailing their requirements.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"> 
            <div className="text-3xl font-bold text-white md:w-1/6 md:text-right md:pr-4">
              Step 3:
            </div>
            <div className="md:w-5/6">
              <h3 className="text-2xl font-bold text-white mb-2">Smart Contract Formation</h3>
              <p>
                Once a contract is agreed upon, a smart contract is automatically generated on the blockchain. This contract includes all the terms and conditions, ensuring that both parties are committed and protected.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"> {/* Added space-x-8 */}
            <div className="text-3xl font-bold text-white md:w-1/6 md:text-right md:pr-4">
              Step 4:
            </div>
            <div className="md:w-5/6">
              <h3 className="text-2xl font-bold text-white mb-2">Monitoring and Progress Tracking</h3>
              <p>
                Both farmers and buyers can track the progress of the contract through real-time updates on the platform. This includes updates on crop growth, harvesting status, and shipping timelines, providing transparency throughout the process.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"> 
            <div className="text-3xl font-bold text-white md:w-1/6 md:text-right md:pr-4"> 
              Step 5:
            </div>
            <div className="md:w-5/6">
              <h3 className="text-2xl font-bold text-white mb-2">Secure Payment</h3>
              <p>
                After successful delivery and inspection of the crops, payments are released automatically via the smart contract. This ensures that farmers receive timely and secure payments, reducing the risk of delayed or non-payments.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"> 
            <div className="text-3xl font-bold text-white md:w-1/6 md:text-right md:pr-4"> 
              Step 6:
            </div>
            <div className="md:w-5/6">
              <h3 className="text-2xl font-bold text-white mb-2">Feedback and Review</h3>
              <p>
                Farmers and buyers can leave feedback and reviews about their experience. This feedback helps improve the platform and builds trust within the <strong>कृषिNet</strong> community by showcasing reliable partners.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
