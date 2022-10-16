# HTML

## 1. HTML이란?

웹에서 문서를 표현하기 위한 방법

## 2. HTML표준

- HTML living standard(https://html.spec.whatwg.org/multipage/#toc-semantics)
- 리빙스탠다드 안에 MDN 문서가 같이 있다.MDN을 참고해도 좋다.

## 3. HTML 요소

- 시작 태그(start tag(O), opening tag), 종료 태그(end tag(O), closing tag) - h1, p
- 빈 태그(void tag, empty tag) - img, hr, br

## 4. The elements of HTML

### The document element

- html element

### Document metadata

- head
- title
- base
- link
- meta
- style

### Sections

- body
- article
  - heading 요소를 꼭 포함해야 한다.
  - 독립해서 볼 수 있다.
- section
  - heading 요소를 꼭 포함해야 한다.
  - 범용적인 묶음 목적으로 사용
- nav
- aside
  - 광고 등 컨텐츠와 연관성이 떨어지는 컨텐츠 집합
- h1, h2, h3, h4, h5, h6
- hgroup
  - 문서 구획을 할 때 2차 제목 연결
  - 주의사항 : hgroup은 이론적으로만 유효
- header
  - 컨텐츠의 시작 부분을 나타내는 요소(구역의 제목을 포함하는 용도로 많이 사용합니다.)
  - h1 > a > img
  - h1(screen out) + img
- footer
  - 작성자 정보, 저작권, 관련된 링크 등의 내용을 담는 구획
- address
  - 주소 정보 등을 담습니다.

### Grouping content

- p
  - a 태그 내부에 block 요소 삽입 가능
- hr
  - 브라우저마다 보여지는 화면이 달라서 은행권 같은 곳에서는 사용하지 않습니다.
  - border나 이미지 사용합니다.
- pre
  - html이 공백 병합이 되는데 공백을 병합하고 싶지 않을 때 사용
- blockquote
  - 인용블록
  - 참고 : q는 인용구(문장 안에 사용)
- ol
  - type이 있습니다. i, I,
- ul
  - 메뉴로 많이 사용합니다.
- menu
- li
- dl
  - 정의 목록
  - 보통 dl > div > dt > dd
- dt
  - 정의할 용어
- dd
  - 용어 설명
- figure
- figcaption
  - 이미지와 함께 컨텐츠의 캡션이 연결되도록 사용
- main
  - 주 컨텐츠가 담겨져 있는 곳
- div
  - 최후의 수단으로 활용. 이상과 현실의 괴리가 있을 수 있습니다.

### Text-level semantics

- a
  - a 태그 내부에 block 요소 삽입 가능
  - html 문법상 sections, grouping content 요소들은 텍스트 레벨 요소의 자식으로 사용되지 않지만, 앵커 태그만 예외적으로 허용된다.
  - 사용자와 인터렉션이 가능한 요소를 자식(X)
  - a > a(X)
  - a > button(X)
- em
  - 스크린리더가 강조해서 읽는다.
  - 강조의 의미가 있다.
- strong
  - 스크린 리더가 강조해서 읽고
  - strong을 중첩해서 의미를 더욱 강조할 수도 있다.
- small
- s
- cite
- q
- dfn
  - 현재 문맥에서 정의하고 있는 용어
- abbr
  - 준말
- ruby
- rt
- rp
- data
- time
- code
- var
- samp
- kbd
- sub and sup
  ```html
  <p>H<sub>2</sub>0</p>
  <p>x<sup>2</sup>=4</p>
  ```
- i
  - 기울임 글꼴
- b
  - 글씨를 굵게
- u
- mark
- bdi
- dbo
- span
  - 별다른 의미 없이 보통 줄 바꿈 없이 영역을 묶는 용도로 사용
- br
  - 줄바꿈
- wbr
  - 줄바꿈(텍스트 박스에서 한 줄로 모두 표시가 안될 때에만 )

### Embedded content

- picture
  - 각기 다른 디스플레이 조건에 맞는 이미지를 보여주는 요소
- source
- img
  - width, height를 직접 코딩하는 경우 (X)
    -> CSS의 영역으로
  - alt같은 경우 스크린 리더가 어떻게 읽는 지 파악하고 있어야 한다.
  - alt 비어있는 경우 : 읽지 않고 넘어간다.
  - alt 속성 자체가 없는 경우 : 파일명을 읽는다.
- iframe
  - iframe은 현재 HTML 페이지에서 또 다른 HTML 페이지를 보여주고 싶을 때 사용한다.
  - 사용할 때에 보안 권고사항을 준수해야 한다.(개발 요구 사항이나 회사 코딩 컨벤션에 있을 것이다.)
- embed
- video
- audio
- track
- map
- area
- Tabular data
- table
- caption
- colgroup
- col
- tbody
- thead
- tfoot
- tr
- td
- th
  ```html
  <table>
    <caption>
      이 table은 영국에서 최초로 시작되어 일년에 한바퀴 돌면서...
    </caption>
    <colgroup>
      <col class="구분" />
      <col class="이름" />
      <col class="판매량" />
    </colgroup>
    <thead>
      <tr>
        <th>구분</th>
        <th>이름</th>
        <th>판매량</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>해리포터</td>
        <td>100</td>
      </tr>
      <tr>
        <td>2</td>
        <td>헝거게임</td>
        <td>200</td>
      </tr>
      <tr>
        <td>3</td>
        <td>반지의제왕</td>
        <td>300</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">총 판매량</td>
        <td>600</td>
      </tr>
    </tfoot>
  </table>
  ```

### Forms

- form

  - GET : URL로 데이터를 전달할 때 사용(file같은 큰 파일은 get으로 전송하지 않습니다. id와 pw같은 민감데이터 x)
  - POST : 패킷안에 데이터를 넣어 전달할 때 사용한다. (민감데이터 O, 큰데이터 O)

- label
- input
- button
- select
- datalist
- opstgroup
- option
- textarea
- output
- progress
- meter
- fieldset
- legend
- Interactive elements
- details
- summary
- dialog

## 5. emmet 자동완성

    ```h
    h1

    h1+h1+p
    h1*3
    h1{hello world}*10
    h1#hojun
    h1.hoju
    (div>table>(tr>(td*2))*3)+(footer>p)
    div#one.c1.c2.c3
    ul>li.item$\*5
    a{Click}
    lorem
    img:z

    <!-- lorem*5는 5개의 문장 -->

    lorem\*5

    <!-- lorem5는 5개의 단어 -->

    lorem5
    [a='value1' b="value2" c=1]
    a[href='www.naver.com']
    ```

## 6. 참고사항

- picture, source, img

  - WebP(웹피, 구글에서 만든 이미지 포맷)가 용량이 적고, 투명도를 표현할 수 있음
  - jpg: 투명도 표현 X
  - png: 투명도 표현 O
  - source : 해상도에 맞는 이미지 선택
  - source > srcset: 여러 해상도에 대응하는 이미지 셋을 구성할 수 있다.
  - source > media :

- form
  - checked : 체크상태 표시
  - required : 필수값
  - min : 최솟값
  - max : 최댓값
  - value : 입력된 값
  - placeholder : 입력값 힌트
  - minlength : 최소 길이
  - maxlength : 최대 길이
  - autocomplete : 브라우저 제공 자동완성

# CSS

## 1. CSS란?

- Cascading Style Sheets
