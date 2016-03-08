/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
var a=b=0;

for(i=0;i<secret.length;i++){
 if(secret.charAt(i)==guess.charAt(i)){
    secret=secret.substr(0, i) +" "+ secret.substr(i + 1);
    guess =guess.substr(0, i) +" "+ guess.substr(i + 1);
    a++;
 }
}
secret = secret.replace(" ","");
guess = guess.replace(" ","");

for(i=0;i<secret.length;i++){
    if(guess.charAt(i)==" ")continue;
    pos=secret.indexOf(guess.charAt(i));
 	  if(pos>=0  ){
      	b++;
        secret=secret.substr(0, pos) +" "+ secret.substr(pos + 1);
    }
}

return a+"A"+b+"B";
};
