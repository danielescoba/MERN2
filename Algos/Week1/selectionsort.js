/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1. This continues until all values are sorted.
  Unstable sort
  
  Time Complexity
    - Best:     O(n^2) quadratic
    - Average:  O(n^2) quadratic
    - Worst:    O(n^2) quadratic
  Space: O(1) constant
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example, you run selection sort for 10 iterations only to display the first 10 sorted items
*/

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
 * Best:    O(n^2) quadratic
 * Average: O(n^2) quadratic
 * Worst:   O(n^2) quadratic
 */

function selectionSort(nums, compareFunction = (a, b) => a - b){
  let best, i, bound;
  // outer loop allows us to locate and place each subsequent maximum with decrementation
  for (bound = nums.length-1; bound > 0; bound--){
      // Locate the max index within the array
      best = bound;
      for (i = 0; i < bound; i++){
          if (compareFunction(nums[i], nums[best]) > 0){
              best = i;
          }
      }
      // if the max element is not at the bound, move it to the bound
      if (best < bound){
          temp = nums[bound];
          nums[bound] = nums[best];
          nums[best] = temp;
      }
  }
  return nums;
}

function selectionSortDoubleEnded(nums, compareFunction = (a, b) => a - b){
  let i, j, min, max, start, end, bound;
  // outer loop allows us to locate and place each subsequent maximum with decrementation
  bound = nums.length-1;
  for (i = 0; i < bound; i++){
      // Locate the min and max index within the array
      start = i;
      end = bound - i;
      min = max = nums[end];
      for (j = start; j < end; j++){
          // check if the element is greater than the max
          if (compareFunction(nums[j], nums[max]) > 0){
              max = i;
          }
          // check if the element is less than the min
          else if (compareFunction(nums[j], nums[min]) < 0){
              min = i;
          }
      }
      // if the subsequent min and max are not in place, swap them into place.
      if (min > start){
        temp = nums[min];
        nums[min] = nums[start];
        nums[start] = temp;
      }
      if (max < end){
          temp = nums[max];
          nums[max] = nums[end];
          nums[end] = temp;
      }
      
  }
  return nums;
}


module.exports = { selectionSort };