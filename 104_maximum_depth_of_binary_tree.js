/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
  var maxDepth = function(root) {
  if(root==null)return Number(0);
  var maxLeft = maxDepth(root.left);
  var  maxRight = maxDepth(root.right);
  return ((maxLeft>=maxRight)?Number(maxLeft):Number(maxRight)) + 1;
};
