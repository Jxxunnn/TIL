# 1. 자료구조와 알고리즘, 코딩테스트

- 추천 서적
  - 학문적 접근 : The Art of Computer Programming(도널드 커누스)
  - 코딩테스트 접근 : 파이썬 알고리즘 인터뷰(박상길)
  - 기타 : 파이썬 자료구조와 알고리즘(중학교 학생 가르칠 때 사용), 그림으로 배우는 알고리즘(코드 없고 그림만 있습니다), 알고리즘 산책(역사적인 알고리즘을 쭉 훑어봅니다. 수학적인 내용이 많고 코드는 C++로 되어 있으나 보는데 큰 무리는 없습니다.)

## 1.1 코테 전 준비사항

1. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
   - 프로그래머스 Node Version(12) -> replaceAll(15)
   - 사용 가능 라이브러리 미리 확인 등
   - 대부분 numpy나 pandas 같은 라이브러리 사용 금지이지만 간혹가다 제한이 없는 곳도 있습니다. numpy는 python보다 대부분의 경우 속도가 빠릅니다. 크기에 따라 다르지만 100000개 이상의 배열의 연산의 경우 50배 이상의 성능을 보입니다.
2. 언어 선택(속도 : C++, 풀이 : Python)
3. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
4. 유용한 라이브러리 정리! (collections, itertools(순열, 조합), functools, itertools, re, bisect 등) - [제주코딩베이스캠프](https://www.youtube.com/channel/UC4GnvNKtuJ4cqWsYjxNxAEQ) 유튜브 채널 확인
5. 기억해두자! 예외처리!
6. 속도개선
   1. class로 구현
   2. 메서드 대신 슬라이싱 구현(슬라이싱은 C로 구현되어 있어 메서드보다 통상 8배정도 빠릅니다.)하세요. 다만 공간복잡도가 상승할 수 있습니다. (리스트.reverse(), reversed(리스트), 리스트[::-1])
   3. for문 대신 list comprehension을 사용하세요. 더 빠릅니다.
   4. 재귀는 느립니다. 최후의 수단으로 사용하세요.

## 1.2 문제 유형과 출제 방식

- 5 ~ 6시간, 6 ~ 7문제
- 30분씩 4문제, 2시간씩 2문제
- 문제 유형 분석 관련 글
  - [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
  - [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
  - [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
    - 요구사항 구현 알고리즘(33%)
    - 그리디 알고리즘(20%)
    - 너비우선탐색, 깊이우선탐색(20%)
    - 정렬(8%)
    - 다이나믹 프로그래밍, 최단경로, 이진 탐색 등
- 전체 문제 유형
  - 알고리즘
    - 정렬
    - 이진 검색
    - 비트 연산
    - 슬라이딩 윈도우, 페이지 교체, 투포인트
    - 분할 정복
      - 그리디 알고리즘
      - 다이나믹 프로그래밍
      - 퀵소트, 병합정렬
  - 자료구조
    - 선형
      - 스택과 큐, 데크
      - 연결리스트, 해시 테이블
    - 비선형
      - 그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
      - 트리
        - 힙
        - 트라이