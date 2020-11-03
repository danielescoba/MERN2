/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

/**
 * Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param   {Array<number>} sortedA
 * @param   {Array<number>} sortedB
 *          @sortedA and @sortedB are both sorted multisets
 *          (multi in that it can contain multiple dupes)
 * @return  {Array<number>}
 *          The sorted set intersection: a new array that
 *          is sorted and contains only the shared values
 *          between the two arrays deduped
 * Time:    O(...)
 * Space:   O(...)
 */
function orderedIntersection(sortedA, sortedB) {
    let indexA = 0;
    let indexB = 0;
    let inter = [];
    while(indexA < sortedA.length && indexB < sortedB.length){
        if(sortedA[indexA] == sortedB[indexB]){
            if(inter[inter.length-1] != sortedA[indexA]){
                inter.push(sortedA[indexA]);
            }
            indexA++;
            indexB++;
        }
        else if(sortedA[indexA] < sortedB[indexB]){
            indexA++;
        }
        else{
            indexB++;
        }
    }
    return inter;
}
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];
console.log(orderedIntersection(numsA1, numsB1))

module.exports = { orderedIntersection };

function ordered(left, right){
  const array1 = new Set(left);
  const array2 = new Set(right);
  
  result = [];
  indexLeft = 0;
  indexRight = 0;

  while (indexLeft < array1.length && indexRight < array2.length){
    if (array1[indexLeft] == array2[indexRight]){
      result.push(array1[indexLeft]);
      indexRight++;
      indexLeft = 0;
    } 
    if(indexLeft == array1.length){
      indexLeft = 0;
      indexRight++;
    } else {
      indexLeft++;
    }
    return result;
  }
}