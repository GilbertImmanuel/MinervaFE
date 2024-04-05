import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Summarizer from './Summarizer';
import Analyzer from './Analyzer';
import Login from './Login';
import Register from './Register';

const App = () => {
  const [activeTab, setActiveTab] = useState('summarizer');

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            {activeTab === 'summarizer' && <Summarizer onTabSwitch={setActiveTab} />}
            {activeTab === 'analyzer' && <Analyzer onTabSwitch={setActiveTab} />}
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;