function recursion(n, b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  if (n === 0) return;
  arr.push(b);
  recursion(n - 1);
}
let arr = [];
recursion(8000);
console.log(arr);

function solution(n, info) {
    var answer = [];
    const cases = [];
    for(let i = 0; i < 11; i++){
        //화살을 더 많이 맞추거나, 0개로 패스하거나       
    }
    return answer;
}

function recursion(round, leftArrow){
    if(round === 0) return;    
    const apeachPoint = info[round-1];
    if(leftArrow <= apeachPoint) recursion(round-1, 0)    
    
    //10, 9, 8, 7, 6, 5, 4, 3, 2, 1    
    
    const apeachHit(info[])
    
    arr[i] = info[i] + 1  or 0

    if(n이 info[i]보다 크다면) {
        arr[i] = info[i] 을 할 수도 있고 0을 줄 수도 있고.
    }
    if(n이 info[i]보다 작으면) {
        arr[i]는 0
    }
    if(마지막 자리이면) 남은 화살 전부 쏴
    const apeachHit = info[round-1];
}
// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < 10; i++) {
//     sum += arr[i] * (10 - i);
//   }
//   return sum;
// }
//recursion(0) + recursion(info[i]+1)
//단, a=b이면 어피치가 k점
//최종 점수가 같으면 어피치가 우승.
//라이언이 어피치를 가장 큰 점수 차이로 이기기 위해서.
//라이언이 우승할 수 없는 경우 [-1]을 리턴.
//방법이 여러 개이면 가장 낮은 점수를 더 많이 맞힌 경우를 return
//과정
//1.배열을 마구잡이로 만든다.
//2.어피치를 이기는 배열만 남긴다. -> 없으면 [-1] 리턴
//3.가장 낮은 점수를 많이 맞힌 배열을 리턴한다. 배열을 거꾸로 순회하면 됨.



//전역변수로
//const cases = []랑
//let case = [] 선언해주고
//base 조건에서 cases로 push하고 case 초기화해주기