// frontend/src/pages/GamePage.jsx
import React, { useEffect } from 'react';
import { initializeGame } from '/src/renjs/renjsIntegration.js'; // Import the new function
import './GamePage.css';

const GamePage = () => {
  useEffect(() => {
    initializeGame(); // Initialize the game when the component mounts
  }, []);

  return (
    <div className="game-container">
      <h1>Welcome to the Game</h1>
      <div id="gameCanvas"></div> {/* The game content will render here */}
    </div>
  );
};

export default GamePage;

