/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root==null){
        return [];
    }
    var result=[];
    var left = inorderTraversal(root.left);
    if(left.length>0){
        result = result.concat(left);
    }
    result.push(root.val);
    var right = inorderTraversal(root.right);
    if(right.length>0){
        result = result.concat(right);
    }
    return result;
};
