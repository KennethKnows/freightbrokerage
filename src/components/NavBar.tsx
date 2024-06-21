import React, { useState } from 'react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-custom-blue py-8 mx-0 font-lexend" style={{ backgroundColor: '#7783D2' }}>
            <div className="mx-auto flex flex-col lg:flex-row justify-between items-center px-20">
                <div className="text-white text-2xl lg:text-2xl ">
                    <a href="#home">Freight Brokerage</a>
                </div>
                <div className="block lg:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white focus:outline-none"
                    >
                        <svg 
                            className="h-6 w-6" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
                    <div className="flex flex-col lg:flex-row lg:flex-grow lg:justify-end lg:items-center lg:space-x-8 lg:w-1/2">
                        <a 
                            href="#home" 
                            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-900 hover:text-white px-4 py-2 rounded-lg text-center lg:text-left"
                            style={{ fontSize: '13px' }}
                        >
                            HOME
                        </a>
                        <a 
                            href="#services" 
                            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-900 hover:text-white px-4 py-2 rounded-lg text-center lg:text-left"
                            style={{ fontSize: '13px' }}
                        >
                            SERVICES
                        </a>
                        <a 
                            href="#about-us" 
                            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-900 hover:text-white px-4 py-2 rounded-lg text-center lg:text-left"
                            style={{ fontSize: '13px' }}
                        >
                            ABOUT US
                        </a>
                        <a 
                            href="#request-quote" 
                            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-900 hover:text-white px-4 py-2 rounded-lg text-center lg:text-left"
                            style={{ fontSize: '13px' }}
                        >
                            REQUEST A QUOTE
                        </a>
                        <a 
                            href="#request-quote" 
                            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-900 hover:text-white px-6 py-2 rounded-lg text-center lg:text-left"
                            style={{ fontSize: '13px' }}
                        >
                            CREATE ACCOUNT
                        </a>
                        <button 
                            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 text-sm font-medium py-2 px-6 rounded-lg bg-blue-900 ml-"
                            style={{ fontSize: '15px', backgroundColor: '#252F70' }}
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
