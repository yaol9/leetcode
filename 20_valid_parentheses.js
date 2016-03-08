/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   var pool=[];
   if(s.length%2!=0)return false;
   for(i=0;i<s.length;i++){
       if(pool.length==0){
           pool.push(s.charAt(i));
       }else{
           var last = pool.pop();
           if(last=="["){
               if(s.charAt(i)=="]"){
                   continue;
               }else{
                   pool.push(last);
                   pool.push(s.charAt(i));
               }
           }
           if(last=="("){
               if(s.charAt(i)==")"){
                   continue;
               }else{
                   pool.push(last);
                   pool.push(s.charAt(i));
               }
           }
           if(last=="{"){
               if(s.charAt(i)=="}"){
                   continue;
               }else{
                   pool.push(last);
                   pool.push(s.charAt(i));
               }
           }
           
           if(last=="]" || last=="}" ||last==")")return false;
           
       }
   }
  
   if(pool.length==0){
       return true;
   }else{
       return false;
   }
   
};
