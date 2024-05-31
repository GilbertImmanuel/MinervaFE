import React from 'react';

// Sample history data
const sampleHistoryData = {
  summarizer: [
    "Here's a brief summary of the most important points. This might be a really long text to test how the design looks when the text exceeds the container width.",
    "This summary reflects the key insights from the discussion."
  ],
  analyzer: [
    "Analysis of the current data trends and their implications. Again, let's make this really long to see the effect of text overflow handling in a beautiful way.",
    "Detailed examination and interpretation of the results."
  ]
};

const History = ({ activeTab }) => {
  // Function to handle click events on history items
  const handleHistoryItemClick = (item) => {
    console.log("Clicked on history item:", item); // Example action, replace with your actual function
  };

  const renderHistory = () => {
    if (!activeTab || !sampleHistoryData[activeTab]) {
      return null;
    }

    const dataToDisplay = sampleHistoryData[activeTab];
    return (
      <div className="border-t border-b border-white">
        {dataToDisplay.map((item, index) => (
          <div
            key={index}
            className="py-2 px-4 text-sm border-t border-b border-gray-200 cursor-pointer hover:bg-gray-100 truncate overflow-hidden text-white"
            onClick={() => handleHistoryItemClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#0B001A] text-white font-bold text-lg mb-1 px-0 pt-4">
      <div className="px-4">
        HISTORY
        <hr className="relative flex justify-center w-[100%] h-[2px] mx-auto bg-white border-0 rounded md:mb-4 dark:white mt-1"></hr>
      </div>
      {renderHistory()}
    </div>
  );
};

export default History;