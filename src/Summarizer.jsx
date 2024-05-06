import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { PropagateLoader } from 'react-spinners';

const Summarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summaryLength, setSummaryLength] = useState(512);
  const [file, setFile] = useState(null);
  const [markdown, setMarkdown] = useState('')

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
      <section className="mx-auto bg-white shadow-md rounded-3xl p-6 my-4 flex flex-col items-stretch w-[50%] max-w-4xl">
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
          className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 min-h-[40px] flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
          id="summarizing-button"
          onClick={handleSubmit}
        >
          <span id='summarizing-button-text'>
            Start Summarizing
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