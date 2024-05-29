import React from 'react';

const History = ({ activeTab }) => {
  const renderMenuContent = () => {
    if (activeTab === 'summarizer') {
      return <div>Summarizer History</div>; // Place the Summarizer History component here
    } else if (activeTab === 'analyzer') {
      return <div>Analyzer History</div>; // Place the Analyzer History component here
    } else {
      return null;
    }
  };

  return (
    <div className="text-black font-bold text-l mb-1 px-4 pt-4">
      HISTORY
      <hr className="relative flex justify-center w-[100%] h-[2px] mx-auto bg-black border-0 rounded md:mb-4 dark:black mt-1"></hr>
      {renderMenuContent()}
    </div>
  );
};

export default History;