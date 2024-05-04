import React, { useState } from 'react';
import Header from './Header';
import Analyzer from './Analyzer';
import Summarizer from './Summarizer';
import ToggleSwitch from './ToggleSwitch';
import Footer from './Footer';

const Home = () => {
  const [activeTab, setActiveTab] = useState('summarizer');

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-[#0B001A] to-[#334155]">
      <img src="/src/assets/mainpages.png" className='-top-12 absolute w-full z-10'></img>
      <Header />
      <div className="w-full min-h-[calc(100vh_-_74px)] z-10">
        <div className='z-10'>
          <div className="text-center mt-6">
            <div className="flex justify-center items-center my-4">
              <span className="font-bold text-xl pr-4 text-white">Summarizer</span>
              <ToggleSwitch onTabSwitch={(newTab) => setActiveTab(newTab)} initialTab="analyzer" />
              <span className="font-bold text-xl pl-4 text-gray-400">Analyzer</span>
            </div>
            <h1 className="text-4xl montserrat font-bold text-white">Simplify Complexity with Artificial Intelligence</h1>
            <p className="mt-4 mb-2 monserrat text-white">Enjoy the ease and efficiency of gaining important insights with our tools</p>
          </div>
          <main className="mx-auto flex-grow p-4 w-[40%] rounded-3xl">
            {activeTab === 'summarizer' ? <Summarizer /> : <Analyzer />}
          </main>
        </div>
      </div>
      <div className='relative mx-auto max-w-6xl'>
        <div className="bg-gradient-to-bl from-[#7ED4EF]/25 via-[#298BD0]/25 to-[#0169C2]/25 text-white rounded-3xl p-4 relative">
          <div className="mx-16 my-7">
            <h1 className="text-4xl text-center">
              <span className="font-bold block">Summasphere, <span className="text-white">AI Based</span></span>
              <span className="text-blue-400">Text Summarizer and Document Analyzer</span>
            </h1>  
            <div className="grid grid-cols-2 gap-4 mt-14">
              <div className="flex items-center relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-9xl text-opacity-50 text-white">01</div>
                </div>
                <div className="text-2xl relative z-10 flex items-center">
                  <p>You can select features by switching to the summarizer or analyzer.</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img src="/src/assets/aboutimage1.png" alt="About Image 1" className="relative z-10 w-84" />
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-4 mt-14">
              <div className="flex justify-center items-center">
                <img src="/src/assets/aboutimage2.png" alt="About Image 2" className="relative z-10 h-72" />
              </div>
              <div className="flex items-center relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-9xl text-opacity-50 text-white">02</div>
                </div>
                <div className="text-2xl relative z-10 flex items-center ml-5">
                  <p>You can input text or upload a PDF document and click Start.</p>
                </div>
              </div>
            </div>
   
            <div className="grid grid-cols-2 gap-4 mt-14">
              <div className="flex items-center relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-9xl text-opacity-50 text-white">03</div>
                </div>
                <div className="text-2xl relative z-10 flex items-center">
                  <p>Summasphere will automatically summarize the text you input or the document you upload.</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img src="/src/assets/aboutimage3.png" alt="About Image 3" className="relative z-10 h-72" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='relative'>
        <img src="/src/assets/mainpages2.png" className='-top-96 absolute w-full'></img>
        <div className="mx-auto max-w-5xl mt-14 text-white">
          <h1 className="text-center text-3xl font-bold">About Summasphere</h1>
          <p className="text-justify mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Pulvinar elementum integer enim neque volutpat at tincidunt vitae semper. Amet consectetur adipiscing elit duis tristique. Nunc lobortis mattis aliquam faucibus purus. Quam nulla porttitor massa id neque aliquam vestibulum. In mollis nunc sed id. Arcu felis bibendum ut tristique et egestas quis. Lectus proin nibh nisl condimentum id venenatis a.
          </p>
          <p className="text-justify mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Pulvinar elementum integer enim neque volutpat at tincidunt vitae semper. Amet consectetur adipiscing elit duis tristique. Nunc lobortis mattis aliquam faucibus purus. Quam nulla porttitor massa id neque aliquam vestibulum. In mollis nunc sed id. Arcu felis bibendum ut tristique et egestas quis. Lectus proin nibh nisl condimentum id venenatis a.
          </p>
          <p className="text-justify mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Pulvinar elementum integer enim neque volutpat at tincidunt vitae semper. Amet consectetur adipiscing elit duis tristique. Nunc lobortis mattis aliquam faucibus purus. Quam nulla porttitor massa id neque aliquam vestibulum. In mollis nunc sed id. Arcu felis bibendum ut tristique et egestas quis. Lectus proin nibh nisl condimentum id venenatis a.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;