/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    pos = nums.lastIndexOf(0);
    if(pos>=0){
        nums.splice(pos,1);
        moveZeroes(nums);
        nums.push(0);
    }
};
