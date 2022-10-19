function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  //홀수이면.
  //  [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
console.log(collectOddValues([1, 2, 3, 4, 5]));

function makeCases(leftArrows, arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
}

/* 케이스 만드는 함수 */
// 1.화살이 어피치+1만큼 있는가?
// 1-1 arr[i]에 어치피+1을 집어넣는다.
// 남은 화살 수에서 어피치 + 1 을 뺀다.
// 다음 인덱스로 넘어간다.
// or
// 1-1 arr[i]에 0을 집어넣는다.
// 다음 인덱스로 넘어간다.
