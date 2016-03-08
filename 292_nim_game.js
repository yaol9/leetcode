/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if(n>0){
        return n%4==0?false:true;
    }else{
        return false;
    }
};
