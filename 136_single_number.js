/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort();
    
    if(nums[0]!=nums[1])return nums[0];
    var i =1;
    while(i<nums.length-1){
        if(nums[i]!=nums[i-1] && nums[i]!=nums[i+1]){
            return nums[i];
        }else{
            i++;
        }
    }
    return nums[nums.length-1];
};
