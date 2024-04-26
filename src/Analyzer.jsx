import React, { useState } from 'react';
import Header from './Header';
import ToggleSwitch from './ToggleSwitch';
import './index.css';

const Analyzer = ({ onTabSwitch }) => {
  const [file, setFile] = useState(null);
  const [sourceUrl, setSourceUrl] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSourceUrlChange = (event) => {
    setSourceUrl(event.target.value);
  };

  const handleProcessStart = () => {
    console.log("File to process: ", file);
    console.log("Source URL: ", sourceUrl);
  };

  const handleToggle = (newState) => {
    setIsSummarizerActive(newState);
    onTabSwitch(newState ? 'summarizer' : 'analyzer');
  };

  return (
    <div className="min-h-screen flex flex-col relative background-layered">
      <Header />
      <div className='z-10'>
        <div className="text-center mt-6">
          <div className="flex justify-center items-center my-4">
            <span className="font-bold text-xl pr-4 text-gray-400">
              Summarizer
            </span>
            <ToggleSwitch onTabSwitch={onTabSwitch} initialTab="analyzer" />
            <span className="font-bold text-xl pl-4 text-white">
              Analyzer
            </span>
          </div>
          <h1 className="text-4xl montserrat font-bold text-white">Simplify Complexity with <br />Artificial Intelligence</h1>
          <p className="mt-4 mb-2 monserrat text-white">Enjoy the ease and efficiency of gaining important insights with Summasphere</p>
        </div>
        <main className="mx-auto flex-grow p-4 w-[30%] rounded">
          <div className="flex justify-center">
            <section className="bg-white shadow-md rounded p-6 m-4 flex flex-col items-stretch w-full max-w-4xl">
              <div className="mb-4">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full text-sm text-grey-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={sourceUrl}
                  onChange={handleSourceUrlChange}
                  placeholder="www.sourcedocument.com"
                  className="w-full border p-2 rounded"
                />
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleProcessStart}
              >
                Start Process
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analyzer;