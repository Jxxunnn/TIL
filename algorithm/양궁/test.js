// n = 3, info = [1,0,1,0]
//첫 번째는 라인을 끝내는 종료 조건이다. 재귀가 중단되는 시점. (기본 케이스 aka. base case)
//두 번째는 다른 입력값이다. 재귀 함수에서 바라는 것은 매번 다른 데이터를 가지고 함수를 호출하는 것이다.
function collectOddValues(arrows, arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arrows > arr[0]) {
    newArr.push(arr[0] + 1);
    newArr = newArr.concat(collectOddValues(arrows - arr[0] + 1, arr.slice(1)));
  }
  newArr.push(0);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  //홀수이면.
  //  [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
console.log(collectOddValues([1, 2, 3, 4, 5]));
/* 케이스 만드는 함수 */
// 1.화살이 어피치+1만큼 있는가?
// 1-1 arr[i]에 어치피+1을 집어넣는다.
// 남은 화살 수에서 어피치 + 1 을 뺀다.
// 다음 인덱스로 넘어간다.
// or

// 1-1 arr[i]에 0을 집어넣는다.
// 다음 인덱스로 넘어간다.
