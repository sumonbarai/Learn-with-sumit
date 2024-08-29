import { useState } from "react";
import Square from "./Square";
import calculateWinner from "../utilities/calculateWinner";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next player ${isNext ? "X" : "0"}`;
  }

  const handleClick = (index) => {
    // checking square is already click or not
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const nextValue = squares.slice();
    if (isNext) {
      nextValue[index] = "X";
      setIsNext(!isNext);
    } else {
      nextValue[index] = "0";
      setIsNext(!isNext);
    }
    setSquares(nextValue);
  };

  return (
    <div className="board">
      <h2>{status}</h2>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default Board;
