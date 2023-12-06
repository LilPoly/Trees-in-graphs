// Finding root of a tree
function findRootWithGivenVertex(pruferSequence, givenVertex) {
    const n = pruferSequence.length + 2;
    const degrees = Array(n).fill(1);

    for (const vertex of pruferSequence) {
        degrees[vertex - 1] += 1;
    }

    let root;
    if (!pruferSequence.includes(givenVertex)) {
        
        root = givenVertex;
    } else {
        
        for (const vertex of pruferSequence) {
            degrees[vertex - 1] += 1;
        }

        for (let i = 0; i < n; i++) {
           
            if (degrees[i] === 1) {
                root = i + 1;
                break;
            }
        }
    }

    return root;
}
// Example
const pruferSequence = [4, 4, 3, 6, 1, 6, 6, 2, 4];
const givenVertex = 2;
const root = findRootWithGivenVertex(pruferSequence, givenVertex);

console.log("Root:", root);

