import ProductList from "./ProductList.js";
import { request } from "./api.js";
export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";
  $page.innerHTML = "<h1>상품 목록</h1>";
  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };
  const fetchProducts = async () => {
    const products = await request("/products");
    this.setState(products);
  };
  const productList = new ProductList({
    $target: $page,
    initialState: this.state,
  });
  //페이지 생성 시 API 요청해오도록 하는 처리
  fetchProducts();
}
