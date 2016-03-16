/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort();
    var result=[];
    if(nums[0]!=nums[1]){result.push(nums[0]);}
    var i =1;
    while(i<nums.length-1){
        if(nums[i]!=nums[i-1] && nums[i]!=nums[i+1]){
            result.push(nums[i]);
            if(result.length==2){return result;}
        }
        i++;
    }
    result.push(nums[nums.length-1]);
    return result;
};



