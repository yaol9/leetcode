/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return num.toString(2).match(/^1(00)*$/)?true:false;
};
