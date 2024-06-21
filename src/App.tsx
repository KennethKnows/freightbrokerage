import React, { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import { Button } from '@/components/ui/button';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
// import ServicesPage from './components/services';
import Carousel from './components/Carousel';
// import "@/components/ui/card";
import './index.css'; 



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      {/* <ServicesPage /> */}
      <Carousel />

      {/* Other components or content */}
    </>
  );
}

export default App;
