/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    ar = s.split("").sort();
    tr = t.split("").sort();
    return ar.join("")==tr.join("")?true:false;
};
