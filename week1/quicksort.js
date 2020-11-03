const {partition} = require("./partition")

function quickSort(arr, left=0, right=arr.length-1){
    if(left >= right){
        return;
    }
    let i = partition(arr, left, right);
    quickSort(arr, left, i-1);
    quickSort(arr, i+1, right);
    return arr;
}


let arr = [9,2,3,12,6,8,1];
console.log(quickSort(arr));

