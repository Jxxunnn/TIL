import "./App.css";
import { shoesData } from "./data.js";
import { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [shoes] = useState(shoesData);
  return (
    <div className="App">
      <NavBootstrap />
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ProductList shoes={shoes} />
            </>
          }
        />
        <Route path="/detail" element={<div>상세페이지</div>} />
        <Route path="/about" element={<div>요호요호</div>} />
      </Routes>
    </div>
  );
}
function NavBootstrap() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">준신사</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Cart">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
function Banner() {
  return <div className="main-bg"></div>;
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
