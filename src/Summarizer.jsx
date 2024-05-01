import React, { useState } from 'react';

const Summarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summaryLength, setSummaryLength] = useState(512);

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
    <div className="flex justify-center">
      <section className="bg-white shadow-md rounded-3xl p-6 m-4 flex flex-col items-stretch w-full max-w-4xl">
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
          className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Start Summarizing
        </button>
      </section>
    </div>
  );
};

export default Summarizer;