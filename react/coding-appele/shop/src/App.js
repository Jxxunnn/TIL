import "./App.css";
import { shoesData } from "./data.js";
import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Box = styled.div`
  background: ${(props) => props.bg};
  padding: 20px;
`;

function App() {
  const [shoes, setShoes] = useState(shoesData);
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavBootstrap navigate={navigate} />
      <Routes>
        <Route
          path="/"
          element={<ProductListPage shoes={shoes} setShoes={setShoes} />}
        />
        <Route
          path="/detail/:id"
          element={<ProductDetailPage shoes={shoes} />}
        />
        <Route path="/about" element={<AboutPage></AboutPage>}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<EventPage></EventPage>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
        <Route path="*" element={<div>없는 페이지임</div>} />
      </Routes>
    </div>
  );
}
// 전체
function NavBootstrap({ navigate }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          준신사
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/detail/0");
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
// EventPage
function EventPage() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  );
}
// AboutPage
function AboutPage() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

// Tabs
function Tabs() {
  return (
    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link eventKey="link0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

// ProductDetailPage
function ProductDetailPage({ shoes }) {
  const [isTimeOut, setIsTimeOut] = useState(false);
  const { id } = useParams();
  const idx = shoes.findIndex((item) => item.id === +id);
  useEffect(() => {
    const timer = () => {
      setIsTimeOut(true);
    };
    setTimeout(timer, 1000);
    return clearTimeout(timer);
  }, []);
  return (
    <div className="ProductDetailPage">
      {isTimeOut ? null : (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      )}

      <ProductDetail shoes={shoes[idx]}></ProductDetail>
    </div>
  );
}
function ProductDetail({ shoes: { title, content, price, id } }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (Number.isNaN(+inputValue)) alert("그러지 마세요");
    return setInputValue("");
  }, [inputValue]);
  return (
    <div className="container">
      <div className="row">
        <div>
          <img
            src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
            alt=""
            width="100%"
          />
        </div>
        <div>
          <input
            onChange={({ target: { value } }) => {
              setInputValue(value);
            }}
            type="text"
          ></input>
        </div>

        <h4 className="pt-5">{title}</h4>
        <p>{content}</p>
        <p>{price}</p>

        <div>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <Tabs></Tabs>
      </div>
    </div>
  );
}
// ProductListPage
function Banner() {
  return <div className="main-bg"></div>;
}
function ProductListPage({ shoes, setShoes }) {
  const [count, setCount] = useState(1);
  const [isFetched, setIsFetched] = useState(false);
  return (
    <div className="ProductListPage">
      <Banner></Banner>
      <ProductList shoes={shoes}></ProductList>
      {isFetched ? <h2>로딩중</h2> : null}
      <button
        onClick={() => {
          if (count === 2) {
            alert("상품이 없어욤");
            setCount(1);
            return;
          }
          setIsFetched(true);
          axios
            .get(`https://codingapple1.github.io/shop/data${count + 1}.json`)
            .then((res) => setShoes([...shoes, ...res.data]))
            .catch(() => {
              /*로딩중 UI 숨기기*/ setIsFetched(false);
            });
          setCount(count + 1);
          //로딩중 UI 숨기기
          setIsFetched(false);
        }}
      >
        버튼
      </button>
    </div>
  );
}

function ProductList({ shoes }) {
  return (
    <Container>
      <Row>
        {shoes.map(({ id, title, content }, i) => {
          return <Product id={id} title={title} content={content} key={i} />;
        })}
      </Row>
    </Container>
  );
}
function Product({ id, title, content }) {
  return (
    <Col sm>
      <img
        alt="#"
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
        width="80%"
      />
      <h4>{title}</h4>
      <p>{content}</p>
    </Col>
  );
}
export default App;
