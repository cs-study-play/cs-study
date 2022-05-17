# nginx와 apache




# Apache와 (Apache) tomcat의 차이

### Apache

apache는 **Web Server**

- Web server : 웹 브라우저로부터 HTTP 요청을 받아 **정적인 컨텐츠** 전달
- 정적 파일 : html,javascript,css,image,물리적인 파일 등
    
    ![img1 daumcdn](https://user-images.githubusercontent.com/97663140/168602663-23d00d84-2438-45aa-adc6-2955dc2b8047.png)
    

### (Apache) Tomcat

(apache) Tomcat은 **WAS** = Web Server + **Web Container(Servlet Container)** Web Container가 추가된 것이 아파치 톰캣이다. 

- jsp 등 동적인 결과가 필요할 때 사용

### 웹 컨테이너의 역할

- 웹서버를 통해 필요한 페이지를 받는다.
- Container 가 web.xml(배포서술자=DD)를 참조하여 스레드 생성하여 요청 및 응답 객체를 생성하여 스레드에게 전달 (HttpServletrequest, HttpServletResponse)
- 스레드 및 응답객체 생성완료 시, Container 는 사용자의 요청에 맞는 Servlet을 호출한다.
- 스레드가 요청에 따라 doGet(), doPost()를 호출한다.
- 요청에 의해 생성된, doGet(), doPost() 메소드는 생성된 동적 페이지를 Response에 실어 Container에 전달.
- Container는 Response 객체를 HttpResponse 형태로 전환하여 웹서버에게 전달하고 생성된 스레드를 종료, 요청 및 응답 객체를 소멸

![img1 daumcdn 1](https://user-images.githubusercontent.com/97663140/168602651-a8cfcd8d-9043-4bc3-a682-9c9bce3e052a.png)



# NginX 와 Apache

### NginX

- NginX는 대용량 트래픽을 처리하기 위해 가벼움과 높은 성능을 목표로 하는 경량 웹 서버이다.
- 초기에는 정적 파일을 제공하는 웹 서버로 Apache를 보조하는 역할을 수행하였지만 오늘날에는 전체 범위의 서버 작업을 처리하는 웹 서버로 발전하였다.

⇒ NginX 웹 서버는 apache 웹 서버의 성능 제한을 해결하기 위해 탄생한 웹 서버이다.

### 차이점

1. **설계 아키텍처의 차이** 
- 클라이언트의 요청을 처리하고 응답하는 방식이 다르다.
    
    **Nginx**
    
- **이벤트 중심 접근 방식**으로, 하나의 스레드 내에서 여러 요청 처리
- 비동기 Event-Driven 구조: Event Handler에서 비동기 방식으로 먼저 처리되는 요청을 진행
- 코어 모듈이 Apache보다 **적은 리소스로도 많은 트래픽을 효율적으로 처리 가능**
    
    ![img1 daumcdn 2](https://user-images.githubusercontent.com/97663140/168602659-57cef2bb-2c34-40ce-8ebb-25d1bb31a358.png)
    
    **Apache**
    
- 프로세스 기반 접근 방식으로 **하나의 스레드가 하나의 요청을 처리**하는 구조
- 매 요청마다 스레드를 생성 및 할당해야 하기 때문에 리소스를 많이 잡아먹음

![img1 daumcdn 3](https://user-images.githubusercontent.com/97663140/168602662-4563b95a-f9f7-4739-bcb0-683f6743e0e1.png)

2. 성능 차이
- 정적/동적 컨텐츠를 제공하는 방식이 다르다.

**정적 컨텐츠**

- 서버 PC의 디스크에 저장하는 파일 기반 방법으로 정적 컨텐츠 제공
- 설계 아키텍처 구조상 **Nginx**가 적은 비용으로 효율적으로 제공

**동적 컨텐츠**

- 두 웹 서버 모두 서버 자체에서 동적 컨텐츠 처리 가능
- Nginx는 SCGI 핸들러와 FastCGI 모듈을 사용해서 동적 컨텐츠 제공할 수 있음
- 동적 컨텐츠는 두 웹서버 **성능이 비슷**함

3. OS 지원 여부

### **Nginx**

- 거의 모든 Unix 계열 OS 지원
- Windows는 부분적으로 지원

### **Apache**

- Linux 및 BSD를 포함한 모든 Unix 계열 OS 지원
- Windows 모두 지원

4. 요청을 처리 및 해석하는 방법

### **Nginx**

- 요청을 해석하기 위해 **URI**를 전달
- URI로 전달함으로써 웹 서버뿐만 아니라 프록시 서버, 로드 밸런서 및 HTTP 캐시로 쉽게 동작 가능
- 서버에서 클라이언트로 데이터가 전송되는 속도가 Apache보다 더 빠름

### **Apache**

- 요청을 해석하기 위해 **파일 시스템 위치** 전달
- URI 위치를 사용하지만 일반적으로 더 추상적인 디렉토리 구조를 사용

---

참고문헌

[https://yoo-hyeok.tistory.com/137](https://yoo-hyeok.tistory.com/137)

[https://sorjfkrh5078.tistory.com/289](https://sorjfkrh5078.tistory.com/289)
