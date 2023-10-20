"use client";
import { Button } from "@/components/ui/button";
import { explorer } from "@/data/folderStructure";
import { Folder, File } from "lucide-react";
export default function FolderLayout() {
  return explorer.items.map((record) => {
    return (
      <div className=" my-3 flex gap-3 bg-gray-300 justify-between">
        <div className="flex justify-center items-center">
          {record.isFolder ? <Folder size={20} /> : <File size={20} />}
          <span className="mx-2">{record.name}</span>
        </div>

        <div>
          <Button className="m-1" size={"sm"}>
            Folder +
          </Button>
          <Button size={"sm"}>File +</Button>
        </div>
      </div>
    );
  });
}
