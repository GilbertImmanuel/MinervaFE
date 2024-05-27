import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { PropagateLoader } from 'react-spinners';
import React, { useState, useRef, useEffect } from 'react';
import iconLink from './assets/icons/iconlink.png';
import iconSend from './assets/icons/iconsend.png';

import { toast } from 'react-toastify';

const Summarizer = () => {
  const [inputText, setInputText] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [markdown, setMarkdown] = useState('')
  const textareaRef = useRef(null);
  const [isBasic, setIsBasic] = useState(true);
  
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

  const toggleButtonLoading = (isLoading = true) => {
    if (isLoading) {
      document.getElementById('summarizer-result').classList.add('hidden');
      document.getElementById('summarizing-button-text').classList.add('hidden');
      document.getElementById('summarizing-button-spinner').classList.remove('!hidden');
      document.getElementById('summarizing-button').setAttribute('disabled', true);
    } else {
      document.getElementById('summarizing-button-text').classList.remove('hidden');
      document.getElementById('summarizing-button-spinner').classList.add('!hidden');
      document.getElementById('summarizing-button').removeAttribute('disabled');
    }
  }

  const handleSubmit = async () => {
    toggleButtonLoading(true);
    console.log("Processing text: ", inputText);
    console.log("Source URL: ", sourceUrl);

    const url = 'http://localhost:3000/api/v1/summary';
    const formData = new FormData();

    formData.append('textInput', inputText);
    formData.append('urlInput', sourceUrl);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    let result = await axios.post(url, formData, config).catch((error) => {
      toast.error(error.response.data.message);
      toggleButtonLoading(false);
    });

    console.log("Result: ", result.data.summary)
    await handleResponse(result);
  };

  const handleSourceUrlChange = (event) => {
    setSourceUrl(event.target.value);
  };

  const handleResponse = async (result) => {
    toggleButtonLoading(false);
    let data = result.data.data.summary;
    data.replace(/\n/gi, '\n &nbsp;')

    setMarkdown(data)
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
            className="bg-white w-full focus:outline-none resize-y overflow-auto min-h-8 max-h-32 mt-1 ml-1"
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
        <div className="flex items-center border-2 rounded-lg bg-white p-2 mb-2">
          <div className="bg-white rounded-lg p-2">
            <img src={iconLink} alt="Link" className="h-6 w-6" style={{ backgroundSize: 'auto' }} />
          </div>
          <input
            type="text"
            value={sourceUrl}
            onChange={handleSourceUrlChange}
            placeholder="www.sourcedocument.com"
            className="bg-white w-full focus:outline-none ml-3"
          />
        </div>
        <div className="flex flex-col items-center mb-5">
          <p className="text-black text-m mb-2">Choose your model</p>
          <div className="flex justify-center">
            <button
              className={`px-16 py-3 rounded-2xl mr-5 ${isBasic ? 'bg-gradient-to-bl from-[#7ED4EF] via-[#298BD0] to-[#0169C2] text-white font-bold' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => setIsBasic(true)}
              disabled={isBasic}
            >
              Basic
            </button>
            <button
              className={`px-16 py-3 rounded-2xl ml-5 ${isBasic ? 'bg-gray-300 text-gray-700' : 'bg-gradient-to-br from-[#BA55D3] via-[#9B30FF] to-[#6B0AC9] text-white font-bold shadow-md shadow-[#5B5FC7]'}`}
              onClick={() => setIsBasic(false)}
              disabled={!isBasic}
            >
              Ultra
            </button>
          </div>
        </div>
        <button
          className="bg-gradient-to-bl from-[#7ED4EF] via-[#298BD0] to-[#0169C2] text-white text-lg font-bold py-2 px-4 rounded-2xl hover:bg-blue-600 min-h-[40px] flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
          id="summarizing-button"
          onClick={handleSubmit}
        >
          <span id='summarizing-button-text' className='flex flex-row'>
            <img src={iconSend} alt="Send" className="mr-3" width={30} height={18} />
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