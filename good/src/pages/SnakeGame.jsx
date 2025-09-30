import React, { useState, useEffect, useCallback } from 'react';

const BOARD_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_FOOD = { x: 10, y: 10 };

const SnakeGame = ({ theme = 'dark' }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const generateFood = useCallback(() => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection({ x: 1, y: 0 });
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection({ x: 0, y: 0 });
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
  };

  // Handle keyboard input with direction validation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted || gameOver) return;
      
      // Prevent default arrow key behavior (scrolling)
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
      
      setDirection(prevDirection => {
        switch (e.key) {
          case 'ArrowUp':
            // Can't reverse direction - only change if not currently moving down
            return prevDirection.y !== 1 ? { x: 0, y: -1 } : prevDirection;
          case 'ArrowDown':
            // Can't reverse direction - only change if not currently moving up
            return prevDirection.y !== -1 ? { x: 0, y: 1 } : prevDirection;
          case 'ArrowLeft':
            // Can't reverse direction - only change if not currently moving right
            return prevDirection.x !== 1 ? { x: -1, y: 0 } : prevDirection;
          case 'ArrowRight':
            // Can't reverse direction - only change if not currently moving left
            return prevDirection.x !== -1 ? { x: 1, y: 0 } : prevDirection;
          default:
            return prevDirection;
        }
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || (direction.x === 0 && direction.y === 0)) return;

    const gameLoop = setInterval(() => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
        
        head.x += direction.x;
        head.y += direction.y;

        // Check wall collision
        if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
          setGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return prevSnake;
        }

        newSnake.unshift(head);

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(prev => prev + 10);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameLoop);
  }, [direction, food, gameStarted, gameOver, generateFood]);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-green-50 to-gray-100'
    }`}>
      <div className={`backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-lg w-full ${
        theme === 'dark' 
          ? 'bg-gray-800/90 border border-gray-700' 
          : 'bg-white/90 border border-gray-200'
      }`}>
        <h1 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent' 
            : 'bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'
        }`}>
          🐍 Snake Game
        </h1>

        <div className="text-center mb-4">
          <p className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Score: {score}
          </p>
        </div>

        <div className={`grid gap-1 mb-6 p-4 rounded-xl ${
          theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'
        }`} 
        style={{ 
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
          aspectRatio: '1'
        }}>
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
            const x = index % BOARD_SIZE;
            const y = Math.floor(index / BOARD_SIZE);
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            const isHead = snake[0] && snake[0].x === x && snake[0].y === y;

            return (
              <div
                key={index}
                className={`aspect-square rounded-sm transition-colors duration-100 ${
                  isFood 
                    ? 'bg-red-500 animate-pulse shadow-lg' 
                    : isHead 
                      ? 'bg-green-400 shadow-lg ring-2 ring-green-300' 
                      : isSnake 
                        ? 'bg-green-500 shadow-md' 
                        : theme === 'dark' 
                          ? 'bg-gray-700/30 hover:bg-gray-700/50' 
                          : 'bg-gray-200 hover:bg-gray-300'
                }`}
              />
            );
          })}
        </div>

        {!gameStarted && !gameOver && (
          <div className="text-center">
            <button
              onClick={startGame}
              className={`px-6 py-3 text-white rounded-xl transition-all duration-300
                       transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold
                       text-sm md:text-base ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
              }`}
            >
              🚀 Start Game
            </button>
          </div>
        )}

        {gameStarted && !gameOver && (
          <div className="text-center">
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Use arrow keys to control the snake
            </p>
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

        {gameOver && (
          <div className="text-center">
            <div className={`mb-4 p-4 rounded-xl shadow-lg ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-red-800 to-orange-800' 
                : 'bg-gradient-to-r from-red-500 to-orange-500'
            }`}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                🎮 Game Over!
              </h2>
              <p className="text-white/90 text-sm md:text-base">
                Final Score: {score}
              </p>
            </div>
            <button
              onClick={startGame}
              className={`px-6 py-3 text-white rounded-xl transition-all duration-300
                       transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold
                       text-sm md:text-base ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
              }`}
            >
              🔄 Play Again
            </button>
          </div>
        )}
      </div>

      <div className={`mt-4 text-center text-sm ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <p>🎯 Tip: Eat the red food to grow and increase your score!</p>
        <p className="mt-1">⚠️ Don&apos;t reverse direction or you&apos;ll crash!</p>
      </div>
    </div>
  );
};

export default SnakeGame;