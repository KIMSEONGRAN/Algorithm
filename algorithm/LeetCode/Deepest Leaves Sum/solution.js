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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let tem = root;
  let sum = 0;
  let arr = [];

  /** Node의 깊이를 알기위한 재귀함수 */
  function repeat(count, node) {
    if (node === null) {
      arr.push(count);
      return;
    }

    repeat(count + 1, node.right);
    repeat(count + 1, node.left);
  }
  repeat(0, tem);

  /** 가장 큰 값은 마지막 Node를 가르킨다. */
  let comparison = Math.max(...arr);

  /** Node값 더하기 */
  function cascade(count, node) {
    if (node === null) return;

    if (count + 1 === comparison) {
      sum = sum + node.val;
      return;
    }

    cascade(count + 1, node.right); //
    cascade(count + 1, node.left); //
  }
  cascade(0, root);

  return sum;
};
