/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    var found = n.toString(2).match(/^10*$/);
    return found==null?false:true;
};
