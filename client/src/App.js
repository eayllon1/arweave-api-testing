import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  async function fetchTest() {
    try {
      const res = await fetch('http://159.65.213.43:1984/info');
      const json = await res.json();
      console.log('The AR Weave API route for info:')
      console.log(json);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTest()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Open console.log
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
