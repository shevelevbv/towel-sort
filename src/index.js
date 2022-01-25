// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return [];
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let subMatrix = matrix[i];
        if (i % 2) {
            subMatrix.sort((a, b) => b - a);
        } else {
            subMatrix.sort((a, b) => a - b);
        }
        result = result.concat(subMatrix);
    }
    return result;
}


