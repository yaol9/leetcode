/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^0-9a-zA-Z]/g,"");
    s_reverse = s.split("").reverse().join("");
    return s.toLowerCase()==s_reverse.toLowerCase()?true:false;
};
