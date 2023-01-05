/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  //     let result = [];
  //     let tem = [];
  //     let tem2 = [];
  //     let arr = String(num).split('')

  //     arr.sort((a,b) => a-b)

  //     for(let i = 0; i < arr.length; i++){
  //         tem.push(arr[0])
  //         tem2.push(arr[1])

  //         arr.shift()
  //         arr.shift()
  //     }

  //     return Number(tem.join(''))+Number(tem2.join(''))

  let tem = "";
  let tem2 = "";
  let arr = String(num)
    .split("")
    .sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    tem = tem + arr[0];
    tem2 = tem2 + arr[1];

    arr.shift();
    arr.shift();
  }

  return Number(tem) + Number(tem2);
};
