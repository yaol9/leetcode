/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    seq=1;
    s="1";
while(seq<n){
s=s.replace(/33/g,"H");
s=s.replace(/3/g,"G");
  s=s.replace(/222/g,"F");
  s=s.replace(/111/g,"E");
  s=s.replace(/22/g,"D");	
	s=s.replace(/11/g,"C");
	s=s.replace(/2/g,"B");
	s=s.replace(/1/g,"A");
  seq++;
  
  s=s.replace(/A/g,"11");
  s=s.replace(/B/g,"12");
  s=s.replace(/C/g,"21");	
	s=s.replace(/D/g,"22");
	s=s.replace(/E/g,"31");
	s=s.replace(/F/g,"32");
  s=s.replace(/G/g,"13");
  s=s.replace(/H/g,"23");
 
}
return s;
};
