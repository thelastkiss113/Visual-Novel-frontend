// frontend/src/components/NavBar.jsx
import React from 'react';
import '../styles/App.css';

const Navbar = ({ createNewGame, updatePlayerProgress, deletePlayerProgress, loadGame }) => (
  <nav className="navbar">
    <h1>9 Lives: a Cat Café Escape Room</h1>
    <div className="navbar-buttons">
      <button onClick={createNewGame}>Start New Game</button>
      <button onClick={loadGame}>Load Game</button>
      <button onClick={updatePlayerProgress}>Save Progress</button>
      <button onClick={deletePlayerProgress}>Delete Progress</button>
    </div>
  </nav>
);

export default Navbar;
