/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim();
    if(s.lastIndexOf(" ")>0){
        return s.length - s.lastIndexOf(" ")-1;
    }else{
       
        return s.length;
    }
    
};
