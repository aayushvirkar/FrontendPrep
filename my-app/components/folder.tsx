import { FolderStructure } from "@/app/projects/filexplorer/page";
import { Button } from "@/components/ui/button";
import { Folder, File } from "lucide-react";
import { KeyboardEvent, useState } from "react";

export default function MyFolder({ explorer }: { explorer: FolderStructure }) {
  const [isExpandalble, setIsExpandable] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: false,
  });

  const handleFileAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    if (e.key === "Enter" && target.value) {
      //add logic
      setShowInput({ ...showInput, isVisible: false });
    }
  };
  const handleInput = (fileType: boolean) => {
    setIsExpandable(true);
    setShowInput({
      isVisible: true,
      isFolder: fileType,
    });
  };
  if (explorer.isFolder) {
    return (
      <div>
        <div className="flex justify-between bg-gray-300 m-2">
          <div
            className="flex items-center cursor-pointer mr-4"
            onClick={() => setIsExpandable(!isExpandalble)}
          >
            <Folder size={20} className="m-1" /> <span>{explorer.name}</span>
          </div>

          <div>
            <Button
              className="m-1 w-18 h-6"
              size={"sm"}
              onClick={() => handleInput(true)}
            >
              Folder +
            </Button>
            <Button
              size={"sm"}
              className="w-18 h-6"
              onClick={() => handleInput(false)}
            >
              File +
            </Button>
          </div>
        </div>
        {showInput.isVisible ? (
          <div className="ml-4 flex">
            {showInput.isFolder ? <Folder size={20} /> : <File size={20} />}
            <input
              className="mx-2"
              placeholder="Add content..."
              autoFocus
              type="text"
              onBlur={() => setShowInput({ ...showInput, isVisible: false })}
              onKeyDown={handleFileAdd}
            />
          </div>
        ) : null}
        <div className={`${isExpandalble ? "" : "hidden"} ml-4`}>
          {explorer.items.map((item) => (
            <MyFolder explorer={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  } else
    return (
      <span className=" flex my-2 ml-2">
        <File size={20} /> {explorer.name}
      </span>
    );
}
