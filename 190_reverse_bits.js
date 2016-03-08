/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    s = n.toString(2);
    
    s = "0".repeat(32-s.length)+s;
    
    return parseInt(s.split("").reverse().join(""),2);
};
