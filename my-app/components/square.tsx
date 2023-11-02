export default function Square({ content }: { content: string }) {
  return (
    <div className="border-y-2 border-slate-300 p-10 hover:bg-slate-200 ">
      <div className="h-10 w-10 text-6xl">{content}</div>
    </div>
  );
}
