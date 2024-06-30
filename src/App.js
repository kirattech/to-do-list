import logo from './logo.svg';
import NotePad from './note.js';
import './App.css';
import { useEffect } from 'react';

function App() {
  return (
    <div>
      <p id="title"> To-Do List App </p>
      <p id="subtext"> Just a simple app for you to take some notes :) </p>
      <NotePad />
    </div>
  );
}

export default App;
