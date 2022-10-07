// 컴백홈
// const fs = require("fs");
// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
// const [n, m, k] = input[0].split(" ").map((v) => +v);
// console.log(n, m, k);
// const dy = [-1, 0, 1, 0];
// const dx = [0, 1, 0, -1];
// const matrix = input.slice(1);
// const infected = Array(n)
//   .fill(0)
//   .map(() => Array(m).fill(0));

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < m; j++){
//         matrix[i][j] =
//     }
// }
// visited[n-1][0] - 1;
// console.log(go(n-1,0))

// function go(y, x) {
//   if (y == 0 && x == m - 1) {
//     if (k == visited[y][x]) return 1;
//     return 0;
//   }
//   let ret = 0;
//   for (let i = 0; i < 4; i++) {
//     let ny = y + dy[i];
//     let nx = x + dx[i];
//     if (
//       ny < 0 ||
//       nx < 0 ||
//       ny >= n ||
//       nx >= m ||
//       visited[ny][nx] ||
//       matrix[ny][nx] == "T"
//     ) {
//       continue;
//     }
//     visited[ny][nx] = visited[y][x] + 1;
//     ret += go(ny,nx);
//     visited[ny][nx] = 0;
//   }
//   return ret;
// }

// console.log(matrix);
