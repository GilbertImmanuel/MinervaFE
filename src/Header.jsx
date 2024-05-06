import React from 'react';
import PublicNavbar from './navbar/PublicNavbar';
import UserNavbar from './navbar/UserNavbar';
import logo from './assets/logo.png';

const Header = () => {
  const isLoggedIn = false;
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        {isLoggedIn ? <UserNavbar /> : <PublicNavbar />}
      </nav>
    </header>
  );
};

export default Header;