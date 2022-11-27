// 디자인 패턴은 어플리케이션의 구조를 짜는 전략이다.
// 전역변수는 대부분의 상황에서 피해야 할 코드 문법임.
/* 
싱글톤(Singleton) 패턴의 정의는 단순하다. 객체의 인스턴스가 오직 1개만 생성되는 패턴을 의미한다.

가장 먼저 떠올릴 수 있는 이점은 아무래도 메모리 측면일 것이다. 최초 한번의 new 연산자를 통해서 고정된 메모리 영역을 사용하기 때문에 추후 해당 객체에 접근할 때 메모리 낭비를 방지할 수 있다. 뿐만 아니라 이미 생성된 인스턴스를 활용하니 속도 측면에서도 이점이 있다고 볼 수 있다.

또다른 이점은 다른 클래스 간에 데이터 공유가 쉽다는 것이다. 싱글톤 인스턴스가 전역으로 사용되는 인스턴스이기 때문에 다른 클래스의 인스턴스들이 접근하여 사용할 수 있다. 하지만 여러 클래스의 인스턴스에서 싱글톤 인스턴스의 데이터에 동시에 접근하게 되면 동시성 문제가 발생할 수 있으니 이점을 유의해서 설계하는 것이 좋다.
 */
class Singleton {
  constructor(data) {
    this.data = data;
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
}
console.log(test === test2);

const test = new Singleton(10);
const test3 = new Singleton(50);

// 10
