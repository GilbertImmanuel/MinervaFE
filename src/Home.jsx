import React, { useState } from 'react';
import Header from './Header';
import Analyzer from './Analyzer';
import Summarizer from './Summarizer';
import ToggleSwitch from './ToggleSwitch';

const Home = () => {
  const [activeTab, setActiveTab] = useState('analyzer');

  return (
    <div className="min-h-screen flex flex-col relative background-layered">
      <Header />
      <div className='z-10'>
        <div className="text-center mt-6">
          <div className="flex justify-center items-center my-4">
            <span className="font-bold text-xl pr-4 text-gray-400">Summarizer</span>
            <ToggleSwitch onTabSwitch={(newTab) => setActiveTab(newTab)} initialTab="analyzer" />
            <span className="font-bold text-xl pl-4 text-white">Analyzer</span>
          </div>
          <h1 className="text-4xl montserrat font-bold text-white">Simplify Complexity with Artificial Intelligence</h1>
          <p className="mt-4 mb-2 monserrat text-white">Enjoy the ease and efficiency of gaining important insights with our tools</p>
        </div>
        <main className="mx-auto flex-grow p-4 w-[30%] rounded">
          {activeTab === 'analyzer' ? <Analyzer /> : <Summarizer />}
        </main>
      </div>
    </div>
  );
};

export default Home;