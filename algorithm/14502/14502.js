//연구소 14502
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [n, m] = [+input[0].split(" ")[0], +input[0].split(" ")[1]];
const matrix = input.slice(1).map((v) => v.split(" ").map((v) => +v));
const infected = Array(n)
  .fill(0)
  .map(() => Array(m).fill(0));
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let ans = 0;
//1. 벽 세 개를 세운다.
for (let row = 0; row < n; row++) {
  for (let col = 0; col < m; col++) {
    if (matrix[row][col]) continue;
    matrix[row][col] = 1;
    let isSameRow2 = true;
    for (let row2 = row; row2 < n; row2++) {
      for (let col2 = 0; col2 < m; col2++) {
        if (matrix[row2][col2]) continue;
        //만약 row2의 행이 row1와 같지 않다면
        //row3은 0부터 순회한다.
        if (isSameRow2) {
          col2 = col;
          isSameRow2 = false;
          continue;
        }
        matrix[row2][col2] = 1;
        let isSameRow3 = true;
        for (let row3 = row2; row3 < n; row3++) {
          for (let col3 = 0; col3 < m; col3++) {
            if (matrix[row3][col3]) continue;
            //만약 row3의 행이 row2와 같지 않다면
            //row3은 0부터 순회한다.
            if (isSameRow3) {
              col3 = col2;
              isSameRow3 = false;
              continue;
            }
            matrix[row3][col3] = 1;
            //2. 바이러스를 퍼트린다. BFS
            const board = matrix.map((v) => v.slice());
            const visited = infected.map((v) => v.slice());
            function bfs(y, x) {
              visited[y][x] = 1;
              board[y][x] = 2;
              for (let i = 0; i < 4; i++) {
                let ny = y + dy[i];
                let nx = x + dx[i];
                if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
                if (board[ny][nx] == 0 && !visited[ny][nx]) {
                  bfs(ny, nx);
                }
              }
            }
            for (let i = 0; i < n; i++) {
              for (let j = 0; j < m; j++) {
                if (board[i][j] === 2 && !visited[i][j]) {
                  bfs(i, j);
                }
              }
            }
            //3. 안전 영역의 크기를 센다.
            let count = 0;
            for (let i = 0; i < n; i++) {
              for (let j = 0; j < m; j++) {
                if (!board[i][j]) count++;
              }
            }
            ans = Math.max(ans, count);
            //벽 초기화
            matrix[row3][col3] = 0;
          }
        }
        matrix[row2][col2] = 0;
      }
    }
    matrix[row][col] = 0;
  }
}
console.log(ans);
