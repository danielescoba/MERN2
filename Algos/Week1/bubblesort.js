// Stable sort

// Time Complexity
//   - Best:     O(n) linear when array is already sorted
//   - Average:  O(n^2) quadratic
//   - Worst:    O(n^2) quadratic when the array is reverse sorted
// Space: O(1) constant
// For review, create a function that uses BubbleSort to sort an unsorted array in-place.
// For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
// */

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
* Sorts @nums by mutating the array
* @param   {Array<number>} nums
*          In any order
* @return  {Array<number>}
*          @nums after being sorted
* Best:    O(n) linear when array is already sorted
* Average: O(n^2) quadratic
* Worst:   O(n^2) quadratic when the array is reverse sorted
*/

function bubbleSort(nums, compareFunction = (a, b) => a - b){
    let temp, i, bound, sorted;
    // sorted boolean allows us to terminate early when the array is found to be sorted.
    // On each pass the maximum value is pushed to the end
    // As such the outer loop is a decremented upperbound
    sorted = false;
    for (bound = nums.length-1; bound > 0 && !sorted; bound--){
        // The inner loop iterates to the bound swapping adjacent elements when nums[i] > nums[i+1]
        sorted = true;
        for (i = 0; i < bound; i++){
            if (compareFunction(nums[i], nums[i+1]) > 0){
                sorted = false;
                temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }
        }
    }
    return nums;
}

module.exports = { bubbleSort };