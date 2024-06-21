import React from 'react';
import heroImage from '../assets/images/trucks1.png'; // Adjust the path relative to your project structure

const Hero: React.FC = () => {
    return (
        <div
            className="relative bg-cover bg-center h-screen flex items-center"
            style={{
                backgroundImage: `url(${heroImage})`,
                minHeight: '700px',  // Adjust the minimum height as needed
                height: '100%',      // Ensure the image covers the entire container height
                backgroundSize: 'cover',  // Ensure the image covers the container
                backgroundPosition: 'center',  // Center the image
            }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black opacity-50"
                style={{
                    zIndex: 10,   // Ensure the overlay is above the background image
                }}
            ></div>

            {/* Content */}
            <div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-center justify-center text-white">
                {/* Left Side Content */}
                <div className="w-full lg:w-1/2 px-6 lg:pl-20 mt-4 lg:mt-0 text-center lg:text-left font-lexend lg:ml-40">
                    <h2 className="text-4xl lg:text-5xl font-thin mb-3">TRANSPORT</h2>
                    <h1 className="text-8xl lg:text-7xl font-bold mb-4 text-custom-blue" style={{ color: '#7783D2' }}>LOGISTICS</h1>
                    <button className="mt-4 bg-transparent border-2 border-white text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#7783D2] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50">
                        LEARN MORE
                    </button>
                </div>

                {/* Right Side Content */}
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-center items-center lg:items-center mt-8 lg:mt-0 ml-0 lg:ml-8">
                    <button className="text-white text-center bg-[#7783D2] border-2 border-[#7783D2] py-4 px-4 rounded-lg shadow-lg hover:bg-white hover:text-[#7783D2] focus:outline-none focus:ring-2 focus:ring-[#7783D2] focus:ring-opacity-50 my-2" style={{ width: '200px', height: '80px' }}>
                        <h2 className="text-3xl lg:text-4xl font-lexend font-bold">PICK UP</h2>
                    </button>
                    <button className="text-white text-center bg-[#7783D2] border-2 border-[#7783D2] py-4 px-4 rounded-lg shadow-lg hover:bg-white hover:text-[#7783D2] focus:outline-none focus:ring-2 focus:ring-[#7783D2] focus:ring-opacity-50 my-2 mt-4 lg:mt-2" style={{ width: '200px', height: '80px' }}>
                        <h2 className="text-3xl lg:text-3xl font-lexend font-bold">DELIVERY</h2>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Hero;