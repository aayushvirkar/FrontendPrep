"use client";
import { explorer } from "@/data/folderStructure";
import { useState } from "react";
import MyFolder from "@/components/folder";
import useTraverseTree from "@/hooks/use-traverse-tree";

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

export type TreeNode = {};
export default function FolderLayout() {
  const [data, setData] = useState(explorer);
  const { insertNode, deleteNode, updateNode } = useTraverseTree();

  const handleInsertNode = (
    folderId: string,
    item: string,
    isFolder: boolean,
  ) => {
    const finalTree = insertNode(data, folderId, item, isFolder);

    setData(finalTree);
  };

  const handleDeleteNode = (folderId: string) => {
    const finalTree = deleteNode(data, folderId);
    setData(finalTree);
  };

  const handleUpdateNode = (folderId: string, item: string) => {
    const finalTree = updateNode(data, folderId, item);

    setData(finalTree);
  };

  return (
    <MyFolder
      handleInsertion={handleInsertNode}
      handleDeletion={handleDeleteNode}
      handleUpdation={handleUpdateNode}
      explorer={data}
    />
  );
}
