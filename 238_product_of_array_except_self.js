/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var left=[];
    var right=[];
    var result=[];
    
    var ltemp=null;
    for(var i=0;i<nums.length;i++){
        left[i]=ltemp==null?1:ltemp;
        if(ltemp==null){
            ltemp = nums[i];
        }else{
            ltemp *= nums[i];
        }
    }
    
    var rtemp=null;
    for(var i=nums.length-1;i>=0;i--){
        right[i]=rtemp==null?1:rtemp;
        if(rtemp==null){
            rtemp = nums[i];
        }else{
            rtemp *= nums[i];
        }
    }
    
    for(var i=0;i<nums.length;i++){
        result[i]=left[i]*right[i];
    }
    
    return result;
    
};
