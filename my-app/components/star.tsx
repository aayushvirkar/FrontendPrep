import { Star } from "lucide-react";
export default function StarSymbol({
  isSelected,
  handleStarHover,
  handleSelection,
  starId,
}: {
  isSelected: boolean;
  handleStarHover: (id: number) => void;
  handleSelection: (id: number) => void;
  starId: number;
}) {
  return (
    <span
      role="button"
      className="cursor-pointer p-4 "
      onMouseOver={() => handleStarHover(starId)}
      onMouseLeave={() => handleStarHover(0)}
      onClick={() => handleSelection(starId)}
    >
      {isSelected ? (
        <Star className="fill-yellow-600 hover:scale-105" size={40} />
      ) : (
        <Star size={40} />
      )}
    </span>
  );
}
