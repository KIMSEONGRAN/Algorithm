/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let result = head;
  let result2 = result;
  let head2 = head;
  let head3 = head;
  let head4 = head;

  let fNode;
  let bNode;
  let i = 1;
  let j = 0;
  let length = 0;

  // 앞 노드값 저장
  while (true) {
    if (head3 === null) {
      i = 1;
      break;
    }

    if (i === k) {
      fNode = head3.val;
    }

    head3 = head3.next;
    i++;
    length++;
  }

  // 뒷 노드값 저장
  while (true) {
    if (head2 === null) {
      j = 0;
      break;
    }

    if (j === length - k) {
      bNode = head2.val;
    }

    head2 = head2.next;
    j++;
  }

  // 앞에서 부터 k번째값 바꾸기
  while (true) {
    if (head === null) {
      break;
    }

    if (i === k) {
      head.val = bNode;
    }

    head = head.next;
    i++;
  }

  // 뒤에서 부터 k번째값 바꾸기
  while (true) {
    if (result === null) break;

    if (j === length - k) {
      result.val = fNode;
    }

    result = result.next;
    j++;
  }

  return result2;
};
