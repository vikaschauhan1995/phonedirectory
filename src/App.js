import React, { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/scss/App.scss';

function App() {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div className="app">
      <div className="app__body">
        {/* Header */}
        <Header />
        {/* Body */}
        <Body activeTab={activeTab} />
        {/* Footer */}
        <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
