/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length==0){ return 0;}
    if(nums.indexOf(target)>=0){
        return nums.indexOf(target);    
    }else{
        for(var i=0;i<nums.length;i++){
            if(nums[i]>target){
                return i;
            }
        }
        return nums.length;
    }
};
