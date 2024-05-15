import React, { useState } from 'react';
import PublicNavbar from './navbar/PublicNavbar';
import UserNavbar from './navbar/UserNavbar';
import logo from './assets/logo.png';

const Header = ({ activeTab }) => {
  const isLoggedIn = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenuContent = () => {
    if (activeTab === 'summarizer') {
      return <div>Summarizer History</div>;
    } else if (activeTab === 'analyzer') {
      return <div>Analyzer History</div>;
    } else {
      return null;
    }
  };

  return (
    <header className="text-white p-4 flex justify-between items-center bg-no-repeat z-10 relative">
      <div className="flex items-center relative">
        <button className="mr-4" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-12 left-0 w-72 h-[600px] rounded-lg bg-white bg-opacity-95 z-20 overflow-auto" onClick={toggleMenu}>
            <div className="text-black font-bold text-l mb-1 px-4 pt-4">HISTORY</div>
            <hr class="relative flex justify-center w-[90%] h-[2px] mx-auto bg-black border-0 rounded md:mb-4 dark:black"></hr>
            {renderMenuContent()}
          </div>
        )}
        <img src={logo} alt="logo" className="mr-2 h-6" />
        <h1 className="text-xl">Summasphere</h1>
      </div>
      <nav>
        {isLoggedIn ? <UserNavbar /> : <PublicNavbar />}
      </nav>
    </header>
  );
};

export default Header;