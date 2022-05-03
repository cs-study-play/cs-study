# TCP

## TCP 개념
- Transmission Control Protocol
- 양종단 호스트 내 프로세스 상호 간에 신뢰적인 연결지향성 서비스를 제공하는 전송 계층 프로토콜
- TCP(티씨피)는 "Transmission Control Protocol"의 약자로서, 인터넷에서 사용되는 표준 통신 프로토콜이다. 한국어로 번역하면, 전송 제어 프로토콜이라는 뜻이다. 흔히 TCP와 IP를 결합하여, TCP/IP라고 사용한다. 
- 전송 계층(Transport Layer)에서 사용되는 프로토콜로는 대표적으로 TCP와 UDP가 있다.
  - TCP가 1:1 연결을 통해 안전하게 데이터 를 교환하는 것과 달리, UDP는 1:N 방식으로 한쪽에서 다른 쪽으로 일방적으로 데이터를 전송한다. TCP가 전화와 비슷하다면, UDP는 일방적으로 보내는 소포와 비슷하다.
  - 비교적 간단하고 빠른 UDP에 비해 TCP는 더 복잡하고 느리지만, 보다 신뢰성있는 연결이 가능해진다.
  - TCP와 UDP는 포트 번호를 이용하여 주소를 지정하는것과 데이터 오류검사를 위한 체크섬 존재하는 두가지 공통점을 가지고 있지만 정확성(TCP)을 추구할지 신속성(UDP)을 추구할지를 구분하여 나뉜다.

- 참고**
  - 전송 계층은 송신자와 수신자를 연결하는 통신 서비스를 제공하고 IP에 의해 전달되는 패킷의 오류를 검사하며 재전송 요구 제어등을 담당하는 계층이다.
  - 다시말해 데이터의 전달을 담당한다.

<br/>

## TCP 특징
- 신뢰성 있는 연결을 지향한다.
- 세그먼트에 순번을 지정하여 데이터의 순서를 유지한다.
- 3-Way Handshaking을 통해 연결하고 4-Way Handshaking을 통해 연결을 종료한다.

<br/>

## TCP 세그먼트
|![TCP_segment](../Images/TCP_segment.jpg)|
|:---:|

- TCP 세그먼트는 TCP로 연결된 세션간의 전달되는 데이터 단위
- TCP는 데이터 스트림으로부터 데이터를 받아 들여 이것을 일정 단위로 분할한 뒤 TCP 헤더를 덧붙여 TCP 세그먼트를 생성한다. TCP 세그먼트는 *IP 데이터그램에 캡슐화되어 상대방과 주고 받게 된다.
  ```
  TCP 세그먼트 =  세그먼트 헤더(TCP 헤더) + 데이터
  ```
  ```
  TCP 페이로드 세그먼트 크기 =  (IP헤더의 Total Length) - (IP 헤더의 Header Length) - (TCP헤더의 Header Length)
  ```

<br/>

## TCP 헤더
|![TCP_header_1](../Images/TCP_header_1.png)|
|:---:|

|![TCP_header_2](../Images/TCP_header_2.png)|
|:---:|

- Source Port (16 비트) : 출발지 포트번호이다. 즉, 송신 포트를 의미한다.
- Destination Port (16 비트) : 목적지 포트번호이다. 즉, 수신 포트를 의미한다.
- Sequence Number (32 비트) : 바이트 단위로 순서화되는 번호로, 이것을 통해 신뢰성(3-Way Handshake) 및 흐름제어(sliding Window) 기능을 제공한다.
- Acknowledgment Number (32 비트) : 수신하기를 기대하는 다음 byte 번호를 의미한다. (마지막으로 수신에 성공한 번호의 +1)
- Data Offset(HLEN) (4 비트): 헤더 길이 필드이며 IPv4와 마찬가지로 나누기 4 계산 후 2진수로 작성된다.
- Reserved (3 비트): 예약된 필드이다. 현재 사용되지 않는다.
- Flags(TCP 제어 플래그) (9 비트) : 현재 세그먼트의 속성을 나타낸다. 기존에는 6개의 플래그만을 사용했지만, 혼잡 제어 기능의 향상을 위해 Reserved 필드를 사용하여 NS, CWR, ECE 플래그가 추가되었다.
    |필드|의미|
    |---|---|
    |URG|Urgent Pointer(긴급 포인터) 필드에 값이 채워져있음을 알리는 플래그. 이 포인터가 가리키는 긴급한 데이터는 높게 처리되어 먼저 처리된다. 요즘에는 많이 사용되지 않는다.|
    |ACK|Acknowledgment(승인 번호) 필드에 값이 채워져있음을 알리는 플래그. 이 플래그가 0이라면 승인 번호 필드 자체가 무시된다.|
    |PSH|Push 플래그. 수신 측에게 이 데이터를 최대한 빠르게 응용프로그램에게 전달해달라는 플래그이다. 이 플래그가 0이라면 수신 측은 자신의 버퍼가 다 채워질 때까지 기다린다. 즉, 이 플래그가 1이라면 이 세그먼트 이후에 더 이상 연결된 세그먼트가 없음을 의미하기도 한다.|
    |RST|Reset 플래그. 이미 연결이 확립되어 ESTABLISHED 상태인 상대방에게 연결을 강제로 리셋해달라는 요청의 의미이다.|
    |SYN|Synchronize 플래그. 상대방과 연결을 생성할 때, 시퀀스 번호의 동기화를 맞추기 위한 세그먼트임을 의미한다.|
    |FIN|Finish 플래그. 상대방과 연결을 종료하고 싶다는 요청인 세그먼트임을 의미한다.|
    |||
    |NS|ECN에서 사용하는 CWR, ECE 필드가 실수나 악의적으로 은폐되는 경우를 방어하기 위해 RFC 3540에서 추가된 필드이다.|
    |ECE|ECN Echo 플래그. 해당 필드가 1이면서, SYN 플래그가 1일 때는 ECN을 사용한다고 상대방에게 알리는 의미. SYN 플래그가 0이라면 네트워크가 혼잡하니 세그먼트 윈도우의 크기를 줄여달라는 요청의 의미이다.|
    |CWR|이미 ECE 플래그를 받아서, 전송하는 세그먼트 윈도우의 크기를 줄였다는 의미이다.|

- Window size : 자신의 수신 버퍼 여유 용량 크기를 통보하여 얼마만큼의 데이터를 받을 수 있는지 상대방에게 알려주어 흐름제어를 수행하게 되는 필드이다.
- Checksum : 헤더 및 데이터의 에러 확인을 위해 사용되는 필드이다.
- Urgent Pointer : 어디서부터 긴급 값인지 알려주는 플래그이다. (TCP Flags의 U와 세트)
- Options : 옵션 필드는 TCP의 기능을 확장할 때 사용하는 필드로, 크기가 고정된 것이 아니라 가변적이다.
- Padding : TCP 헤더의 종료 지점과 데이터의 시작 지점을 32 비트 단위 길이에 맞추기 위해 사용한다.

<br/>

## 3 way handshake 
|![TCP_3way_1](../Images/TCP_3way_1.png)|
|:---:|

|![TCP_3way_2](../Images/TCP_3way_2.png)|
|:---:|

|![TCP_3way_3](../Images/TCP_3way_3.png)|
|:---:|

- TCP 통신을 이용하여 데이터를 전송하기 위해 네트워크 연결을 설정(Connection Establish) 하는 과정이다.
- TCP는 정확한 전송을 보장해야 한다. 따라서 통신하기에 앞서, 논리적인 접속을 성립하기 위해 3 way handshake 과정을 진행한다.
- 간단히 표현하면 다음과 같다
  - Client -> Server : 내 말 들려?
  - Server -> Client : 잘 들려. 내 말은 들려?
  - Client -> Server : 잘 들려!


#### Step 1. Client -> Server : SYN
- Client에서 Server에게 SYN를 보냅니다. 이 때 Client의 상태는 SYN을 보냈다는 SYN_SENT 상태로 바뀌게 됩니다.
- Client가 최초로 데이터를 전송할 때 Sequence Number를 임의의 랜덤 숫자로 지정하고, SYN 플래그 비트를 1로 설정한 세그먼트를 전송한다.
- PORT 상태 
  - Client : CLOSED -> (SYN 보낸 후) -> SYN_SENT
  - Server : LISTEN

#### Step 2 SYN + ACK
- Server에서는 SYN을 받았다는 SYN_RECEIVED 상태로 바뀝니다. 그리고 나서 Client에게 잘 받았다는 응답의 ACK과 SYN를 보냅니다.
- Server는 Acknowledgement Number 필드를 (Sequence Number + 1)로 지정하고, SYN과 ACK 플래그 비트를 1로 설정한 세그먼트를 전송한다.
- PORT 상태 
  - Client : SYN_SENT
  - Server : LISTEN -> (SYN + ACK 보낸 후) -> SYN_RECEIVED

#### Step 3 ACK
- Client에서는 상호 연결이 된 상태의 ESTABLISHED로 바뀝니다. 그리고 나서 Server에게 ACK을 보냅니다. Server에서는 ACK를 받은 후에 ESTABLISHED 상태로 바뀌게됩니다.
- 전송할 데이터가 있으면 이 단계에서 데이터를 전송할 수 있다.
- PORT 상태
  - Client : SYN_SENT -> (SYN + ACK 받은 후) -> ESTABLISHED
  - Server : SYN_RECEIVED -> (ACK 받은 후) -> ESTABLISHED

- 간단히 표현하면 다음과 같다

<br/>

## 4 way handshake

<br/>

## 👍 참조사이트
- https://itwiki.kr/w/TCP
- https://itwiki.kr/w/TCP_%EC%A0%9C%EC%96%B4_%ED%94%8C%EB%9E%98%EA%B7%B8
- https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C
- http://wiki.hash.kr/index.php/TCP
- https://evan-moon.github.io/2019/11/10/header-of-tcp/
- https://gyoogle.dev/blog/computer-science/network/TCP%203%20way%20handshake%20&%204%20way%20handshake.html
- https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=4717010&logNo=60212483299
- https://dany-it.tistory.com/331
- https://lucidmaj7.tistory.com/119
- https://nogan.tistory.com/20
- https://beenii.tistory.com/127
- https://mindnet.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-22%ED%8E%B8-TCP-3-WayHandshake-4-WayHandshake
