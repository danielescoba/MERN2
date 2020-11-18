// Write a function that takes 2 arrays as parameters, and returns the symmetric difference.

// The symmetric difference, looking back to the venn diagram, is the elements in the OUTER
// sections, and NOT the intersection.

// Duplicates should only be included once.

// EXAMPLE:
// symmetric_difference([3,1,4,6,3,9], [5,6,1,5,4,8,7]) would return
// [3, 5, 7, 8, 9]
function symmetric_difference(arr1, arr2){
    // the EASIEST way to do this in the most efficient way in terms of time complexity is going
    // to be two dictionaries
    let vals1 = {};
    let vals2 = {};
    let symdif = [];

    // Loop through the first array, populating the first dictionary
    for(let i of arr1) {
        vals1[i] = i;
    }
    // Loop through the second array, populating the second dictionary
    for(let i of arr2) {
        vals2[i] = i;
    }

    // Now, we want to loop through the key/value pairs in the first dictionary
    for(let i in vals1){
        // And check to see if that value exists in the second dictionary
        if(vals2[i] !== vals1[i]){ // alternative -> !vals2.hasOwnProperty(i);
            // if it does not, we'll add it to the symdif array
            symdif.push(vals1[i]);
        }
    }
    // And now, the same thing through the second dictionary, checking against the first dictionary
    for(let i in vals2){
        if(vals1[i] !== vals2[i]){
            symdif.push(vals2[i]);
        }
    }
    return symdif;
}

console.log(symmetric_difference([3,1,4,6,3,9],[5,6,1,5,4,8,7]));