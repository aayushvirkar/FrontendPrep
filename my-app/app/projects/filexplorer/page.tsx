"use client";
import { explorer } from "@/data/folderStructure";
import { useState } from "react";
import MyFolder from "@/components/folder";

export type FolderStructure = {
  id: string;
  name: string;
  isFolder: boolean;
  items: {
    id: string;
    name: string;
    isFolder: boolean;
    items: {
      id: string;
      name: string;
      isFolder: boolean;
      items: {
        id: string;
        name: string;
        isFolder: boolean;
        items: never[];
      }[];
    }[];
  }[];
};

export default function FolderLayout() {
  const [data, setData] = useState(explorer);

  return <MyFolder explorer={data} />;
}
