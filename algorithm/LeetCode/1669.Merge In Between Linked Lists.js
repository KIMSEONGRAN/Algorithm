/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let plus = list1;
  let head = list1;
  let i = 0;

  for (let i = 0; i < a - 1; i++) {
    list1 = list1.next;
  }

  while (true) {
    if (i > b) {
      break;
    }

    plus = plus.next;
    i++;
  }

  list1.next = list2;

  while (true) {
    if (list2 === null) {
      break;
    }

    list2 = list2.next;
  }

  while (true) {
    if (list1.next === null) {
      list1.next = plus;
      break;
    }

    list1 = list1.next;
  }

  return head;
};
