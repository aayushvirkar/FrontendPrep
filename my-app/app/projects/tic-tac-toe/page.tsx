import Square from "@/components/square";

export default function TicTacToe() {
  return (
    <div className="flex border-2 border-slate-300">
      <div className="border-2 border-slate-300 ">
        <Square content={"X"} />
        <Square content={"X"} />
        <Square content={"X"} />
      </div>
      <div className="border-2 border-slate-300">
        <Square content={"O"} />
        <Square content={"O"} />
        <Square content={"O"} />
      </div>
      <div className="border-2 border-slate-300">
        <Square content={""} />
        <Square content={"X"} />
        <Square content={"X"} />
      </div>
    </div>
  );
}
