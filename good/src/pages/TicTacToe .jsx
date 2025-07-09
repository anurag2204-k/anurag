import React, { useState, useEffect } from 'react';

const emptyBoard = Array(9).fill(null);

const TicTacToe = ({ theme = 'dark' }) => {
  const [board, setBoard] = useState(emptyBoard);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // Player is 'X'
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setWinner(result);
    } else if (!isPlayerTurn && !winner) {
      const timer = setTimeout(() => {
        const bestMove = getBestMove(board);
        if (bestMove !== -1) {
          const newBoard = [...board];
          newBoard[bestMove] = 'O';
          setBoard(newBoard);
          setIsPlayerTurn(true);
        }
      }, 800); // Slightly longer delay for better UX
      
      return () => clearTimeout(timer);
    }
  }, [board, isPlayerTurn, winner]);

  const handleClick = (index) => {
    if (board[index] || winner || !isPlayerTurn) return;
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // 'X' or 'O'
      }
    }

    if (board.every(cell => cell)) return 'draw';
    return null;
  };

  const getBestMove = (board) => {
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'O';
        const score = minimax(board, 0, false);
        board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    return move;
  };

  const minimax = (board, depth, isMaximizing) => {
    const result = checkWinner(board);
    if (result === 'O') return 1;
    if (result === 'X') return -1;
    if (result === 'draw') return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = 'O';
          const score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = 'X';
          const score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const resetGame = () => {
    setBoard(emptyBoard);
    setIsPlayerTurn(true);
    setWinner(null);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100'
    }`}>
      <div className={`backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full ${
        theme === 'dark' 
          ? 'bg-gray-800/90 border border-gray-700' 
          : 'bg-white/90 border border-gray-200'
      }`}>
        <h1 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent' 
            : 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
        }`}>
          Tic-Tac-Toe: Player vs AI
        </h1>

        <div className="mb-4 text-center">
          <p className={`text-sm md:text-base mb-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {!winner && (isPlayerTurn ? "Your turn (X)" : "AI thinking... (O)")}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
          {board.map((cell, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className={`
                aspect-square flex items-center justify-center
                text-2xl md:text-3xl font-bold rounded-xl cursor-pointer
                transition-all duration-300 transform hover:scale-105
                shadow-lg hover:shadow-xl border-2
                ${cell === 'X' 
                  ? theme === 'dark'
                    ? 'text-blue-400 bg-blue-900/30 border-blue-500/50' 
                    : 'text-blue-600 bg-blue-50 border-blue-300'
                  : cell === 'O' 
                    ? theme === 'dark'
                      ? 'text-red-400 bg-red-900/30 border-red-500/50'
                      : 'text-red-600 bg-red-50 border-red-300'
                    : theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 hover:border-gray-500'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                }
                ${cell ? 'cursor-not-allowed' : ''}
                ${!isPlayerTurn && !winner ? 'pointer-events-none' : ''}
              `}
            >
              {cell && (
                <span className={`${cell === 'X' ? 'animate-bounce' : 'animate-pulse'}`}>
                  {cell}
                </span>
              )}
            </div>
          ))}
        </div>

        {winner && (
          <div className="text-center">
            <div className={`mb-4 p-4 rounded-xl shadow-lg ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-green-800 to-blue-800' 
                : 'bg-gradient-to-r from-green-500 to-blue-500'
            }`}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                {winner === 'draw' ? "🤝 It's a draw!" : winner === 'X' ? "🎉 You win!" : "🤖 AI wins!"}
              </h2>
              <p className="text-white/90 text-sm md:text-base">
                {winner === 'draw' 
                  ? "Great game! Try again?" 
                  : winner === 'X' 
                    ? "Congratulations! You beat the AI!" 
                    : "AI got you this time! Try again?"
                }
              </p>
            </div>
            <button
              onClick={resetGame}
              className={`px-6 py-3 text-white rounded-xl transition-all duration-300
                       transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold
                       text-sm md:text-base ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
              }`}
            >
              🔄 Play Again
            </button>
          </div>
        )}

        {!winner && (
          <div className="text-center">
            <button
              onClick={resetGame}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                theme === 'dark' 
                  ? 'bg-gray-600 text-white hover:bg-gray-500' 
                  : 'bg-gray-400 text-white hover:bg-gray-500'
              }`}
            >
              Reset Game
            </button>
          </div>
        )}
      </div>

      {/* Game Stats */}
      <div className={`mt-4 text-center text-sm ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <p>💡 Tip: The AI uses the Minimax algorithm - it's unbeatable!</p>
      </div>
    </div>
  );
};

export default TicTacToe;
