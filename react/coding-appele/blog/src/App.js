/* eslint-disable */

import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState([]);
  const [likes, setLikes] = useState(Array(title.length).fill(0));
  const [contents, setContents] = useState(Array(title.length).fill(""));

  //LifeCycle 컴포넌트의 생애주기
  // mount 컴포넌트는 리액라는 세상에서 태어나고 성장하고 죽습니다.

  // mount , update , unmount
  // 컴포넌트의 생애주기에 개입할 수 있는 능력을 가진 녀석이 useEffect
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Nav></Nav>
      {title.map((_, i, arr) => (
        <Post
          title={title}
          setTitle={setTitle}
          likes={likes}
          setLikes={setLikes}
          contents={contents}
          idx={i}
          key={i}
        ></Post>
      ))}
      <Form
        title={title}
        setTitle={setTitle}
        contents={contents}
        setContents={setContents}
      ></Form>
      <Modal2></Modal2>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return <div>{this.state.age}</div>;
  }
}

function Form(props) {
  let newTitle = "";
  let newContent = "";
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const copyTitle = [...props.title];
        copyTitle.push(newTitle);
        props.setTitle(copyTitle);
        const copyContents = [...props.contents];
        copyContents.push(newContent);
        props.setContents(copyContents);
        newTitle = "";
        newContent = "";
      }}
      className="Form"
    >
      <label htmlFor="title">제목</label>
      <input
        name="title"
        onChange={(e) => {
          newTitle = e.target.value;
        }}
        onSubmit={(e) => {
          e.target.value = "";
          console.log("hi");
        }}
        id="title"
        required
      ></input>
      <label htmlFor="contents">글</label>
      <textarea
        name="contents"
        onChange={(e) => {
          newContent = e.target.value;
        }}
        onSubmit={(e) => (e.target.value = "")}
        id="content"
        required
      ></textarea>
      <button type="submit">제출하기</button>
    </form>
  );
}
function Nav() {
  return (
    <>
      <div className="Nav">
        <h1>Blog</h1>
      </div>
    </>
  );
}
function Post(props) {
  return (
    <article className="list">
      <h2>
        {props.title[props.idx]}
        <span
          onClick={() => {
            const copy = [...props.likes];
            copy[props.idx]++;
            props.setLikes(copy);
          }}
        >
          🧡
        </span>
        <span>{props.likes[props.idx]}</span>
      </h2>
      <p>10월30일</p>
      <p>{props.contents[props.idx]}</p>
      <button
        onClick={() => {
          const copy = [...props.title];
          copy.splice(props.idx, 1);
          props.setTitle(copy);
        }}
        type="button"
      >
        삭제하기
      </button>
    </article>
  );
}

export default App;
