//frontend/src/App.jsx
//entry point for the frontend

import React from 'react';
import Navbar from './components/NavBar';
import GamePage from './pages/GamePage';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <GamePage playerId="player1" />
    </div>
  );
}

export default App;
