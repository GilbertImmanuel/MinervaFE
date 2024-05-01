import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png'; // Ensure this path is correct

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <header className="text-white p-4 flex justify-between items-center bg-no-repeat z-10">
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
        <img src={logo} alt="logo" className="mr-2 h-6" />
        <h1 className="text-xl">Summasphere</h1>
      </div>
      <nav>
        {/* Use Tailwind CSS for transparent background and white text */}
        <button onClick={handleLoginClick} className="text-white py-2 px-4 rounded bg-transparent border border-transparent hover:bg-white hover:text-blue-500">
          Log In
        </button>
        <button onClick={handleRegisterClick} className="ml-2 text-white py-2 px-4 rounded bg-transparent border border-transparent hover:bg-white hover:text-blue-500">
          Join for Free
        </button>
      </nav>
    </header>
  );
};

export default Header;