/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    while(num>=10){
        num = eval(num.toString().split("").join("+"));
    }
    return num;
};
