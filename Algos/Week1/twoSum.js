// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the numbers that add up to @targetSum
 * @param  {Array<number>} nums - Any order
 * @param  {number} targetSum
 * @return {Array<number>}
 *         The two indexes of the numbers in @nums that add up to @targetSum
 * Time:   O(...)
 * Space:  O(...)
 */
// function twoSum(nums, targetSum) {}

function twoSum2(nums, targetSum) {
    let sum = 0;
    let i, j; 
    const res = []; 
    
    for (i=0; i<nums.length; i++){
      if (nums[i] <= targetSum){
        for(j=0; j<i; j++){
          sum = nums[i] + nums[j]; 
          if (sum === targetSum){
            res.push(i); 
            res.push(j); 
            return res;
          }
        }
      }
    }
  
    return ("NO match Found")
  
  }
const nums1 = [2, 11, 7, 15,-2];
const targetSum1 = 9;

console.log(twoSum2(nums1, targetSum1));

module.exports = { twoSum };

function twoSum(arr, target){
    // We'll be using a dictionary for this.
    // We'll use the elements in the array as the keys, and the
    // indices of those elements as the values
    let nums = {};

    // Loop through the array
    for(let i = 0; i < arr.length; i++){
        // The trick here is that if the current element can be added to another previous element to add up to 
        // our target, then that other number must already be in the dictionary. So we check to see
        // if an entry in the dictionary exists with a key of target minus the curent element
        console.log(nums)
        if(nums[target-arr[i]] != undefined){
            // If that entry exists, return an array with the value of that kv pair (its index), and the current 
            // index we're looking at
            return [nums[target-arr[i]], i]
        }
        // Otherwise, let's add the current element and index to the dictionary
        nums[arr[i]] = i;
    }

    // If we finish that loop without finding a sum, return an empty array.
    return [];
}

console.log(twoSum([2,11,7,15],9));


