import React, { useState, useEffect, useRef } from 'react';
import PublicNavbar from './navbar/PublicNavbar';
import UserNavbar from './navbar/UserNavbar';
import logo from './assets/logo.png';

const Header = ({ activeTab }) => {
  const isLoggedIn = true;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderMenuContent = () => {
    if (activeTab === 'summarizer') {
      return <div>Summarizer History</div>;
    } else if (activeTab === 'analyzer') {
      return <div>Analyzer History</div>;
    } else {
      return null;
    }
  };

  const handleMenuClick = (event) => {
    event.stopPropagation();
  };

  return (
    <header className="text-white p-4 flex justify-between items-center bg-[#333333] bg-opacity-40 z-50 sticky top-0 left-0">
      <div className="flex items-center relative">
        <button ref={hamburgerRef} className="mr-4" onClick={toggleMenu}>
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
        <div
          ref={menuRef}
          className={`absolute top-[56px] left-0 w-72 h-[600px] rounded-lg bg-white bg-opacity-95 z-20 overflow-auto transition-all duration-300 transform ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
          onClick={handleMenuClick}
        >
          <div className="text-black font-bold text-l mb-1 px-4 pt-4">HISTORY</div>
          <hr className="relative flex justify-center w-[90%] h-[2px] mx-auto bg-black border-0 rounded md:mb-4 dark:black"></hr>
          {renderMenuContent()}
        </div>
        <img
          src={logo}
          alt="logo"
          onClick={handleHomeClick}
          className="mr-2 h-6 cursor-pointer"
        />
        <h1
          onClick={handleHomeClick}
          className="text-xl cursor-pointer select-none"
        >
        Summasphere
        </h1>
      </div>
      <nav>
        {isLoggedIn ? <UserNavbar /> : <PublicNavbar />}
      </nav>
    </header>
  );
};

export default Header;