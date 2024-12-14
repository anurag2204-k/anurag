import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const games = [
  { id: 1, name: 'Neon Racer', icon: '🏎️' },
  { id: 2, name: 'Cyber Puzzle', icon: '🧩' },
  { id: 3, name: 'Replicant Hunt', icon: '🔍' },
  { id: 4, name: 'Synth Beats', icon: '🎵' },
];

const GameContent = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="text-neon-blue">
      <h3 className="text-2xl font-bold mb-4">Arcade Games</h3>
      <div className="grid grid-cols-2 gap-4">
        {games.map((game) => (
          <button
            key={game.id}
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-blue"
            onClick={() => setSelectedGame(game)}
          >
            <span className="text-4xl mb-2">{game.icon}</span>
            <p>{game.name}</p>
          </button>
        ))}
      </div>
      <Dialog.Root open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-6 rounded-lg shadow-neon">
            {selectedGame && (
              <>
                <Dialog.Title className="text-2xl font-bold text-neon-blue mb-4">
                  {selectedGame.name}
                </Dialog.Title>
                <p className="text-neon-pink mb-4">This is the content for {selectedGame.name}.</p>
                <div className="text-center">
                  <Dialog.Close asChild>
                    <button className="px-4 py-2 bg-neon-blue text-gray-900 rounded hover:bg-neon-pink transition-colors">
                      Close
                    </button>
                  </Dialog.Close>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default GameContent;

