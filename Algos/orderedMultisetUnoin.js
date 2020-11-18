/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param  {Array<number>} sortedA
 * @param  {Array<number>} sortedB
 *         @sortedA and @sortedB are both sorted multisets (contain dupes)
 * @return {Array<number>}
 *         An ordered multiset union of @sortedA and @sortedB
 *         The return should include dupes, but the amount of dupes for each int should be based on
 *         the max amount that dupe appears from one set, not the combined amount from both sets.
 * Time:   O(...)
 * Space:  O(...)
 */
function orderedMultisetUnion(sortedA, sortedB) {
    let newArr = [];
    dict1 = {};
    dict2 = {};
}

module.exports = { orderedMultisetUnion };