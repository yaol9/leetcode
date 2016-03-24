/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for(var i=0;i<nums.length;i++){
        if(i==0){
            if(nums.length>1){
                 if( nums[0]>nums[1] ){
                     return 0;
                 }
            }else{
                return 0;
            }
            
        }
        if(i==nums.length-1 && nums[nums.length-1]>nums[nums.length-2]){
            return nums.length-1;
        }
        if(nums[i]>nums[i-1] && nums[i]>nums[i+1]){
            return i;
        }
    }
};
