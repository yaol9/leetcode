/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    add = 1; 
    for(i=digits.length-1;i>=0;i--){
        if(add==1){
            if(digits[i]==9){
                digits[i]=0;
                add=1;
            }else{
                add=0;
                digits[i]++;
                return digits;
            }
        }else{
            return digits;
        }
        
    }
    if(add==1){
         digits.unshift(1);
        return digits
    }
};
