/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while(k>nums.length){
    	k-=nums.length;
    }
    nums2 = nums.splice(0,nums.length-k);
    for(var i=0;i<nums2.length;i++){
        nums.push(nums2[i]);
    }
};
