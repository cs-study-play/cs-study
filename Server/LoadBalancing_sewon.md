# 로드밸런싱(Load Balancing)

_일전에 AWS 서버 정리하면서 간단히 본적이 있는데, 아예 로드 밸런싱만 따로 정리하고 싶어서 이번 아티클을 준비했다._

우선 로드밸런싱의 정의는 다음과 같다.

```
여러 대의 서버를 두고 서비스를 제공하는 분산 처리 시스템에서 필요한 기술로,
둘 이상의 CPU 또는 저장장치와 같은 컴퓨터 자원들에게 작업을 나누는 것
```

![image](https://user-images.githubusercontent.com/55613591/163809183-3248cd15-d3cb-428d-8ee1-4995baf94566.png)

<br/>

## 로드밸런싱이 필요한 이유

클라이언트가 적은 경우에는 서버가 여유롭게 사용자가 원하는 결과를 응답해줄수 있지만,

❓ 그러나 클라이언트가 **굉장히 많은 경우**에는?   
  -> 서버는 최대한 응답하려하지만 결국에는 동작에 한계가 있어 응답이 어려워진다. (소위 말하는 서버 터짐)
  

따라서 적당히 **서버를 늘리거나**, 서버의 **성능을 올려줘야함**

❗ 이런 서버에 가해지는 부하를 적절히 분산해주는 것이 로드밸런서!

<br/>

## Scale-up 과 Scale-out

위에서 언급한 서버의 성능을 올려주는 것이나 서버를 늘리는 것을 각각 **Scale-up** 과 **Scale-out** 이라고 부른다.
![image](https://user-images.githubusercontent.com/55613591/163811544-a3651aa7-a8ce-4981-87f3-46aa0a0f00e8.png)


* Scale-up
  서버 자체의 성능을 확장하는 것.
  (더 좋은 성능으로 업그레이드!)
  
* Scale-out
  성능은 기존 서버와 동일하거나 낮은 수준으로 서버를 여러 대 증설하여 운영하는 것.
  (서버의 양을 늘리기!)
  
✔ 특히 이 두개 중에서 Scale-out 방식을 선택했다면, 여러 대의 서버로 트래픽을 균등하게 분산해주는 로드밸런싱이 꼭 필요함!

<br/>

## 로드밸런서의 종류

L2, L3, L4, L7 등 다양한 종류의 로드밸런서가 있지만, 대표적으로 비교되는 L4, L7을 살펴볼 것이다.

1️⃣ **L4, 클래식 로드 밸런서 (ELB)** 

- ISO 7계층중 4계층(Transport Layer, Network Layer)에서 작동하는 이 로드밸런서는 IP, IPX, TCP, UDP의 정보를 바탕으로 로드를 분산함.   
- IP주소나 포트번호, MAC주소, 전송 프로토콜에 따라 트래픽을 나누는 것이 가능   
- 라우터 스위치등 물리적인 하드웨어 영역이기 때문에 데이터를 변경, 수정이 불가능

2️⃣ **L7, 애플리케이션 로드 밸런서 (ALB)**   

- ISO 7계층중 7계층(Application Layer)에서 작동하는 이 로드밸런서는 HTTP, FTP, SMTP 에서 로드를 분산함.   
- 따라서 HTTP 헤더, 쿠키 등과 같은 사용자의 요청을 기준으로 특정 서버에 트래픽을 분산하는 것이 가능   
  (패킷의 내용을 확인하고 그 내용에 따라 로드를 특정 서버에 분배하는 것이 가능)   
- 애플리케이션 계층이기 때문에 포트나 헤더등이 수정 가능   
- URL에 따라 부하를 분산시키거나, HTTP 헤더의 쿠키값에 따라 부하를 분산하는 등 클라이언트의 요청을 보다 세분화해 서버에 전달이 가능   
- 특정한 패턴을 지닌 바이러스를 감지해 네트워크를 보호할 수 있으며, DoS/DDoS와 같은 비정상적인 트래픽을 필터링할 수 있어 네트워크 보안 분야에서도 활용   

![image](https://user-images.githubusercontent.com/55613591/163812909-e4ed3c5c-3fae-47d6-9116-58bbd5b14bb6.png)

<참고문헌>

https://m.post.naver.com/viewer/postView.nhn?volumeNo=27046347&memberNo=2521903    
https://medium.com/harrythegreat/aws-%EB%A1%9C%EB%93%9C%EB%B0%B8%EB%9F%B0%EC%8B%B1-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-9fd0955f859e   
https://nesoy.github.io/articles/2018-06/Load-Balancer   
 





