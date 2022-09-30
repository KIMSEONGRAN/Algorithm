/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let result = [];
  let arr = [];
  let i = 0;

  while (true) {
    if (head === null) {
      break;
    }

    arr.push(head.val);
    head = head.next;
  }

  for (; i < arr.length; i++) {
    result.push(arr[i] + arr[arr.length - 1 - i]);
  }

  return Math.max(...result);
};
