import React, { useState, useRef, useEffect } from 'react';
import iconUpload from './assets/icons/iconupload.png';
import iconSend from './assets/icons/iconsend.png';

const Summarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summaryLength, setSummaryLength] = useState(512);
  const [file, setFile] = useState(null);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const textarea = textareaRef.current;
    textarea.addEventListener('input', handleResize);
    return () => {
      textarea.removeEventListener('input', handleResize);
    };
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['application/pdf', 'text/csv', 'text/plain'];
    if (allowedTypes.includes(file.type)) {
      setFile(file);
    } else {
      alert('Please select a PDF, CSV, or TXT file.');
    }
  };

  const handleLengthChange = (event) => {
    setSummaryLength(event.target.value);
  };

  const handleSubmit = () => {
    // Logic to process the text will go here
    console.log("Processing text: ", inputText);
    console.log("Summary length: ", summaryLength);
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex justify-center">
      <section className="bg-white shadow-md rounded-3xl p-6 m-4 flex flex-col items-stretch w-full max-w-4xl">
        <div className="flex items-center border-2 rounded-lg bg-white p-2 mb-2">
          <textarea
            ref={textareaRef}
            className="bg-white w-full focus:outline-none resize-y overflow-auto min-h-6 max-h-32"
            placeholder="Input the text to be summarized..."
            value={inputText}
            onChange={handleInputChange}
            rows={1}
          />
        </div>
        <div className="flex items-center justify-center mb-2">
          <p className="text-black text-m">or</p>
        </div>
        <div
          className="flex items-center justify-center border-2 rounded-lg bg-white p-2 mb-4 cursor-pointer"
          onClick={handleFileUpload}
        >
          <div className="flex items-center">
            <img src={iconUpload} alt="Upload" className="h-4.5 w-4.5 mr-3"/>
            <span className="text-gray-500">Upload pdf, csv, txt</span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.csv,.txt"
            className="hidden"
          />
        </div>
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
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-600 flex items-center justify-center"
          onClick={handleSubmit}
        >
          <img src={iconSend} alt="Send" className="h-4.5 w-4.5 mr-3"/>
          Start Summarization
        </button>
      </section>
    </div>
  );
};

export default Summarizer;