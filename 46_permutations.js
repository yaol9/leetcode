/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    var result = [];
    if(nums.length==1){
        result.push(nums);
        return result;
    }
    for(var i=0;i<nums.length;i++){
        var temp = nums.slice();
        var begin = temp.splice(i,1);
        var tempr = permute(temp);
        for(j=0;j<tempr.length;j++){
            tempr[j].push(begin[0]);
        }
        result = result.concat(tempr);
    }
    return result;
};
