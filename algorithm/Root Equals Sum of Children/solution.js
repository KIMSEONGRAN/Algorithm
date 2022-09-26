/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
  let left;
  let right;
  let parent;
  let isSum;

  function cascade(node) {
    if (node === null) {
      // 3. 합산에 대한 Boolean값 저장
      left.val + right.val === parent ? (isSum = true) : (isSum = false);
      return;
    } else if (node.left !== null && node.right !== null) {
      // 1. node.left와 right 값이 null이 아닐때만 변수에 저장(null이면 합산이 안되니까)
      // 2. 최하위로 갔을때, 합산하기 위해 변수에 담음
      left = node.left;
      right = node.right;
      parent = node.val;
    }

    /** 하위노드로 이동 */
    cascade(node.right);
    cascade(node.left);
  }
  cascade(root);

  return isSum;
};
