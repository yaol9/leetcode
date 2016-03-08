/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length==0 && t.length==0)return true;
    
    if(s.length!=t.length)return false;
    var mapping = [];
    var vals =[];
    for(i=0;i<s.length;i++){
    	   if(mapping[s.charAt(i)] && mapping[s.charAt(i)] != t.charAt(i) ){
           return false;
         }
         if(mapping[s.charAt(i)] && mapping[s.charAt(i)] == t.charAt(i) ){
           continue;
         }
         
         if(vals.indexOf(t.charAt(i))>=0){
            return false;
         }else{
           mapping[s.charAt(i)] = t.charAt(i) 
           vals.push( t.charAt(i) )
         }
    }
    return true;
};

