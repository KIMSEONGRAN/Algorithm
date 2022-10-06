/**
 * 프로그래머스 코딩 테스트 연습 문제 - 프린터
 */

function solution(priorities, location) {
  let result = 1;
  let i = 0;

  let arr = priorities.map((val, index) => [index, val]); // 인덱스와 해당 값 저장
  let max = Math.max(...priorities); // 가장 높은 우선 순위값 저장

  while (true) {
    let isCheck = false; // if문을 동작시키기 위한 스위치

    // 스위치 값 설정 반복문
    while (true) {
      if (arr[i][1] >= max) {
        break;
      } else {
        isCheck = true;
        break;
      }
    }
    // //////////////////////////////////////////////////

    if (isCheck) {
      // 우선순위가 낮은 애들을 잘라서 뒤에 붙인다.
      const shift = arr.shift();
      arr.push(shift);

      // 원본 배열도 똑같이 해줌(왜냐면 밑에서 원본 splice할 껀데, 이때 우선순위 높은게 0번이 아니면 splice가 힘듦)
      const shift2 = priorities.shift();
      priorities.push(shift2);
    } else {
      // 우선순위가 제일 높다면
      if (arr[i][0] === location) {
        // location과 비교해서 맞으면 바로 result 출력
        return result;
      } else {
        // location이 맞지 않으면 우선 우선 순위 높은건 배출(shift) 후 다시 반복문
        arr.splice(i, 1);
        priorities.splice(i, 1);

        result++; // 몇번 배출했는지 증가
        max = Math.max(...priorities); // 우선순위가 높은게 방출되었으니, max도 남은 것중에 우선 순위 높은 걸로 바뀔 수 있게 재정의
      }
    }
  }
}
