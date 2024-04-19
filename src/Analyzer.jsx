import React, { useState } from 'react';
import Header from './Header';

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
    // Placeholder for starting the document analysis process
    console.log("File to process: ", file);
    console.log("Source URL: ", sourceUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-sky-950 flex flex-col">
      <Header />
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-white">Simplify Complexity with Artificial Intelligence</h1>
        <p className="mt-4 mb-2 text-white">Enjoy the ease and efficiency of gaining important insights with AnalyzeAI</p>
      </div>
      <main className="flex-grow container mx-auto p-4">
        <div className="flex justify-center">
          <section className="bg-white shadow-md rounded p-6 m-4 flex flex-col items-stretch w-full max-w-4xl">
            <div className="flex mb-4">
              {/* Inactive tab */}
              <button
                className="flex-1 py-2 px-4"
                onClick={() => onTabSwitch('summarizer')}
              >
                Summarizer
              </button>
              {/* Active tab */}
              <button
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-tr rounded-br"
              >
                Analyzer
              </button>
            </div>
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
  );
};

export default Analyzer;