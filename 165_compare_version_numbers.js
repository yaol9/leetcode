/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    nums1 = version1.split(".");
    nums2 = version2.split(".");
    
    var i = 0;
    while(i<nums1.length || i<nums2.length){
        nums1[i]=parseInt(nums1[i]==null?0:nums1[i]);
        nums2[i]=parseInt(nums2[i]==null?0:nums2[i]);
        
        if(nums1[i]>nums2[i]){
            return 1;
        }else if(nums1[i]<nums2[i]){
            return -1;
        }else{
            i++;
        }
    }
    if(i<nums1.length){return 1;}
    else if(i<nums2.length){return -1;}
    else{ return 0;}
};

