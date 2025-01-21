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
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h3 className="text-3xl font-bold text-center mb-8 text-neon-blue">Arcade Games</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <button
            key={game.id}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-blue"
            onClick={() => setSelectedGame(game)}
          >
            <span className="text-5xl mb-4">{game.icon}</span>
            <p className="text-lg font-medium">{game.name}</p>
          </button>
        ))}
      </div>

      <Dialog.Root open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full">
            {selectedGame && (
              <>
                <Dialog.Title className="text-3xl font-semibold text-neon-blue mb-4 text-center">
                  {selectedGame.name}
                </Dialog.Title>
                <p className="text-lg text-neon-pink mb-6 text-center">
                  This is the content for {selectedGame.name}.
                </p>
                <div className="flex justify-center">
                  <Dialog.Close asChild>
                    <button className="px-6 py-3 bg-neon-blue text-gray-900 rounded-full hover:bg-neon-pink transition-colors">
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
