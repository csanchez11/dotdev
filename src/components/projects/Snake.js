import { useState, useRef, useEffect } from 'react'


export default function SnakeApp() {
  const canvasRef = useRef(null)
  const ctxRef = useRef()
  const appleRef = useRef({})
  const snakeRef = useRef([{}])
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(Number(localStorage.getItem("highScore")) || 0)
  const pixel = 20;

  const moveTime = 200;
  let intervalId;

  const gameOver = () => {
    // game over animation
    clearInterval(intervalId)
    setScore(0);
    alert('Game Over')
    createBoard()
    createSnake()
    createApple()
  }

  const createBoard = () => {
    ctxRef.current.clearRect(0,0,300,300)
    ctxRef.current.fillStyle = "grey";
    for (let x = 0; x < 16; x++){
      let xPos = x * pixel
      let yPos = x * pixel
      ctxRef.current.fillRect(xPos, 0, 1, 300);
      ctxRef.current.fillRect(0, yPos, 300, 1);
    }
  }

  const createSnake = () => {
    snakeRef.current = [];
    if (!ctxRef.current) return
    ctxRef.current.fillStyle = 'blue';
    const randX = Math.floor(Math.random() * 15) * pixel;
    const randY = Math.floor(Math.random() * 15) * pixel;
    ctxRef.current.fillRect(randX, randY, pixel, pixel);
    snakeRef.current = [{
      x: randX,
      y: randY
    }]
  }

  const createApple = () => {
    if (!ctxRef.current) return
    ctxRef.current.fillStyle = 'red';
    const randX = Math.floor(Math.random() * 15) * pixel;
    const randY = Math.floor(Math.random() * 15) * pixel;
    ctxRef.current.fillRect(randX, randY, pixel, pixel);
    appleRef.current = {
      x: randX,
      y: randY
    }
    ctxRef.current.fillStyle = 'blue';
  };

  const redrawBoard = () => {
    createBoard()
    ctxRef.current.fillStyle = 'red';
    ctxRef.current.fillRect(appleRef.current.x, appleRef.current.y, pixel, pixel);
    ctxRef.current.fillStyle = 'blue';
    // If you hit the apple, add score, create new apple and let the snake grow
    if (snakeRef.current[0].x === appleRef.current.x && snakeRef.current[0].y === appleRef.current.y) {
      setScore(prev => {
        setHighScore(previousHigh => {
          let newHighScore = Math.max(previousHigh, prev + 1);
          localStorage.setItem('highScore', newHighScore.toString())
          return newHighScore
        })
        return prev + 1
      });
      createApple()
    } else { // else snake should remain same size
      snakeRef.current.pop()
    }
    const cache = new Map()
    for(let x = 0; x < snakeRef.current.length; x++){
      const coord = snakeRef.current[x];
      if (cache.has(JSON.stringify(coord))){
        cache.clear();
        gameOver();
        break;
      } else {
        cache.set(JSON.stringify(coord), true);
        ctxRef.current.fillRect(coord.x, coord.y, pixel, pixel);
      }
    }
  }

  const keyDownListener = (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    if(intervalId){
      clearInterval(intervalId)
      intervalId = null
    }
    let curr;
    switch (event.key) {
      case "ArrowUp":
        intervalId = setInterval(() => {
          curr = snakeRef.current[0];
          snakeRef.current.unshift({
            x: curr.x,
            y: curr.y !== 0 ? curr.y - pixel : 0
          })
          redrawBoard()
        }, moveTime)
        break;
      case "ArrowDown":
        intervalId = setInterval(() => {
          curr = snakeRef.current[0];
          snakeRef.current.unshift({
            x: curr.x,
            y: curr.y !== 280 ? curr.y + pixel : 280
          })
          redrawBoard()
        }, moveTime)
        break;
      case "ArrowLeft":
        intervalId = setInterval(() => {
          curr = snakeRef.current[0];
          snakeRef.current.unshift({
            x: curr.x !== 0 ? curr.x - pixel : 0,
            y: curr.y
          })
          redrawBoard()
        }, moveTime)
        break;
      case "ArrowRight":
        intervalId = setInterval(() => {
          curr = snakeRef.current[0];
          snakeRef.current.unshift({
            x: curr.x !== 280 ? curr.x + pixel : 280,
            y: curr.y
          })
          redrawBoard()
        }, moveTime)
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
      event.preventDefault();
  };
  const restartGame = () => {
    gameOver()
  };

  const clearHighScore = () => {
    localStorage.setItem('highScore', '0');
    setHighScore(0);
  }

  useEffect(() => {

    const canvas = canvasRef.current;
    if (!canvas) return
    const ctx = canvas.getContext("2d");
    if(!ctx) return
    ctxRef.current = ctx
    createBoard();
    createSnake()
    createApple()

    document.addEventListener('keydown', keyDownListener);

    return () => document.removeEventListener('keydown', keyDownListener)
  }, [])

  return (
    <div className="game-container">
      <div className='score'>High Score: {highScore}</div>
      <div className='score'>Score: {score}</div>
      <canvas ref={canvasRef} id="gameCanvas" width={300} height={300} />
      <button className='px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium' onClick={restartGame}>Restart</button>
      <button className='px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium'  onClick={clearHighScore}>Clear High Score</button>
    </div>
  );
}
