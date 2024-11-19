// frontend/src/renjs/renjsIntegration.js

const storyData = {
  startNode: 'intro',
  nodes: {
    intro: {
      text: 'Welcome to the Cat Café. Will you escape?',
      choices: [
        { text: 'Explore the kitchen', nextNode: 'kitchen' },
        { text: 'Talk to the mysterious cat', nextNode: 'mysteryCat' },
      ],
    },
    kitchen: {
      text: 'The kitchen smells like fish. What do you do?',
      choices: [
        { text: 'Search the fridge', nextNode: 'fridge' },
        { text: 'Leave the kitchen', nextNode: 'intro' },
      ],
    },
    mysteryCat: {
      text: 'The cat offers a cryptic clue. Follow it?',
      choices: [
        { text: 'Yes', nextNode: 'clue' },
        { text: 'No', nextNode: 'intro' },
      ],
    },
    // Additional nodes go here...
  },
};

// Function to initialize the game
export function initializeGame() {
  const gameCanvas = document.getElementById('gameCanvas');

  if (!gameCanvas) {
    console.error('Game canvas element not found!');
    return;
  }

  // Function to render a story node
  const renderNode = (nodeKey) => {
    const node = storyData.nodes[nodeKey];

    if (!node) {
      gameCanvas.innerHTML = '<p>Error: Story node not found!</p>';
      return;
    }

    // Display the node text
    gameCanvas.innerHTML = `<p>${node.text}</p>`;

    // Render the choices as buttons
    const choicesContainer = document.createElement('div');
    node.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.textContent = choice.text;
      button.onclick = () => renderNode(choice.nextNode);
      choicesContainer.appendChild(button);
    });

    gameCanvas.appendChild(choicesContainer);
  };

  // Start the game at the start node
  renderNode(storyData.startNode);
}

export default storyData;
