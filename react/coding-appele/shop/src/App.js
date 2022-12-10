import "./App.css";
import { shoesData } from "./data.js";
import {
  lazy,
  Suspense,
  useState,
  useEffect,
  createContext,
  useContext,
  memo,
  useMemo,
} from "react";
import { Container, Nav, Navbar, Row, Col, Table } from "react-bootstrap";
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
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./store/userSlice.js";
import { addCount, addCart, removeCount, removeCart } from "./store.js";
import { useQuery } from "react-query";

const Context1 = createContext();

const Box = styled.div`
  background: ${(props) => props.bg};
  padding: 20px;
`;

function App() {
  const [shoes, setShoes] = useState(shoesData);
  const [재고] = useState([10, 11, 12]);
  const navigate = useNavigate();
  const state = {
    info: <p>상품정보</p>,
    shipping: <p>배송정보</p>,
  };
  let result = useQuery("작명", () =>
    axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      console.log("여쳥됨");
      return a.data;
    })
  );
  return (
    <div className="App">
      {state["shipping"]}
      <NavBootstrap navigate={navigate} />
      <div>
        {result.isLoading && "로딩중"}
        {result.error && "에러남"}
        {result.data && result.data.name}
      </div>
      <Suspense fallback={<div>로딩중임</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductListPage
                shoes={shoes}
                setShoes={setShoes}
                navigate={navigate}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Context1.Provider value={{ 재고, shoes }}>
                <ProductDetailPage shoes={shoes} />
              </Context1.Provider>
            }
          />
          <Route path="/about" element={<AboutPage></AboutPage>}>
            <Route path="member" element={<div>멤버임</div>} />
            <Route path="location" element={<div>위치정보임</div>} />
          </Route>
          <Route path="/event" element={<EventPage></EventPage>}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
          </Route>
          <Route path="/cart" element={<CartPage></CartPage>} />
          <Route path="*" element={<div>없는 페이지임</div>} />
        </Routes>
      </Suspense>
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
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
// CartPage
function Test() {
  let text = null;
  if (true) {
    text = <p>참이면 보여줄 녀석 </p>;
  }
  return <div>{1 !== 1 && text}</div>;
}
function 함수() {
  return "반복문 10억번 도린 결과";
}

function CartPage() {
  const result = useMemo(() => {
    return 함수();
  }, [state]);
  useMemo();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  return (
    <div>
      <Test />
      <Child />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <CartList />
    </div>
  );
}

function CartList() {
  const cart = useSelector((state) => state.cart).filter((item) => {
    return item.count > 0;
  });
  const dispatch = useDispatch();
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
          <th>삭제하기</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(({ count, id, name }, i) => (
          <Cart
            name={name}
            i={i}
            id={id}
            count={count}
            key={id}
            dispatch={dispatch}
          />
        ))}
      </tbody>
    </Table>
  );
}
const Child = memo(function () {
  console.log("재렌더링됨.");
  return <h1>자식</h1>;
});

function Cart({ i, name, count, id, dispatch }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{name}</td>
      <td>{count}</td>
      <td>
        <button
          onClick={() => {
            dispatch(addCount(id));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(removeCount(id));
          }}
        >
          -
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            dispatch(removeCart(id));
          }}
        >
          X
        </button>
      </td>
    </tr>
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

function TabContent({ 탭, title, content, price, id }) {
  const [fade, setFade] = useState("");
  const { 재고 } = useContext(Context1);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFade("end");
    }, 500);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [탭]);
  return (
    <div className={`start ${fade}`}>
      {[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

function Tabs({ 탭, 탭변경, title, content, price, id }) {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent
        탭={탭}
        title={title}
        content={content}
        price={price}
        id={id}
      />
    </>
  );
}

// ProductDetailPage
function ProductDetailPage({ shoes }) {
  const [fade, setFade] = useState("");
  const [탭, 탭변경] = useState(0);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const { id } = useParams();
  const idx = shoes.findIndex((item) => item.id === +id);
  useEffect(() => {
    let 꺼낸거 = localStorage.getItem("watched");
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거.push(id);
    꺼낸거 = new Set(꺼낸거);
    꺼낸거 = Array.from(꺼낸거);
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
  }, []);
  useEffect(() => {
    const bannerTimer = () => {
      setIsTimeOut(true);
    };
    setTimeout(bannerTimer, 2500);

    return clearTimeout(bannerTimer);
  }, []);
  useEffect(() => {
    const loadTimer = () => {
      setFade("end");
    };
    setTimeout(loadTimer, 500);
    return clearTimeout(loadTimer);
  });
  return (
    <div className={`ProductDetailPage start ${fade}`}>
      {isTimeOut ? null : (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      )}

      <ProductDetail 탭={탭} 탭변경={탭변경} shoes={shoes[idx]}></ProductDetail>
    </div>
  );
}
function ProductDetail({ shoes: { title, content, price, id }, 탭, 탭변경 }) {
  const [inputValue, setInputValue] = useState("");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
          <button
            onClick={() => {
              if (
                cart.findIndex((item) => {
                  return item.id === id;
                }) === -1
              ) {
                dispatch(addCart({ id, name: title, count: 1 }));
              } else {
                dispatch(addCount(id));
              }
            }}
            className="btn btn-danger"
          >
            주문하기
          </button>
        </div>
        <Tabs
          탭={탭}
          탭변경={탭변경}
          title={title}
          content={content}
          price={price}
          id={id}
        ></Tabs>
      </div>
    </div>
  );
}
// ProductListPage
function Banner() {
  return <div className="main-bg"></div>;
}
function ProductListPage({ shoes, setShoes, navigate }) {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [count, setCount] = useState(1);
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([]));
    } else {
      const res = localStorage.getItem("watched");
      setRecentlyViewed(JSON.parse(res));
    }
  }, []);
  return (
    <div className="ProductListPage">
      <Banner></Banner>
      <ProductList
        recentlyViewed={recentlyViewed}
        setRecentlyViewed={setRecentlyViewed}
        shoes={shoes}
        navigate={navigate}
      ></ProductList>
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

function ProductList({ shoes, navigate, recentlyViewed, setRecentlyViewed }) {
  return (
    <Container>
      <Row>
        {shoes.map(({ id, title, content }, i) => {
          return (
            <Product
              navigate={navigate}
              id={id}
              title={title}
              content={content}
              key={i}
              recentlyViewed={recentlyViewed}
              setRecentlyViewed={setRecentlyViewed}
            />
          );
        })}
      </Row>
    </Container>
  );
}
function Product({
  id,
  title,
  content,
  navigate,
  recentlyViewed,
  setRecentlyViewed,
}) {
  return (
    <Col
      sm
      onClick={() => {
        navigate(`/detail/${id}`);
        localStorage.setItem(
          "watched",
          JSON.stringify([...new Set([...recentlyViewed, id])])
        );
      }}
    >
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
