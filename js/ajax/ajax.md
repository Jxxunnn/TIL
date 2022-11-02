# Ajax란?

Ajax란 비동기 자바스크립트와 XML(Asynchronous JavsScript and XML)을 말하며 기존의 동기식으로 웹을 구성했던 방식과 다르게 비동기식으로 만들 수 있는 기술이다. 웹 통신에 대한 다양한 방법들 중에 하나다.

비동기식으로 서버와 통신하기 위해 기본적으로 `XMLHttpRequest`객체를 사용한다.

ES6에서는 Promise 기반인 `fetch`, `axios`사용도 가능하다. 브라우저 javascript를 사용해 데이터를 로드할 때에는 fetch를, node나 리액트 사용자라면 axios를 권한다.

비동기 통신으로서 웹 페이지 전체를 다시 로딩할 필요없이, 웹 페이지의 일부분만을 업데이트 하는 기법을 이야기합니다. 만약 작은 텍스트만 변경하고 싶을 때 기존에 웹 페이지 기술을 적용한다면 페이지 전체를 새로고침(재로딩) 해야 하지만, ajax를 사용하면 필요한 데이터만 서버에 요청하여 받은 후 변경될 부분만 반영해주면 됩니다.

‼️**여기서 잠깐**

- **동기** : 요청을 보낸 후 응답을 받아야 다음 동작을 실행하는 방식입니다. 순차적으로 실행되며, 어떤 작업이 수행 중이라면 이 후 작업들은 현재 작업이 완료될 때까지 중단됩니다.
- **비동기** : 요청을 보낸 후 응답과 상관없이 다음 동작을 실행합니다. 병렬적으로 실행되며, 현재 작업이 종료되지 않더라도, 다음 작업들은 응답(현재 작업에 대한)을 대기하지 않고 현재 작업이 실행된 후 즉시 실행됩니다.

서버와는 다음과 같은 다양한 형태의 데이터를 주고 받을 수 있습니다.

- json
- XML
- HTML
- 텍스트 파일 등

## 서버와의 통신

### XMLHttpRequest 객체

XMLHttpRequest 객체는 서버와 데이터 교환시(상호작용)에 사용되며, 전체 페이지의 새로고침없이 서버에서 데이터를 받는 것이 가능합니다. 이것을 통해 페이지를 사용하고 있는 행동을 방해하지 않고 페이지의 일부를 업데이트하는 것도 가능하겠죠!

### XMLHttpRequest 객체의 생성

```js
var 변수이름 = new XMLHttpRequest(); // 인스턴스 생성
```

### 서버에 요청(request)

XMLHttpRequest 인스턴스의 `open()`메소드를 이용해 요청을 초기화하고, `send()`메소드를 이용해 서버로 요청 합니다.

1. `open`메소드
   open() 메소드는 서버로 보낼 Ajax 요청의 형식을 초기화합니다. 어떤 방식으로 누구에게 데이터를 보내야 할지 결정합니다.

```js
open(전달방식, URL주소, 동기여부);
```

- 전달 방식(요청을 처리할 방식): GET 방식, POST방식
- URL 주소: 요청을 처리할 서버의 파일 주소 URL
- 동기 여부: 동기, 비동기 설정

2. `send()` 메소드
   send()메소드는 open()메소드로 작성한 Ajax 요청을 서버로 보냅니다. 비동기식으로 설정 후 전송할 경우, 바로 리턴되고, 동기식일 경우 서버에서 응답이 올 때까지 대기합니다.

```
send() // GET방식
send(문자열) // POST방식
```

### GET방식과 POST 방식 HTTP 요청

1. GET

- 주소에 데이터(data)를 추가하여 전달하는 방식(브라우저에 의해 캐시되어(cached) 저장)
  URL 주소 뒤에 '?'를 사용하여 다음 데이터를 표현합니다.
  https://www.google.com/search?q=검색
- 전송할 때 문자열의 길이 제한이 있기 때문에 대용량 데이터 전송에 제한이 있습니다.
- 보안에 취약합니다.

2. POST

- 데이터(data)를 별도로 첨부하여 전달하는 방식(브라우저에 의해 캐시되지 않으므로, 브라우저 히스토리에도 남지 않습니다.)
- 데이터는 쿼리 문자열과는 별도로 전송된다. ex) 이미지 파일을 전송할 때 쿼리에 이미지 이름을 넣어주세요. 예를 들어 url주소를 'http://example.com/imageupload?imagename=이미지이름.jpg'형태로 요청하고 데이터에 이미지 파일을 넣어 요청하는 방식이 가능합니다.
- 데이터의 길이 제한이 없습니다.
- GET방식보다 보안성이 높습니다.

> 캐시cache: 데이터를 임시로 저장해두는 장소. 이를테면, 사용자가 요구한 웹 페이지는 하드 디스크 내의 캐시 디렉토리에 저장된다.

### 요청하기

1. GET방식으로 요청하기

```js
httpRequest.open(
  "GET",
  "/examples/media/request_ajax.php?city=Seoul&zipcode=06141",
  true
);
httpRequest.send();
// GET 방식으로 요청을 보내면서 데이터를 동시에 전달함.
```

2. POST방식으로 요청하기

서버로 전송하고자 하는 데이터를 HTTP 헤더의 body 영역에 실어 보냅니다.
Header Content-Type에 데이터 타입을 명시해줘야 합니다.

```js
httpRequest.open("POST", "http://example.com/imageupload?imagename=이미지이름.jpg", **true**);
httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
httpRequest.send(data);//데이터는 이미 있는상태라고 가정
```

요청하는 형태에 따라 Content-Type을 잘 성정해야 한다.

3. 비동기식(asynchronous) 요청(`open()` 메소드의 세번째 인수)

- true - 비동기식 요청
  서버로 비동기식 요청을 보내면, 자바스크립트는 서버로부터의 응답을 기다리면서 동시에 다른 일을 할 수 있습니다. 단, 응답이 오기전에 요청에 대한 응답을 읽으려하면 문제가 생길 수 있으니 사용할때 주의해야 겠죠?
- false - 동기식 요청

  비동기식 요청과 다르게 요청을 보내고 응답이 올때까지 기다립니다. 응답이 도착해야 다음 동작을 수행하는 방식이기 때문에 요청이 길어지면 기다려야하는 시간도 길어지겠죠.

비동기식 요청과 동기식 요청을 적절하게 사용하는 것이 중요합니다!

## 서버로부터의 응답

### 1.서버로부터의 응답(response) 확인

Ajax에서 서버로부터의 응답을 확인하는데 사용합니다.

- readyState 프로퍼티
- status 프로퍼티
- onreadystatechange 프로퍼티

### 2. readyState 프로퍼티

XMLHttpRequest의 상태의 변화가 생기면 readyState의 상태가 바뀝니다.

1. UNSENT (숫자 0) : XMLHttpRequest 객체가 생성됨(초기화는 되지 않은 상태)

2. OPENED (숫자 1) : open() 메소드가 호출됨

3. HEADERS_RECEIVED (숫자 2) : send() 메소드가 호출됨

4. LOADING (숫자 3) : 응답 본문을 수신중

5. DONE (숫자 4) : 요청 완료

```js
// mdn
var xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
  console.log("LOADING", xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
  console.log("DONE", xhr.readyState); // readyState will be 4
};

xhr.send(null);
```

### status 프로퍼티

응답에 따른 상태입니다. http에 따른 status를 제공하는 규약입니다. 3자리 숫자로 이루어져 있으며 첫번째 자리는 1~5까지 제공됩니다. 앞 자리만으로 대략적인 상태를 알 수 있습니다.

```
404 Not Found
```

# HTTP 헤더

HTTP 헤더는 클라이언트와 서버가 요청 또는 응답으로 다양한 데이터 정보를 전송하도록 해줍니다.

HTTP 요청 헤더는 원래 웹 브라우저가 자동으로 설정해서 보내므로, 사용자가 직접 설정할 수 없었습니다. Ajax를 사용하면 HTTP 요청 헤더를 직접 설정할 수도 있고, HTTP 응답 헤더의 내용을 직접 확인할 수도 있습니다.

`HTTP 요청 헤더 예제`

```
Accept: */*
Referer: http://example.com/imageupload?imagename=이미지이름.jpg
Accept-Language: ko-KR
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81
Connection: Keep-Alive
```

HTTP 헤더는 헤더 이름, 콜론(:) 공백, 헤더 값의 순서로 구성됩니다.

### HTTP 요청 헤더

- Host
- User-Agent
- Accept
- Authorization
- Origin
- Referer

---

### HTTP 응답 헤더

- Access-Control-Allow-Origin 헤더
- Allow 헤더
- Location 헤더
- Content-Security-Policy 헤더

---

### 공통 헤더

- Date
- Connection
- Cache-Control
- Content-Length
- Content-Type
- Content-Language
- Content-Encoding
