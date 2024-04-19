import React, { useState } from 'react';
import Header from './Header';
import mainpages from './assets/mainpages.png';
import { Switch } from '@headlessui/react';

const Summarizer = ({ onTabSwitch }) => {
  const [inputText, setInputText] = useState('');
  const [summaryLength, setSummaryLength] = useState(512);
  const [enabled, setEnabled] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleLengthChange = (event) => {
    setSummaryLength(event.target.value);
  };

  const handleSubmit = () => {
    // Logic to process the text will go here
    console.log("Processing text: ", inputText);
    console.log("Summary length: ", summaryLength);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-sky-950 flex flex-col relative">
      <img className="absolute h-full w-full" src={mainpages} alt="Main Pages" />
      <div className='z-10'>
      <Header />
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <div className="text-center mt-6">
        <h1 className="text-4xl montserrat font-bold text-white">Simplify Complexity with <br />Artificial Intelligence</h1>
        <p className="mt-4 mb-2 monserrat text-white">Enjoy the ease and efficiency of gaining important insights with SummarizeAI</p>
      </div>
      <main className="mx-auto flex-grow p-4 w-[30%] rounded">
        <div className="flex justify-center">
          <section className="bg-white shadow-md rounded p-6 m-4 flex flex-col items-stretch w-full max-w-4xl">
            <div className="flex mb-4">
              {/* Active tab */}
              <button
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-tl rounded-bl">
                Summarizer
              </button>
              {/* Inactive tab */}
              <button
                className="flex-1 py-2 px-4"
                onClick={() => onTabSwitch('analyzer')}
                >
                Analyzer
              </button>
            </div>
            <textarea
              className="border p-2 mb-4 rounded"
              placeholder="Input Text..."
              value={inputText}
              onChange={handleInputChange}
            />
            <input
                type="file"
                onChange={handleFileChange}
                className="w-full text-sm text-grey-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
            />
            <label htmlFor="lengthRange" className="text-sm font-medium text-gray-900 dark:text-gray-300">
            Length: {summaryLength}
            </label>
            <input
            id="lengthRange"
            className="range range-primary mb-4"
            type="range"
            min="512"
            max="4096"
            step="512"
            value={summaryLength}
            onChange={handleLengthChange}
            style={{
              backgroundSize: `${((summaryLength - 512) / (4096 - 512)) * 100}% 100%` // Adjusts the track fill
            }}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Start Summarizing
            </button>
          </section>

        </div>
      </main>
    
      </div> 
    </div>
  );
};

export default Summarizer;