//npx create-react-app my-app --template basic-react
//cd my-app
// npm install styled-components styled-reset
function One(props) {
  console.log("// one 시작");
  console.log(props);
  console.log("// one 끝");
  return <div>{props.children}</div>;
}
function Two() {
  return (
    <div>
      <h1>하이</h1>
      <Three />
    </div>
  );
}
function Three() {
  return (
    <div>
      <h1>하이</h1>
    </div>
  );
}
export default function App() {
  const TestTwo = [<h1 key="one">hello 1</h1>, <p key="two">hello 1</p>];
  console.log(TestTwo);
  console.log(typeof TestTwo);
  console.dir(TestTwo);
  return <div className="App">hello</div>;
}
//콘솔로그 두번 찎혀도 당황하지 마요세. react.strictmode 이녀석 때문이에
