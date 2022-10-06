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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  let tem;

  function switchFuc(node) {
    if (node === null) {
      return;
    }

    /** 노드 자리 Swtich */
    tem = node.left;
    node.left = node.right;
    node.right = tem;

    /** 하위 노드로 계속해서 이동 */
    switchFuc(node.right);
    switchFuc(node.left);
  }
  switchFuc(root);

  return root;
};
