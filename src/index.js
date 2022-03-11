// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    let newArr = [];
    let row = "";
    for (let i = 0; i < matrix.length; i++) {
        for (let v = 0; v < matrix[i].length; v++) {
            if ((row = i % 2 === 0)) {
                v;
            } else {
                matrix[i].length - 1 - v;
            }
            newArr.push(matrix[i][row]);
        }
    }
    return newArr;
};
