/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    var i=0;
    while(i<=nums.length){
        if(nums.lastIndexOf(nums[i])-i+1 >= nums.length/2){
            return nums[i];
        }else{
            i=nums.lastIndexOf(nums[i])+1;
        }
    }
};
