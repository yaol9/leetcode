/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<0)return null;
    if(x==0)return 0;
    var i=1;
    while(i*i<=x){
        i++;
    }
    return i-1;
};
