// strategy 패턴
/* 
객체가 할 수 있는 행위를 하이레벨과 로우레벨로 나눠서 구현합니다. 
// 하이레벨: 모든 객체가 상속 받는 변허지 않는 큰 틀의 행동
// 로우레벨: 상속받는 객체의 종류에 따라 디테일한 변화가 가능한 행동을 의미합니다.

// 객체 지향 프로그래밍의 특징
// 
// 1. 추상화, 2. 캡슐화, 3. 다형성, 4. 상속

인터페이스를 구현하고 추가적인 기능을 클래스 단위로 늘려주는 것이 객체지향에서 흔하게 사용하는 디자인 패턴

// 커피 만들기 클래스를 만든다면
/** hi
 * 1. 원두를 볶는다.
 * 2. 원두를 분쇄한다.
 * 3. 아메리카노 커피를 만든다. ---> 하이레벨과 로우 레베로 * 나뉩니다. (하이레벨)
 * --> 우유를 첨가하고 추출액과 섞는다. 카페라테(로우레벨)
 * --> 필터를 설치하고 뜨거운 물을 부루밍한다. 필터커피(로우레벨)
 * --> 차가운 물을 부루잉한다. 더치커피(로우레벨)
 */
/** 하이루 */
function hi() {}

/**안녕 */
const hi = "a";

/** 입력한 텍스트를 HTML 문법으로 표현합니다. */
class TextProcessor {
  constructor() {
    this.data = [];
  }
  // 시작태그를 생성합니다.
  start(data) {
    data.push("<ul>");
  }

  // 종료태그를 생성합니다.
  end(data) {
    data.push("</ul>");
  }

  // 리스트 아이템을 생성합니다.
  addListItem(data, item) {
    data.push(`<li>${item}</li>`);
  }

  // 입력한 값을 데이터에 저장합니다.
  appendList(items) {
    this.start(this.data);

    for (let item of items) {
      this.addListItem(this.data, item);
    }

    this.end(this.data);
  }

  // 데이터 초기화
  clear() {
    this.data = [];
  }

  // 저장된 데이터를 콘솔로 출력합니다.
  showData() {
    console.log(this.data.join("\n"));
  }
}
const myTp = new TextProcessor();

// 추상 클래스 --> 클래스인데 추상적이다.
// 하이레벨 : 모든 로우레벨이 동일하게 상속받는 동작을 정의합니다. --> 다른 언어에서는 (EX.JAVA 인터페이스라고 표현하기도 함.)
// 이렇게 클래스들의 공통적인 내용을 뽑아 상위클래스를 만들어 내는 것을 '추상화'한다고 표현한다.
class ListStrategy {
  start(data) {}
  end(data) {}
  addListItem(data, item) {}
}

// 기능을 클래스로 분리하고 있습니다. 이러한 작업을 캡슐화라고 합니다.
class HTMLListStrategy extends ListStrategy {
  // 상속받아서 새롭게 기능을 정의하고 있습니다. 오버라이딩이라고 표현합니다.
  // 이렇게 인터페이스를 상속받는 여러 객체들이 오버라이딩과 같은 방법으로 다양한 형태로 구현되는 특징을 다형성이라고 합니다.
}
