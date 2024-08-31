// src/components/Explore.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Explore() {
  // Data for Farmers
  const farmerData = {
    labels: [
      'Before कृषिNet', '', '', '', '', '', '', '', '', '', // Empty labels to spread the "Before" label across multiple points
      'After कृषिNet', '', '', '', '', '', '', '', '', ''  // Empty labels to spread the "After" label across multiple points
    ],
    datasets: [
      {
        label: 'Income Trend',
        data: [50, 40, 45, 33, 36, 40, 11, 27, 33, 35, 45, 50, 55, 59, 68, 72, 80, 85, 90, 100],
        borderColor: '#4E6762',
        backgroundColor: 'rgba(76, 103, 98, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Data for Companies
  const companyData = {
    labels: [
      'Before कृषिNet', '', '', '', '', '', '', '', '', '', // Empty labels to spread the "Before" label across multiple points
      'After कृषिNet', '', '', '', '', '', '', '', '', ''  // Empty labels to spread the "After" label across multiple points
    ],
    datasets: [
      {
        label: 'Income Trend',
        data: [40, 35, 30, 25, 28, 22, 18, 15, 20, 22, 25, 30, 35, 45, 55, 65, 75, 80, 85, 95],
        borderColor: '#4E6762',
        backgroundColor: 'rgba(76, 103, 98, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Income/Revenue',
          color: '#C2CAAA',
        },
        grid: {
          color: '#4E6762',
        },
        ticks: {
          display: false, // Hides the Y-axis values
        },
      },
      x: {
        title: {
          display: true,
          text: '',
          color: '#C2CAAA',
        },
        grid: {
          color: '#4E6762',
        },
        ticks: {
          callback: function (value, index) {
            if (index === 0) return 'Before कृषिNet';
            if (index === 10) return 'After कृषिNet';
            return ''; // Empty for other indexes
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend for simplicity
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `Income: ${context.raw}`,
        },
      },
    },
    elements: {
      point: {
        radius: 4,
      },
    },
  };

  return (
    <section id="explore" className="py-16 bg-[#1B263B] text-[#C2CAAA]">
      <div className="container mx-auto">
        <div className="h-[80px] bg-[#0D1B2A] flex items-center justify-center mb-12">
            <h2 className="text-4xl font-bold text-center bg-[#0D1B2A] text-white ">Why Use कृषिNet?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 px-4">
          {/* Farmers Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Why Should Farmers Use कृषिNet?</h3>
            <p className="mb-8">कृषिNet empowers farmers by providing direct access to larger markets, eliminating middlemen, and ensuring fair pricing. The platform enables farmers to compete with big producers through partial contracts, thereby boosting their income and securing their livelihood.</p>
            <Line data={farmerData} options={options} />
          </div>

          {/* Companies Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Why Should Companies Use कृषिNet?</h3>
            <p className="mb-8">कृषिNet offers companies a reliable and secure way to procure quality crops directly from farmers, ensuring consistency in supply and pricing. The platform's decentralized nature fosters transparency and reduces risks, ultimately driving company revenue growth.</p>
            <Line data={companyData} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
