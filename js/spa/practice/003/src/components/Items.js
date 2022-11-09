import Component from "../core/Component.js";
export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
            <ul>
              ${items
                .map(
                  (item, key) =>
                    `<li>${item}<button class="deleteBtn" data-index="${key}">삭제</button></li>`
                )
                .join("")}
            </ul>
            <button class="addBtn">추가</button>
        `;
  }
  setEvent() {
    this.$target.addEventListener("click", ({ target }) => {
      const items = [...this.$state.items];

      if (target.classList.contains("addBtn")) {
        this.setState({ items: [...items, `item${items.length + 1}`] });
      }

      if (target.classList.contains("deleteBtn")) {
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      }
    });
  }
}
// event를 각각의 하위 요소가 아니라 component의 target 자체에 등록하늑 것!
// 따라서 component가 생성되는 시점에만 이벤트 등록을 해놓으면 추가로 등록할 필요가 없어진다.
// 이벤트 버블링
