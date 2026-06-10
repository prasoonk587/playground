import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TicTacToe } from './components/TicTacToe';

function App() {
  return (
    <TicTacToe n={3} />
  );
}

export default App;
