"use client";
import Square from "@/components/square";
import { useState } from "react";
import { PartyPopper, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [squares, setSquares] = useState<(null | string)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  function calculateWinner(squares: (null | string)[]) {
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
        return squares[a];
      }
    }
    return null;
  }

  function handleSquares(index: number) {
    setCurrentMove((currentMove) => currentMove + 1);
    const isNextPlayerX = currentMove % 2 === 0;

    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const modifiedSquares = squares.slice();

    modifiedSquares[index] = isNextPlayerX ? "X" : "O";
    setSquares(modifiedSquares);
    setHistory((prevHistory) => [...prevHistory, modifiedSquares]);
  }

  const winner = calculateWinner(squares);
  const isNextPlayerX = currentMove % 2 === 0;

  let content = winner ? (
    <span className="flex items-center justify-center">
      Winner is <b className="mx-2">{winner}</b>{" "}
      <PartyPopper className="mx-2 fill-orange-400" size={30} />
    </span>
  ) : (
    `Next player is ${isNextPlayerX ? "X" : "O"} `
  );
  if (currentMove === 9 && !winner) {
    content = (
      <span className="flex items-center justify-center">
        Its a Draw!{" "}
        <HeartHandshake className="mx-2 fill-orange-400" size={30} />
      </span>
    );
  }

  return (
    <>
      <div className="m-2 text-center text-xl">{content}</div>
      <div className="flex border-2 border-slate-400">
        <div className="border-2 border-slate-400 ">
          <Square content={squares[0]} onSquareClick={() => handleSquares(0)} />
          <Square content={squares[1]} onSquareClick={() => handleSquares(1)} />
          <Square content={squares[2]} onSquareClick={() => handleSquares(2)} />
        </div>
        <div className="border-2 border-slate-400">
          <Square content={squares[3]} onSquareClick={() => handleSquares(3)} />
          <Square content={squares[4]} onSquareClick={() => handleSquares(4)} />
          <Square content={squares[5]} onSquareClick={() => handleSquares(5)} />
        </div>
        <div className="border-2 border-slate-400">
          <Square content={squares[6]} onSquareClick={() => handleSquares(6)} />
          <Square content={squares[7]} onSquareClick={() => handleSquares(7)} />
          <Square content={squares[8]} onSquareClick={() => handleSquares(8)} />
        </div>
      </div>
      <div className="my-8 flex max-w-[365px] flex-row flex-wrap">
        {history.map((record, index) => {
          return (
            <Button
              onClick={() => setSquares(history[index])}
              className="my-2 ml-2 text-xs"
              size={"sm"}
            >
              Go to {index === 0 ? "the Start" : `move ${index}`}
            </Button>
          );
        })}
      </div>
    </>
  );
}
