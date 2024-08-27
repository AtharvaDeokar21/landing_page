import React from 'react';

import Polygon from '../images/Tech/Polygon.png'
import Solidity from '../images/Tech/Solidity.png'
import Nodejs from '../images/Tech/Nodejs.png'
import Reactjs from '../images/Tech/React.png'
import Expo from '../images/Tech/Expo.png'
import Smart_Contract from '../images/Tech/smart_contract.png'
import Evm from '../images/Tech/EVM.png'

function Technology() {
  return (
    <section id="technology" className="min-h-screen bg-[#1B263B] text-[#C2CAAA] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Technology Stack</h2>
        
        {/* Grid layout for technology details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Polygon Protocol */}
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <img src={Polygon} alt="Polygon Protocol" className="w-20 h-20 object-contain"/>
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">Polygon Protocol</h3>
              <p>
                Utilizing the Polygon Protocol ensures scalability and high-speed transactions for our platform. By leveraging Polygon, we achieve lower transaction costs and faster processing times, which are critical for real-time contract farming operations.
              </p>
            </div>
          </div>

          {/* EVM (Ethereum Virtual Machine) */}
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <img src={Evm} alt="EVM" className="w-20 h-20 object-contain"/>
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">EVM (Ethereum Virtual Machine)</h3>
              <p>
                The integration with EVM allows for the execution of smart contracts, providing a secure and efficient mechanism for handling agricultural contracts. EVM compatibility ensures that our smart contracts are robust, secure, and interoperable with other Ethereum-based systems.
              </p>
            </div>
          </div>

          {/* Polygon Mainnet */}
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <img src={Polygon} alt="Polygon Mainnet" className="w-20 h-20 object-contain"/>
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">Polygon Mainnet</h3>
              <p>
                Deploying our application on the Polygon Mainnet provides a secure and scalable environment, ensuring high availability and security for transactions. This network enables us to offer reliable and efficient contract farming services to farmers and buyers.
              </p>
            </div>
          </div>

          {/* Solidity */}
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <img src={Solidity} alt="Solidity" className="w-20 h-20 object-contain"/>
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">Solidity</h3>
              <p>
                Solidity is used for writing the smart contracts that power the `कृषिNet` platform. This programming language enables us to create secure, efficient, and scalable smart contracts that automate the processes within our marketplace, such as payment handling and contract execution.
              </p>
            </div>
          </div>

          {/* Smart Contracts */}
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <img src={Smart_Contract} alt="Smart Contracts" className="w-20 h-20 object-contain"/>
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">Smart Contracts</h3>
              <p>
                Smart contracts are the backbone of our platform, ensuring that all transactions are transparent, secure, and automated. They facilitate direct agreements between farmers and buyers, eliminating middlemen and reducing costs.
              </p>
            </div>
          </div>


          {/* Node.js */}
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <img src={Nodejs} alt="Node.js" className="w-20 h-20 object-contain"/>
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">Node.js</h3>
              <p>
                Node.js powers our backend services, providing a robust and scalable environment to handle user requests and process transactions efficiently. Its asynchronous nature ensures our application remains responsive under high load conditions.
              </p>
            </div>
          </div>

          {/* React */}
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <img src={Reactjs} alt="React" className="w-20 h-20 object-contain"/>
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">React</h3>
              <p>
                Our front-end interface is built using React, offering a seamless and intuitive user experience. React allows us to create dynamic, responsive components that facilitate real-time interaction, enhancing user engagement.
              </p>
            </div>
          </div>

          {/* Expo */}
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <img src={Expo} alt="Expo" className="w-20 h-20 object-contain"/>
            </div>
            <div className="w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">Expo</h3>
              <p>
                Expo is used for building our mobile application, providing a unified environment to develop, build, and deploy the app across different platforms. Expo enables us to deliver a consistent experience on both iOS and Android devices.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Technology;
