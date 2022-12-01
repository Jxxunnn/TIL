// describe 함수 : 테스트할 유닛들의 모음
describe("자스민 테스터입니다.", () => {
  const textManager = new TextManager();
  // it 함수 : 함수의 테스트 유닛입니다. 첫번째 인자로 함수의 설명, 두 번째 인자로 테스트할 함수를 전달합니다.
  it("텍스트 값을 전달합니다.", () => {
    const initValue = textManager.getValue();
    expect(textManager.getValue()).toBe(initValue);
  });
  it("텍스트 값을 수정합니다.", () => {
    const testValue = { data: "Hello zebars!" };
    textManager.setValue(testValue);
    expect(textManager.getValue()).toBe(testValue.data);
  });
  // expect : 기대식.. 실행할 함수의 결과값을 인자로 전달합니다.
  // toBe 함수 : 매치 함수입니다. 내가 기대한 결과가 일치하는지 판단하는 함수
});