/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var pool=[];
    for(i=0;i<nums.length;i++){
        if(pool.indexOf(nums[i])>=0){
            return true;
        }else{
            pool.push(nums[i]);
            if(pool.length>k){
                pool.shift();
            }
        }
    }
    return false;
};
