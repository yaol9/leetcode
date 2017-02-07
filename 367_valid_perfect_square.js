/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for(i=1; i<=num; i++) {
        if (num == i*i) {
            return true;
        } else if (num < i*i) {
            return false;
        }
    }
    return false;
};
