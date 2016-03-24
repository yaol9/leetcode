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
var preorderTraversal = function(root) {
    var result=[];
    if(root==null){
        return [];
    }
    result.push(root.val);
    var left = preorderTraversal(root.left);
    if(left.length>0){
        result = result.concat(left);
    }
    var right = preorderTraversal(root.right);
    if(right.length>0){
        result = result.concat(right);
    }
    return result;
    
};
