export default function Square({
  content,
  onSquareClick,
}: {
  content: string;
  onSquareClick: () => void;
}) {
  return (
    <div
      role="button"
      className="cursor-pointer border-y-2 border-slate-300 p-10 hover:bg-slate-200"
      onClick={onSquareClick}
    >
      <div className="h-10 w-10 text-6xl">{content}</div>
    </div>
  );
}
