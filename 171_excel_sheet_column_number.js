/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var n = s.length;
    var num = 0;
    for(var i=0;i<s.length;i++){
        num+=(s[i].charCodeAt(0)-64)*Math.pow(26,n-i-1);
    }
    return num;
};
