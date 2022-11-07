/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [likes, setLikes] = useState(Array(title.length).fill(0));
  let [modal, setModal] = useState(false);
  let [idx, setIdx] = useState(0);
  let 입력값 = "";
  return (
    <div className="App">
      <div className="black-nav">
        <h1>ReactBlog</h1>
      </div>
      <button
        type="button"
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        글제목 가나다순 정렬
      </button>
      {title.map(function (title, i, arr) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setIdx(i);
              }}
            >
              {title}
              <span
                onClick={() => {
                  const copy = [...likes];
                  copy[i]++;
                  setLikes(copy);
                }}
              >
                🌞
              </span>
              {likes[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={(e) => {
                let copy = [...arr];
                copy.splice(i, 1);
                console.log(copy);
                setTitle(copy);
              }}
              type="button"
            >
              삭제
            </button>
          </div>
        );
      })}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          let copy = [...title];
          copy.push(입력값);
          setTitle(copy);
          console.log(title);
        }}
      >
        <input
          onChange={(e) => {
            입력값 = e.target.value;
          }}
        ></input>
        <button type="submit">제출</button>
      </form>
      {modal === true ? (
        <Modal
          idx={idx}
          title={title}
          setTitle={setTitle}
          color={"green"}
        ></Modal>
      ) : null}
    </div>
  );
}
const Post = () => {
  return (
    <div className="post">
      <h4>title</h4>
      <p>2월 17일 발행</p>
    </div>
  );
};
const Modal = (props) => {
  return (
    <div className="modal">
      <h4 style={{ color: props.color }}>{props.title[props.idx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          console.log(props);
          const copy = props.title;
          copy[0] = "구리 구리 추천";
          props.setTitle(copy);
        }}
        type="button"
      >
        글 수정 버튼
      </button>
    </div>
  );
};
export default App;
