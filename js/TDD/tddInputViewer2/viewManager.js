// 객체지향은 유지보수가 좋다. 규모가 클 때 도움이 된다.
// 조그마한 규모면 필요 없긴 하다.
class ViewManager {
  constructor(textManager, options) {
    if (textManager.constructor !== TextManager) {
      // throw Error : 사용자 정의 에러. 에러 메세지를 반환하고 프로그램을 종료합니다.
      throw Error("text Manager 객체를 전달해야합니다!");
    }
    if (!options.viewerEl || !options.btnEl || !options.inpTxt) {
      throw Error("필요한 요소중에 빈 값이 존재합니다.");
    }
    this.inpTxt = options.inpTxt;
    this.viewerEl = options.viewerEl;
    this.textManager = textManager;

    options.btnEl.addEventListener("click", () => {
      this.changeValue();
    });
  }
  changeValue() {
    this.textManager.setValue({ data: this.inpTxt.value });
    this.updateView();
  }
  updateView() {
    this.viewerEl.textContent = this.textManager.getValue();
  }
}
