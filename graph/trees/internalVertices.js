// Finding internal vertices of a tree
function findInternalVertices(pruferSequence){
    const n = pruferSequence.length + 2;
    const degrees = Array(n).fill(1);

    for (const vertex of pruferSequence) {
        degrees[vertex - 1] += 1;
    }

    const internalVertices = [];
    for (let i = 0; i < n; i++) {
        if (degrees[i] !== 1) {
            internalVertices.push(i + 1);
        }
    }

    return internalVertices;
// Example
}
const pruferSequence = [4,4,3,6,1,6,6,2,4];
const internalVertices = findInternalVertices(pruferSequence);

console.log("Internal Vertices:", internalVertices);