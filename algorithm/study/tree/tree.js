class Node {
  constructor(data) {
    this.data = data;
    // this.child = [] // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
    this.left = null;
    this.right = null;
  }
  BFS() {
    // 너비우선탐색, BFS(Breadth First Search)
    // Queue 이용!
    let 방문경로 = [];
    let 스택 = [this.root];

    while (스택.length !== 0) {
      let current = 스택.pop();
      if (current.right) {
        스택.push(current.right);
      }
      if (current.left) {
        스택.push(current.left);
      }
      방문경로.push(current.data);
    }

    return 방문경로;
  }
}

root = new Node(55);
node1 = new Node(53);
node2 = new Node(99);
node3 = new Node(37);
node4 = new Node(54);

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

root.data;
// 55
root.left.data;
// 53
root.left.left.data;
// 37
root.left.right.data;
// 54
