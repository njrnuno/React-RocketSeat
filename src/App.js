import React, { Component } from 'react';
import Routes from './routes';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
