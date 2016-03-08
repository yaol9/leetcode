/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var a = n.toString().split("");
    pool=[];
    pool.push(n);
    while(a.length>=1){
        var sum=0;
        for(i=0;i<a.length;i++){
            sum+=parseInt(a[i])*parseInt(a[i]);
        }
        
        if(sum==1){
            return true;
        }else{
            if(pool.indexOf(sum)>=0){
                return false;
            }else{
                pool.push(sum);
            }
        }
        a=sum.toString().split("");
    }
    
    
};
