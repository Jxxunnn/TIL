import "./App.css";
import { shoesData } from "./data.js";
import { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";

function App() {
  const [shoes] = useState(shoesData);
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavBootstrap navigate={navigate} />
      <Routes>
        <Route path="/" element={<ProductListPage shoes={shoes} />} />
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
              navigate("/detail");
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
// ProductDetailPage
function ProductDetailPage({ shoes }) {
  const { id } = useParams();
  const idx = shoes.findIndex((item) => item.id === +id);
  return (
    <div className="ProductDetailPage">
      <ProductDetail shoes={shoes[idx]}></ProductDetail>
    </div>
  );
}
function ProductDetail({ shoes: { title, content, price, id } }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
            alt=""
            width="100%"
          />
        </div>
        <h4 className="pt-5">{title}</h4>
        <p>{content}</p>
        <p>{price}</p>
        <div className="col-md-6">
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
// ProductListPage
function Banner() {
  return <div className="main-bg"></div>;
}
function ProductListPage({ shoes }) {
  return (
    <div className="ProductListPage">
      <Banner></Banner>
      <ProductList shoes={shoes}></ProductList>
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
