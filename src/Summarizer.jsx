
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { PropagateLoader } from 'react-spinners';
import React, { useState, useRef, useEffect } from 'react';
import iconUpload from './assets/icons/iconupload.png';
import iconSend from './assets/icons/iconsend.png';

const Summarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summaryLength, setSummaryLength] = useState(512);
  const [file, setFile] = useState(null);
  const [markdown, setMarkdown] = useState('')
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

  const handleSubmit = async () => {
    document.getElementById('summarizer-result').classList.add('hidden');
    document.getElementById('summarizing-button-text').classList.add('hidden');
    document.getElementById('summarizing-button-spinner').classList.remove('!hidden');
    document.getElementById('summarizing-button').setAttribute('disabled', true);

    console.log("Processing text: ", inputText);
    console.log("Summary length: ", summaryLength);

    const url = 'http://localhost:3000/api/v1/summary';
    const formData = new FormData();

    formData.append('textInput', inputText);
    formData.append('length', summaryLength);
    formData.append('file', file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    let result = await axios.post(url, formData, config);
    console.log("Result: ", result.data.summary)
    await handleResponse(result);
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleResponse = async (result) => {
    document.getElementById('summarizing-button-text').classList.remove('hidden');
    document.getElementById('summarizing-button-spinner').classList.add('!hidden');
    document.getElementById('summarizing-button').removeAttribute('disabled');

    result.data.summary.replace(/\n/gi, '\n &nbsp;')

    setMarkdown(result.data.summary)
    const resultSection = document.getElementById('summarizer-result');
    resultSection.classList.remove('hidden');
    setTimeout(() => {
      const element = document.getElementById('summarizer-result-label');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  return (
    <div className="flex justify-center flex-col">
      <section className="mx-auto bg-white rounded-3xl p-6 my-4 flex flex-col items-stretch w-[50%] max-w-4xl" style={{ boxShadow: "0 6px 24px rgba(255, 255, 255, 0.5)" }}>
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
          <div className="flex-1 border-t-2 ml-4 mr-1 border-gray-300"></div>
          <p className="px-3 text-black text-m">or</p>
          <div className="flex-1 border-t-2 ml-1 mr-4 border-gray-300"></div>
        </div>
        <div
          className="flex items-center justify-center border-2 rounded-lg bg-white p-2 mb-4 cursor-pointer"
          onClick={handleFileUpload}
        >
          <div className="flex items-center">
            <img src={iconUpload} alt="Upload" className="h-4.5 w-4.5 mr-3" />
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
          Summarization Length: {summaryLength}
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
          className="bg-gradient-to-bl from-[#7ED4EF] via-[#298BD0] to-[#0169C2] text-white text-lg font-bold py-2 px-4 rounded-2xl hover:bg-blue-600 min-h-[40px] flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
          id="summarizing-button"
          onClick={handleSubmit}
        >
          <span id='summarizing-button-text' className='flex flex-row'>
            <img src={iconSend} alt="Send" className="mr-3" width={24} height={18} />
            Start Summarization
          </span>
          <PropagateLoader color="#ffffff" id='summarizing-button-spinner' size={10} className='!hidden top-[-5px]' />
        </button>
      </section>

      <section id="summarizer-result" className='hidden flex flex-col items-center'>
        <h2 className='text-2xl montserrat font-bold text-white' id="summarizer-result-label">Summarized text results</h2>
        <div className="bg-white shadow-md rounded-3xl p-6 m-4 flex flex-col items-stretch w-full max-w-4xl" id="summarizer-result-text">
          <ReactMarkdown children={markdown} className="react-markdown-test" />
        </div>
      </section>
    </div>
  );
};

export default Summarizer;