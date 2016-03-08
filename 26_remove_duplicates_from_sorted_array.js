/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length==0)return 0;
    pos = 1;
    val = nums[0];
    for(i=1;i<nums.length;i++){
    	if(nums[i]==val){
    	    
    	}else{
    	    nums[pos]=nums[i];
    	    pos=pos+1;
    	    val=nums[i];
    	}
    	
    }
    return pos;
};
