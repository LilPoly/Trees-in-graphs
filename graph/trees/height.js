// Finding height of a tree
function findHeight(adjacencyList, root) {
    const visited = new Set();

    function dfs(node) {
        visited.add(node);

        const children = adjacencyList[node] || [];
        let maxHeight = 0;

        for (const child of children) {
            if (!visited.has(child)) {
                const height = 1 + dfs(child);
                maxHeight = Math.max(maxHeight, height);
            }
        }

        return maxHeight;
    }

    return dfs(root);
}
// Example
const pruferSequence = [4, 4, 3, 6, 1, 6, 6, 2, 4];
const root = 2;


const adjacencyList = {
    1: [9, 6],
    2: [6,4],
    3: [8,6],
    4: [2, 5, 7, 11],
    6: [2, 1, 10, 3],
    7: [4],
    8: [3],
    9: [1],
    10: [6],
    11: [4]

};

const height = findHeight(adjacencyList, root);
console.log("Height:", height);
