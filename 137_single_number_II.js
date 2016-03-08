/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    for(i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])==i){
            if(nums.indexOf(nums[i],i+1)<0){
                return nums[i];   
            }
        }
    }
};
