import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";

const ContentsDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
`;

const GlobalStyle = createGlobalStyle`
${reset}
h1 {
  color:blue
}
  span {
    color: red;
  }
`;

function Two() {
  return (
    <section>
      <h2>hello two</h2>
      <span>hello</span>
    </section>
  );
}

function One() {
  return (
    <section>
      <h2>hello one</h2>
      <span>hello</span>
    </section>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <ContentsDiv />
      <h1>hello world</h1>
      <span>hello world</span>
      <One />
      <Two />
    </>
  );
}

export default App;
