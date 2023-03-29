
// First initialize total sum and return var.
// Then, iterate each element in nums var.
// Keep on adding sum to the prev value 
// Keep on pushing new sum value to return array
// Return new array

var nums = [1,2,3,4]
console.log("nums:", nums)

var runningSum = function(nums) {

    let sums = 0;
    let totalSum = [];

    for (let i of nums) {
        sums += i;
        totalSum.push(sums);
    };
    return totalSum;
};

console.log("Running Sum Array:", runningSum(nums));