'use client';

import { useState, useCallback } from 'react';

// Prevent indexing
if (typeof document !== 'undefined') {
  const meta = document.createElement('meta');
  meta.name = 'robots';
  meta.content = 'noindex, nofollow';
  document.head.appendChild(meta);
}

const BREAD_ITEMS = ['🥐', '🥖', '🥨', '🍞', '🥯'];

const BREAD_PUNS = [
  "You're on a ROLL!",
  "That's the yeast we could do!",
  "You really KNEAD this!",
  "Dough you believe it?!",
  "Bready or not, here it comes!",
];

type GameState = 'welcome' | 'playing' | 'spinning' | 'loser' | 'kelley' | 'winner' | 'reveal';

interface Confetti {
  id: number;
  x: number;
  emoji: string;
  delay: number;
  duration: number;
}

interface Elf {
  id: number;
  x: number;
  y: number;
  delay: number;
  rotation: number;
}

export default function GiftPage() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [reels, setReels] = useState(['🥐', '🥖', '🥨']);
  const [winPun, setWinPun] = useState('');
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [elves, setElves] = useState<Elf[]>([]);
  const [spinCount, setSpinCount] = useState(0);

  const createElves = useCallback(() => {
    const newElves: Elf[] = [];
    for (let i = 0; i < 20; i++) {
      const angle = ((i / 20) * 360 + Math.random() * 18) * (Math.PI / 180);
      const distance = 200 + Math.random() * 300;
      newElves.push({
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        delay: Math.random() * 0.3,
        rotation: Math.random() * 720 - 360,
      });
    }
    setElves(newElves);
  }, []);

  const createConfetti = useCallback(() => {
    const xmasEmojis = ['🎄', '🎄', '✨', '✨', '💡', '💡', '⭐', '🌟'];
    const newConfetti: Confetti[] = [];
    for (let i = 0; i < 60; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        emoji: xmasEmojis[Math.floor(Math.random() * xmasEmojis.length)],
        delay: Math.random() * 2.5,
        duration: 2 + Math.random() * 2,
      });
    }
    setConfetti(newConfetti);
  }, []);

  const spin = () => {
    setGameState('spinning');
    const currentSpin = spinCount + 1;
    setSpinCount(currentSpin);

    // Animate reels for 2 seconds
    const spinInterval = setInterval(() => {
      setReels([
        BREAD_ITEMS[Math.floor(Math.random() * BREAD_ITEMS.length)],
        BREAD_ITEMS[Math.floor(Math.random() * BREAD_ITEMS.length)],
        BREAD_ITEMS[Math.floor(Math.random() * BREAD_ITEMS.length)],
      ]);
    }, 100);

    // Stop spinning and determine outcome
    setTimeout(() => {
      clearInterval(spinInterval);

      if (currentSpin < 3) {
        // First two spins are losses - show mismatched reels
        const item1 = BREAD_ITEMS[0];
        const item2 = BREAD_ITEMS[1];
        const item3 = BREAD_ITEMS[2];
        setReels([item1, item2, item3]);

        if (currentSpin === 2) {
          // After second loss, prompt for Kelley
          setGameState('kelley');
        } else {
          setGameState('loser');
        }
      } else {
        // Third spin is the winner!
        const winningItem = BREAD_ITEMS[Math.floor(Math.random() * BREAD_ITEMS.length)];
        setReels([winningItem, winningItem, winningItem]);
        setWinPun(BREAD_PUNS[Math.floor(Math.random() * BREAD_PUNS.length)]);
        setGameState('winner');
        createConfetti();
        createElves();
      }
    }, 2000);
  };

  const revealGift = () => {
    setGameState('reveal');
  };

  const startGame = () => {
    setGameState('playing');
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Christmas Rain */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute top-0 text-2xl md:text-3xl animate-fall pointer-events-none"
          style={{
            left: `${c.x}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        >
          {c.emoji}
        </div>
      ))}

      {/* Exploding Christmas Items */}
      {elves.map((elf) => (
        <div
          key={elf.id}
          className="absolute text-4xl md:text-5xl animate-explode pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            ['--x' as string]: `${elf.x}px`,
            ['--y' as string]: `${elf.y}px`,
            ['--rotation' as string]: `${elf.rotation}deg`,
            animationDelay: `${elf.delay}s`,
          }}
        >
          {elf.id % 2 === 0 ? '🎄' : '🎅'}
        </div>
      ))}

      {/* Welcome Screen */}
      {gameState === 'welcome' && (
        <div className="text-center animate-fadeIn">
          <div className="text-6xl mb-6">🎄</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-amber-100">
            Tom & Kelley
          </h1>
          <p className="text-xl md:text-2xl text-amber-200/80 mb-8">
            The Duffys have a gift for you!
          </p>
          <button
            onClick={startGame}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xl rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Open Your Gift
          </button>
        </div>
      )}

      {/* Slot Machine */}
      {(gameState === 'playing' || gameState === 'spinning' || gameState === 'loser' || gameState === 'kelley') && (
        <div className="text-center animate-fadeIn">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-amber-100">
            The Bread Room
          </h2>
          <p className="text-amber-200/60 mb-8">Spin to reveal your prize!</p>

          {/* Slot Machine Frame */}
          <div className="bg-gradient-to-b from-amber-900 to-amber-950 p-6 rounded-2xl shadow-2xl border-4 border-amber-700 mb-8">
            <div className="bg-[#1a1a1a] p-4 rounded-xl flex gap-2 md:gap-4 justify-center">
              {reels.map((item, i) => (
                <div
                  key={i}
                  className={`w-20 h-24 md:w-28 md:h-32 bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg flex items-center justify-center text-5xl md:text-6xl shadow-inner ${
                    gameState === 'spinning' ? 'animate-pulse' : ''
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Loser message */}
          {gameState === 'loser' && (
            <p className="text-xl text-red-400 mb-6 animate-fadeIn">
              That was crumby... try again!
            </p>
          )}

          {/* Kelley prompt */}
          {gameState === 'kelley' && (
            <p className="text-xl text-amber-300 mb-6 animate-fadeIn">
              This is a tough loaf to crack...<br />
              Why don&apos;t you let Kelley give it a try?
            </p>
          )}

          <button
            onClick={spin}
            disabled={gameState === 'spinning'}
            className={`px-12 py-4 font-bold text-2xl rounded-full transition-all transform shadow-lg ${
              gameState === 'spinning'
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-500 hover:scale-105 text-white'
            }`}
          >
            {gameState === 'spinning' ? 'SPINNING...' : 'SPIN!'}
          </button>
        </div>
      )}

      {/* Winner Screen */}
      {gameState === 'winner' && (
        <div className="text-center animate-fadeIn">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-amber-300 animate-bounce">
            WINNER!
          </h2>

          {/* Show winning reels */}
          <div className="bg-gradient-to-b from-amber-900 to-amber-950 p-6 rounded-2xl shadow-2xl border-4 border-amber-500 mb-6">
            <div className="bg-[#1a1a1a] p-4 rounded-xl flex gap-2 md:gap-4 justify-center">
              {reels.map((item, i) => (
                <div
                  key={i}
                  className="w-20 h-24 md:w-28 md:h-32 bg-gradient-to-b from-amber-200 to-amber-300 rounded-lg flex items-center justify-center text-5xl md:text-6xl shadow-inner border-2 border-amber-400"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-amber-200 mb-8 font-semibold">
            {winPun}
          </p>

          <button
            onClick={revealGift}
            className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-xl rounded-lg transition-all transform hover:scale-105 shadow-lg animate-pulse"
          >
            Claim Your Prize!
          </button>
        </div>
      )}

      {/* Gift Card Reveal */}
      {gameState === 'reveal' && (
        <div className="text-center animate-fadeIn max-w-md w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-300">
            Merry Christmas!
          </h2>

          {/* Gift Card */}
          <div className="bg-gradient-to-br from-amber-800 to-amber-950 p-6 rounded-2xl shadow-2xl border-2 border-amber-600 mb-6">
            <div className="bg-[#5c3317] rounded-xl p-6 text-center">
              <p className="text-amber-100/80 text-sm mb-2">Gift Card to</p>
              <h3 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4" style={{ fontFamily: 'serif' }}>
                The Bread Room
              </h3>
              <div className="text-5xl md:text-6xl font-bold text-amber-200 mb-4">
                $150
              </div>
              <div className="border-t border-amber-700/50 pt-4 mt-4">
                <p className="text-amber-100 mb-1">For: <span className="font-semibold">Tom & Kelley</span></p>
                <p className="text-amber-200/80 italic text-sm mb-4">
                  &ldquo;Merry Christmas! Knead we say more? Happy Holidays!&rdquo;
                </p>
                <p className="text-amber-100/60 text-xs">- From The Duffys</p>
              </div>
            </div>
          </div>

          {/* Card Details */}
          <div className="bg-[#1a1a1a] p-4 rounded-xl text-left">
            <p className="text-amber-200/60 text-sm mb-2">Card Number:</p>
            <p className="text-xl font-mono text-amber-100 mb-4">8627 8416 9174 2343</p>
            <p className="text-amber-200/60 text-sm mb-2">PIN:</p>
            <p className="text-xl font-mono text-amber-100">4034</p>
          </div>

          <p className="text-amber-200/60 mt-6 text-sm">
            Redeem at The Bread Room
          </p>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fall {
          0% { transform: translateY(-50px) rotate(0deg); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes explode {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(0.3);
            opacity: 1;
          }
          15% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(-50% + var(--x)),
              calc(-50% + var(--y))
            ) rotate(var(--rotation)) scale(0.6);
            opacity: 0;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-fall {
          animation: fall 3s ease-in forwards;
        }
        .animate-explode {
          animation: explode 1.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
