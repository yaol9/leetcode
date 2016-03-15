/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(function(a, b) {
        return parseInt(a.toString()+b.toString())-parseInt(b.toString()+a.toString());
    });
    var n = '';
    for(var i=nums.length-1;i>=0;i--){
        n+=nums[i];
    }
    while(n.charAt(0)=='0'){
        n=n.slice(1);
    }
    return n==''?'0':n;
};
