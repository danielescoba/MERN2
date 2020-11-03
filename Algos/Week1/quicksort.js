/* 
  Visualization https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
  Create a function that uses yesterday’s partition to fully sort an array in-place.
  Unstable sort
  
  Time Complexity
    - Best: O(n log(n)) linearithmic
    - Average: O(n log(n)) linearithmic
    - Worst: O(n^2) quadratic
  
  Space: O(1) constant
  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the last idx
  - later these params will be used to specify a sub section of the array to partition
  Steps:
    - start by partitioning the full array (use the previously built partition algo)
    - then partition the left side of the array (left of the returned partition idx) and the right side (right of the returned partition idx), recursively
*/

const { partition } = require("./partition");

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts @nums by mutating the array
 * @param   {Array<number>} nums
 *          In any order
 * @param   {number} left
 *          Index indicating the start of the slice of @nums being processed
 * @param   {number} right
 *          Index indicating the end of the slice of @nums being processed
 * @return  {Array<number>}
 *          @nums after being sorted
 * Best:    O(n log(n)) linearithmic
 * Average: O(n log(n)) linearithmic
 * Worst:   O(n^2) quadratic
 */
function quickSort(nums = [], left = 0, right = nums.length - 1) {
    //Check the recursive break case is if the subset of the array we're looking at is 1 element or nothing
    if(left >= right){
        return nums;
    }
    //We need to figure out where in the array is partitioned, so we call partition and that returned index
    let i = partition(nums, left, right);
    //then our recursive call to quicksot the left side of the partition
    quickSort(nums,left,i-1);
    //then right
    quickSort(nums,i+1,right);
    //then return array
    return nums;
}
let nums = [9,2,3,12,6,8,1];
console.log(quickSort(nums));

module.exports = { quickSort };
