/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let arr = [];
  let sum = 0;
  let value = head;

  while (true) {
    if (value.next === null) {
      break;
    }

    if (value.next.val === 0) {
      arr.push(sum);
      sum = 0;
      value = value.next;
    } else {
      sum = sum + value.next.val;
      value = value.next;
    }
  }
  let i = 0;
  let answer = new ListNode(arr[i]);
  let result = answer;

  while (true) {
    if (arr.length - 1 === i) {
      return result;
    }
    answer.next = new ListNode(arr[i + 1]);
    answer = answer.next;

    i++;
  }
};
