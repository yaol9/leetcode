var isPalindrome = function(x) {
    if(x<0)return false;
    x=x.toString();
    len = x.length;
    
    for(i=0;i<len/2;i++){
        if(x.charAt(i)!=x.charAt(len-i-1)){
            return false;
        }
    }
    return true;
    
};
