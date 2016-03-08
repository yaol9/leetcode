/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x>0){
        var r = Number(x.toString().split("").reverse().join(""));
        return r<=2147483648?r:0;
    }else{
        var r = -Number((-x).toString().split("").reverse().join(""));
        return r>=-2147483648?r:0;
    }
    
};
