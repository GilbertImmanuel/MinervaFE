import React, { useState } from 'react';

const Analyzer = () => {
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

  return (
    <div className="flex justify-center">
      <section className="bg-white shadow-md rounded-3xl p-6 m-4 flex flex-col items-stretch w-full max-w-4xl">
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
            className="w-full border-2 p-2 rounded"
          />
        </div>
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-600"
          onClick={handleProcessStart}
        >
          Start Process
        </button>
      </section>
    </div>
  );
};

export default Analyzer;