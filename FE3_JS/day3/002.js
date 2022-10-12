/*
// callback function

function sum(x, y, 콜백함수){
    // 1000 줄
    콜백함수(x + y);
    // 1000 줄
    // return x + y
}

function documentWriter(s){
    document.write('콜백함수', s)
}

// sum(10, 20, console.log)
// sum(10, 20, document.write) // 안되는 이유 확인중
sum(10, 20, documentWriter)

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

let arr = [10, 20, 30, 40, 50]
arr.map(제곱)

function 제곱(x){
    return x ** 2
} // x => x**2
arr.map(x => x**2)

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// https://caniuse.com/mdn-api_nodelist_foreach // 노드에서의 forEach는 IE에서 작동하지 않습니다.

function 두배(x){
    console.log(x * 2)
}

let arr = [10, 20, 30, 40, 50]
arr.forEach(두배)


//////////////////
// 문제 : 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문을 완성해주세요.
let arr = [10, 20, 30, 40, 50]
arr.map(x => x**2)

let result = []
arr.forEach(e => {
    result.push(e ** 2)
})
console.log(result)

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
    </head>
    <body>
        <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
        </ul>
        <script>
            let e = document.querySelectorAll("li");
            console.log(e);
            e.forEach((e) => console.log(e)); // 주의! IE에서 작동하지 않습니다.
        </script>
    </body>
</html>
*/
