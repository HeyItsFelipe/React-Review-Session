import React from 'react';
import './App.css';
import MainImage from './components/MainImage';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <MainImage />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-10 offset-sm-1">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
