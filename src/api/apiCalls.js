//frontend/src/api/apiCalls.js

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchPlayers = async () => {
  const response = await fetch(`${API_BASE_URL}/players`);
  return response.json();
};

export const addPlayer = async (player) => {
  const response = await fetch(`${API_BASE_URL}/players`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player),
  });
  return response.json();
};
