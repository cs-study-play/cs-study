## HTTP란?

HTTP(HyperText Transfer Protocol)는 클라이언트(웹 브라우저)와 웹 서버 사이의 통신에 이용되는 클라이언트-서버 프로토콜로 애플리케이션 계층의 프로토콜이다. 클라이언트가 HTTP를 통해 웹 서버에 서비스를 요청하면 HTML, CSS 등 필요한 자원을 전송해준다.

클라이언트가 서버에 자원을 요청할 때에는 주로 GET, POST 등의 요청을 사용하고 서버는 이에 응답한다. HTTP의 상태 코드는 100, 200, 300, 400, 500번대가 있고 요청이 성공적으로 완료된 경우에는 200 OK, 요청이 잘못된 경우에는 400 Bad Request, 서버에 문제가 있는 경우엔 500번대 상태 코드가 전달된다. [MDN web docs](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)를 참고하면 다른 HTTP/상태 코드도 확인할 수 있다.

<br><br>

## HTTP의 발전 과정

HTTP는 HTTP/1.0, HTTP/1.1, HTTP/2, HTTPS를 거쳐 현재 HTTP/3까지 발전해왔다.

1. HTTP/1.0

- 한 번의 요청에 한 번의 응답이 가능한 가장 기본적인 HTTP/요청이 가능
- 요청시마다 클라이언트와 서버의 통신을 연결하고, 응답 이후엔 통신을 끊는다.
- RTT(Round Trip Time)가 증가해 요청이 많을 경우 과부하가 생긴다.

2. HTTP/1.1

- keep-alive라는 기능이 표준화되었다(HTTP/1.0에도 있던 기능이지만 표준화가 되지 않았다). 한 번 연결이 되면 데이터 교환을 마칠 때까지 유지하고, 데이터 교환이 모두 끝났을 때 연결을 끊는다.
- 모든 요청과 응답은 순서대로 처리된다.
- 이전 데이터 요청이 빠르게 처리되지 않으면 그 뒤의 요청도 밀리게 되는 HOL Blocking(Head Of Line Blocking)이 발생할 수 있다.

3. HTTP/2.0

- 여러 요청에 순서와 상관 없이 응답하는 멀티플렉싱이 지원된다. 여러 스트림을 이용해 송수신하므로 하나의 스트림에 문제가 생겨도 다른 스트림에서 처리하는 데이터에는 문제가 발생하지 않는다.
  <img src="https://web-dev.imgix.net/image/C47gYyWYVMMhDmtYSLOWazuyePF2/4RwALfscCwB7MDa1bGsV.svg">
  출처 : https://web.dev/performance-http2/
- 클라이언트가 요청하지 않아도 서버 측에서 응답을 보낼 수 있는 서버 푸시가 가능하다. 클라이언트가 html파일을 요청하면 함께 필요한 css나 js 파일을 함께 보낼 수 있다.
- 지연 시간이 줄고 응답 시간이 더욱 빨라진다는 장점이 있다.

<img src="https://velog.velcdn.com/images%2Fgjrjr4545%2Fpost%2F338149a8-b2e6-4842-a693-b873aa3476d7%2Fhttp1.0vshttp1.1vshttp2.0.PNG">
출처 : https://velog.io/@gjrjr4545/HTTP-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C-%EB%B0%9C%EC%A0%84

4. HTTPS

- 애플리케이션 계층과 전송 계층 사이에 신뢰 계층인 SSL/TLS 계층을 추가한 HTTP/요청이다.
- SSL(Secure Socket Layer)는 전송 계층에서 보안을 제공하는 프로토콜로 1.0, 2.0, 3.0을 거쳐 TLS(Transport Layer Security Protocol) 1.0, 1.3 등의 순서로 발전한다.
- 주로 클라이언트와 서버 사이의 통신을 다른 사람(해커 등)이 도청하지 못하도록 막는 역할을 한다. 보안과 관련된 부분은 다루려면 길어지므로 다음 포스팅으로 넘긴다.

5. HTTPS/3

- HTTP/2는 TCP 위에서 돌아가지만 HTTP/3은 UDP 기반의 QUIC(Quick UDP Internet Connection) 계층 위에서 돌아간다.
- TCP를 사용하지 않고 UDP를 사용하기 때문에 초기 연결 설정시에 지연 시간이 감소한다는 장점이 있다.

## 참고

면접을 위한 CS 전공지식 노트, 주홍철, 길벗, 2022
<br>
모두의 네트워크, 미즈구치 카츠야, 길벗, 2018
<br>
[MDN web docs](https://developer.mozilla.org/ko/docs/Web/HTTP)
<br>
