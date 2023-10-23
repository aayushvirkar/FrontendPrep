import { FolderStructure } from "@/app/projects/filexplorer/page";
import { useId } from "react";
const useTraverseTree = () => {
  const memo = new Map(); // Memoization table to store computed results

  const id = useId();
  function insertNode(
    tree: FolderStructure,
    folderId: string,
    item: string,
    isFolder: boolean,
  ) {
    if (memo.has(tree.id)) {
      return memo.get(tree.id);
    }
    if (tree.id === folderId && tree.isFolder) {
      if (isFolder) {
        tree.items.unshift({
          id: id,
          name: item,
          isFolder,
          items: [],
        });
      } else {
        tree.items.push({
          id: id,
          name: item,
          isFolder,
          items: [],
        });
      }
      memo.set(tree.id, tree); // Store the result in the memo table
      return tree;
    }

    const latestNode: FolderStructure[] = tree.items.map((itemObj) => {
      return insertNode(itemObj, folderId, item, isFolder);
    });

    const updatedTree = { ...tree, items: latestNode };
    memo.set(tree.id, updatedTree);
    return updatedTree;
  }

  function deleteNode(tree: FolderStructure, folderId: string) {}

  function updateNode(tree: FolderStructure, folderId: string, item: string) {
    if (tree.id == folderId) {
      tree.name = item;
      return tree;
    }

    const latestNode: FolderStructure[] = tree.items.map((itemObj) => {
      return updateNode(itemObj, folderId, item);
    });

    const updateTree = { ...tree, items: latestNode };

    return updateTree;
  }

  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
