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
var getDecimalValue = function (head) {
  let arr = [];

  while (true) {
    if (head === null) {
      break;
    }

    arr.push(head.val);
    head = head.next;
  }

  let result = arr.join("");
  return parseInt(result, 2);
};
