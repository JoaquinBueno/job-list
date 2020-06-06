import React from 'react';
import './App.css'
import Header from './header';
import Jobs from './jobs';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div className="main-container">
        <Jobs/>
      </div>
    </div>
  );
}

export default App;
