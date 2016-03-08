/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    i=1;
    way=[];
    while(i<=n){
        if(i==1)way[1]=1;
        if(i==2)way[2]=2;
        if(i>2)way[i]=way[i-1]+way[i-2];
        i++;
    }
    return way[n];
};
