"use client";
import Square from "@/components/square";
import { useState } from "react";

export default function TicTacToe() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  //[x,o,x,o,x]
  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        const winner = player ? "X" : "O";
        setWinner(winner);
      }
    }
  }

  function handleSquares(index: number) {
    if (squares[index]) {
      return;
    }
    const newArr = [...squares];
    newArr[index] = player ? "X" : "O";
    setSquares(newArr);
    setPlayer(!player);

    if (newArr.filter((record) => record !== "").length >= 5) {
      calculateWinner(newArr);
    }
  }

  return (
    <>
      {winner ? <div>Winner is {winner}</div> : null}

      <div className="flex border-2 border-slate-300">
        <div className="border-2 border-slate-300 ">
          <Square content={squares[0]} onSquareClick={() => handleSquares(0)} />
          <Square content={squares[1]} onSquareClick={() => handleSquares(1)} />
          <Square content={squares[2]} onSquareClick={() => handleSquares(2)} />
        </div>
        <div className="border-2 border-slate-300">
          <Square content={squares[3]} onSquareClick={() => handleSquares(3)} />
          <Square content={squares[4]} onSquareClick={() => handleSquares(4)} />
          <Square content={squares[5]} onSquareClick={() => handleSquares(5)} />
        </div>
        <div className="border-2 border-slate-300">
          <Square content={squares[6]} onSquareClick={() => handleSquares(6)} />
          <Square content={squares[7]} onSquareClick={() => handleSquares(7)} />
          <Square content={squares[8]} onSquareClick={() => handleSquares(8)} />
        </div>
      </div>
    </>
  );
}
