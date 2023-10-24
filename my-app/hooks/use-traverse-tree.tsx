import { FolderStructure } from "@/app/projects/filexplorer/page";
const useTraverseTree = () => {
  const memo = new Map(); // Memoization table to store computed results
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
      const treeClone = structuredClone(tree);

      if (isFolder) {
        treeClone.items.unshift({
          id: new Date().getTime().toString(),
          name: item,
          isFolder,
          items: [],
        });
      } else {
        treeClone.items.push({
          id: new Date().getTime().toString(),
          name: item,
          isFolder,
          items: [],
        });
      }
      memo.set(treeClone.id, treeClone); // Store the result in the memo table
      return treeClone;
    }

    const latestNode: FolderStructure[] = tree.items.map((itemObj) => {
      return insertNode(itemObj, folderId, item, isFolder);
    });

    const updatedTree = { ...tree, items: latestNode };
    memo.set(tree.id, updatedTree);
    return updatedTree;
  }

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

  function deleteNode(tree: FolderStructure, folderId: string) {
    const deletedItems = tree.items.filter(
      (itemObj) => itemObj.id !== folderId,
    );

    if (deletedItems.length === tree.items.length) {
      const temp: FolderStructure[] = tree.items.map((itemObj) =>
        deleteNode(itemObj, folderId),
      );

      return { ...tree, items: temp };
    }

    return { ...tree, items: deletedItems };
  }

  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
