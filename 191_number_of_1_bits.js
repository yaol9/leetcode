/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var found =n.toString(2).match(/1/g);
    return found==null?0:found.length;
};
