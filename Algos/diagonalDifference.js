/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];
  const expected = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */
  
  /**
   * Calculates the absolute diagonal difference of a square matrix
   * @param   {Array<Array<number>>} sqrMatrix
   *          2d array of numbers representing a square matrix (rows and columns)
   * @return  {number}
   *          Represents the absolute (Math.abs) difference between
   *          the top left to bottom right diagonal and the top right to bottom left diagonal
   * Time:    O(...)
   * Space:   O(...)
   */
  function diagonalDifference(sqrMatrix) {
      let sum1 = 0;
      let sum2 = 0;
      for (let i = 0; i < sqrMatrix.length;i++){
          sum1 += sqrMatrix[i][i];
          sum2 += sqrMatrix[i][sqrMatrix.length-1-i];
      }
      return Math.abs(sum2 - sum1)
  }
  const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];
  console.log(diagonalDifference(squareMatrix));
  module.exports = { diagonalDifference };