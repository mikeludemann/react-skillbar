import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skillbar from './components/skillbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Skillbar 
          text="Development" 
          bgColor="#0f0" 
          width="100"
        >
        </Skillbar>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
