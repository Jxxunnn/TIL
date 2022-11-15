import styled, { css } from "styled-components";

const One = css`
  color: red;
`;
const Two = css`
  font-size: 32px;
`;

const DivBlue = styled.div`
  color: blue;
  ${One}
  ${Two}
`;
const DivRed = styled.div`
  color: red;
  font-size: ${({ size }) => size + "px"};
  border: ${({ border }) => border};
`;

export default function App() {
  return (
    <div>
      <DivBlue>할로우</DivBlue>
      <DivRed border="1px solid blue" size={32}>
        안녕
      </DivRed>
    </div>
  );
}
