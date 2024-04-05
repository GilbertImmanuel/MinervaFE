import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button className="mr-4">
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
        <h1 className="text-xl">Summasphere</h1>
      </div>
      <nav>
        <button onClick={handleLoginClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Log In
        </button>
        <button onClick={handleRegisterClick} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Join for Free
        </button>
      </nav>
    </header>
  );
};

export default Header;