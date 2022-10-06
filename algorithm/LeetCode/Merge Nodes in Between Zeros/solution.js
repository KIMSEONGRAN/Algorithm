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
    // 다음 노드가 없으면 반복문 종료
    if (value.next === null) {
      break;
    }

    // 0을 만나면 변수 초기화 및 배열에 값 담기
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

  // 배열에 담은 sum값을 노드로 출력
  while (true) {
    if (arr.length - 1 === i) {
      return result;
    }
    answer.next = new ListNode(arr[i + 1]);
    answer = answer.next;

    i++;
  }
};
