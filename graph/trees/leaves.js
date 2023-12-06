// Finding tree leaves
function findLeaves(pruferSequence) {
    const n = pruferSequence.length + 2;
    const degrees = Array(n).fill(1);

    for (const vertex of pruferSequence) {
        degrees[vertex - 1] += 1;
    }

    const leaves = [];
    for (let i = 0; i < n; i++) {
        if (degrees[i] === 1) {
            leaves.push(i + 1);
        }
    }

    return leaves;
}
// Example
const pruferSequence = [4,4,3,6,1,6,6,2,4];
const leaves = findLeaves(pruferSequence);

console.log("Leaves:", leaves);