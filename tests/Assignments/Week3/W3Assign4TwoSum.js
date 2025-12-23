/*Assignment Details:
Given the array, const nums = [2, 4, 7, 8, 11, 14];
const target = 18;
return the indices that have matching targets >> 7+11 (2, 4), 4+14 (1, 5)
Assignment Requirements:
1. Initialize an empty array `results`.
2. Use a nested loop to iterate over `nums` array elements.
3. Check if the sum of two distinct elements equals `target`.
4. If true, add their indices to `results`.
5. Return `results` containing pairs of indices*/
const nums = [2, 4, 7, 8, 11, 14];
const target = 18;
function twoSumIndices(nums, target) {
    const results = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                results.push([i, j]);
            }
        }
    }
    return results;
}
console.log(twoSumIndices(nums, target));
// Expected Output: [ [ 2, 4 ], [ 1, 5 ] ]  
