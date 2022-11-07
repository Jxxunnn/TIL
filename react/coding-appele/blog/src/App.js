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
      {title.map(function (title, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
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
          </div>
        );
      })}
      {modal === true ? <Modal title={title}></Modal> : null}
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
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};
export default App;
