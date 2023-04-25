import React from 'react';
import Earth from './Earth';
import Moon from './Moon';
import Water from './Water';
import './App.css';


function App() {
  return (
    <div className="App">
      <Water />
      <Earth />
      <Moon />
    </div>
  );
}

export default App;
