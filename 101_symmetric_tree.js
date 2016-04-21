/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
/**
 * @param {TreeNode} node1,node2
 * @return {boolean}
*/
var isMirror = function(node1,node2) {
    if(node1==null && node2==null){ 
        return true;
    }else if(node1==null || node2==null){
        return false;
    }
    if(node1.val == node2.val){
        return isMirror(node1.left,node2.right)&&isMirror(node1.right,node2.left)
    }else{
        return false;
    }
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root==null){
        return true;
    }else{
        return isMirror(root.left,root.right);
    }
};
