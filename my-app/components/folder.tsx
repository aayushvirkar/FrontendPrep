import { FolderStructure } from "@/app/projects/filexplorer/page";
import { Button } from "@/components/ui/button";
import {
  Folder,
  File,
  Trash2,
  Pencil,
  FilePlus,
  FolderPlus,
} from "lucide-react";
import { KeyboardEvent, useState } from "react";

export default function MyFolder({
  explorer,
  handleInsertion,
  handleDeletion,
  handleUpdation,
}: {
  explorer: FolderStructure;
  handleInsertion: (folderId: string, item: string, isFolder: boolean) => void;
  handleDeletion: (folderId: string) => void;
  handleUpdation: (folderId: string, item: string) => void;
}) {
  const [isExpandalble, setIsExpandable] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: false,
  });
  const [showFileEdit, setShowFileEdit] = useState(false);

  const handleFileAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    if (e.key === "Enter" && target.value) {
      handleInsertion(explorer.id, target.value, showInput.isFolder);
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  const handleFileDelete = (e: Event) => {};

  const handleFileUpdate = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    if (e.key === "Enter" && target.value) {
      handleUpdation(explorer.id, target.value);
      setShowFileEdit(false);
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
        <div className="m-2 flex justify-between bg-gray-300">
          <div
            className="mr-4 flex cursor-pointer items-center"
            onClick={() => setIsExpandable(!isExpandalble)}
          >
            <Folder size={20} className="m-1" />{" "}
            {showFileEdit ? (
              <input
                className="mx-2"
                placeholder="Edit content..."
                autoFocus
                type="text"
                onBlur={() => setShowFileEdit(false)}
                onKeyDown={handleFileUpdate}
              />
            ) : (
              <span>{explorer.name}</span>
            )}
          </div>

          <div className="flex items-center justify-center">
            <Button
              className="w-18 m-1 h-6"
              size={"sm"}
              onClick={() => handleInput(true)}
            >
              <FolderPlus size={20} />
            </Button>
            <Button
              size={"sm"}
              className=" w-18 m-1 h-6"
              onClick={() => handleInput(false)}
            >
              <FilePlus size={20} />
            </Button>
            <Button
              size={"sm"}
              className="w-18 m-1 h-6"
              onClick={() => handleDeletion(explorer.id)}
            >
              <Trash2 size={20} />
            </Button>
            <Button
              size={"sm"}
              className="w-18 m-1 h-6"
              onClick={() => setShowFileEdit(true)}
            >
              <Pencil size={20} />
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
            <MyFolder
              explorer={item}
              key={item.id}
              handleInsertion={handleInsertion}
              handleDeletion={handleDeletion}
              handleUpdation={handleUpdation}
            />
          ))}
        </div>
      </div>
    );
  } else
    return (
      <span className=" my-2 ml-2 flex">
        <File size={20} />{" "}
        {showFileEdit ? (
          <input
            className="mx-2"
            placeholder="Edit content..."
            autoFocus
            type="text"
            onBlur={() => setShowFileEdit(false)}
            onKeyDown={handleFileUpdate}
          />
        ) : (
          <span>{explorer.name}</span>
        )}
        <Button
          size={"sm"}
          className="w-18 m-1 h-6"
          onClick={() => handleDeletion(explorer.id)}
        >
          <Trash2 size={20} />
        </Button>
        <Button
          size={"sm"}
          className="w-18 m-1 h-6"
          onClick={() => setShowFileEdit(true)}
        >
          <Pencil size={20} />
        </Button>
      </span>
    );
}
