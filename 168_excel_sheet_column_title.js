/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = '';
    while(n>0){
        var temp = n%26==0?26:n%26;
        result=String.fromCharCode(temp+64)+result;
        n-=temp;
        n/=26;
    }
    return result;
};
